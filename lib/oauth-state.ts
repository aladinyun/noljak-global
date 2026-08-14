/**
 * 원장 SSO(OAuth) 로그인의 state 파라미터 관리.
 *
 * state 는 CSRF 방어 장치다. 로그인을 시작할 때 무작위 값을 만들어 브라우저에 저장하고,
 * 콜백(/auth/callback)으로 돌아왔을 때 같은 값이 돌아왔는지 대조한다.
 * 대조에 실패하면 공격자가 심어 놓은 authorization code 일 수 있으므로 로그인을 거부한다.
 *
 * 저장 위치로 sessionStorage 가 아니라 쿠키를 쓰는 이유:
 *   푸터의 "Noljak Partner Portal" 링크는 target="_blank" 로 새 탭을 연다.
 *   rel="noopener" 가 붙은 새 최상위 브라우징 컨텍스트는 원래 탭의 sessionStorage 를
 *   물려받지 않기 때문에, 새 탭에서 열리는 콜백은 저장된 state 를 영영 읽을 수 없다.
 *   쿠키는 같은 오리진의 모든 탭이 공유하므로 새 탭/같은 탭 모두에서 동작한다.
 */

const STATE_COOKIE = 'noljak_oauth_state'

// authorization code TTL(apps/api: 10분)과 맞춘다. 그 이상 지난 로그인 시도는 어차피 무효.
const STATE_TTL_SECONDS = 600

const AUTHORIZE_ENDPOINT = 'https://api.noljak.global/api/oauth/authorize'
const CLIENT_ID = 'noljak_global_client'
const REDIRECT_URI = 'https://www.noljak.global/auth/callback'
const SCOPE = 'openid profile email academy'

/** 추측 불가능한 state 값 생성. */
function createState(): string {
  // randomUUID 는 보안 컨텍스트(https / localhost)에서만 제공된다 — 아닌 환경은 폴백.
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
}

function writeStateCookie(state: string): void {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${STATE_COOKIE}=${encodeURIComponent(state)}; path=/; max-age=${STATE_TTL_SECONDS}; SameSite=Lax${secure}`
}

/** 저장된 state 를 읽고 즉시 삭제한다(1회용 — 재사용 공격 방지). */
export function consumeStoredState(): string | null {
  const entry = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${STATE_COOKIE}=`))

  // 값 유무와 상관없이 항상 삭제해 재사용을 막는다.
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${STATE_COOKIE}=; path=/; max-age=0; SameSite=Lax${secure}`

  if (!entry) return null
  const value = decodeURIComponent(entry.slice(STATE_COOKIE.length + 1))
  return value || null
}

/**
 * 원장 SSO 로그인 시작.
 * state 를 만들어 저장한 뒤 api.noljak.global 의 authorize 엔드포인트로 이동한다.
 *
 * @param newTab true 면 새 탭에서 연다(푸터 링크의 기존 동작 유지).
 */
export function startPartnerLogin(newTab = false): void {
  const state = createState()
  writeStateCookie(state)

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPE,
    state,
  })
  const url = `${AUTHORIZE_ENDPOINT}?${params}`

  if (newTab) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}
