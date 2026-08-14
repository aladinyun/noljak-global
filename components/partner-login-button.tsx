'use client'

import { startPartnerLogin } from '@/lib/oauth-state'

/**
 * 원장 SSO 로그인 버튼. (현재 렌더링되는 곳은 없고, 실제 진입점은 푸터의 Partner Portal 링크)
 * state 생성/저장 로직은 lib/oauth-state 에 모아 두 진입점이 절대 어긋나지 않게 한다 —
 * 예전에는 이 버튼만 state 를 저장하고 푸터 링크는 고정값을 쓰는 바람에
 * 콜백의 state 검증을 켤 수 없었다.
 */
export function PartnerLoginButton() {
  return (
    <button
      onClick={() => startPartnerLogin()}
      className="bg-[#F6C400] text-[#0F1B3D] font-bold text-sm px-4 h-8 rounded-md hover:bg-[#e5b500] transition-colors whitespace-nowrap"
    >
      Partner Login
    </button>
  )
}
