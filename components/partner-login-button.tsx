'use client'

export function PartnerLoginButton() {
  function handleLogin() {
    const state = crypto.randomUUID()
    sessionStorage.setItem('oauth_state', state)

    const params = new URLSearchParams({
      client_id: 'noljak_global_client',
      redirect_uri: 'https://www.noljak.global/auth/callback',
      response_type: 'code',
      scope: 'openid profile email academy',
      state,
    })

    window.location.href = `https://academy.noljak.global/oauth/authorize?${params}`
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-[#F6C400] text-[#0F1B3D] font-bold text-sm px-4 h-8 rounded-md hover:bg-[#e5b500] transition-colors whitespace-nowrap"
    >
      Partner Login
    </button>
  )
}
