const JWT_SECRET = process.env.JWT_SECRET!

export interface AdminPayload {
  id: string
  email: string
  name: string
  role: string
}

export async function signToken(payload: AdminPayload): Promise<string> {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body = base64url(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8 }))
  const signature = await hmacSign(`${header}.${body}`, JWT_SECRET)
  return `${header}.${body}.${signature}`
}

export async function verifyToken(token: string): Promise<AdminPayload | null> {
  try {
    const [header, body, signature] = token.split('.')
    const expected = await hmacSign(`${header}.${body}`, JWT_SECRET)
    if (signature !== expected) return null
    const payload = JSON.parse(base64urlDecode(body)) as AdminPayload & { exp: number }
    if (payload.exp < Math.floor(Date.now() / 1000)) return null
    return payload
  } catch {
    return null
  }
}

async function hmacSign(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(data))
  return base64url(new Uint8Array(sig))
}

function base64url(input: string | Uint8Array): string {
  let bytes: Uint8Array
  if (typeof input === 'string') {
    bytes = new TextEncoder().encode(input)
  } else {
    bytes = input
  }
  let binary = ''
  bytes.forEach(b => binary += String.fromCharCode(b))
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function base64urlDecode(str: string): string {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}