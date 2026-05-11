'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
  role: string
  is_active: boolean
  created_at: string
}

const emptyForm = {
  email: '',
  password: '',
  name: '',
  role: 'staff',
}

const roles = [
  { value: 'owner', label: '대표이사' },
  { value: 'director', label: '소장' },
  { value: 'staff', label: '스텝' },
]

export default function AdminAccountsPage() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [changingPasswordId, setChangingPasswordId] = useState<string | null>(null)
  const [newPassword, setNewPassword] = useState('')

  useEffect(() => { fetchUsers() }, [])

  async function fetchUsers() {
    const res = await fetch('/api/admin/accounts')
    const data = await res.json()
    setUsers(data.users || [])
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const url = editingId ? `/api/admin/accounts/${editingId}` : '/api/admin/accounts'
      const method = editingId ? 'PATCH' : 'POST'
      const body = editingId ? { name: form.name, role: form.role } : form

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) throw new Error()

      setMessage(editingId ? '수정 완료' : '계정 생성 완료')
      setForm(emptyForm)
      setEditingId(null)
      fetchUsers()
    } catch {
      setMessage('오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  async function handlePasswordChange(id: string) {
    if (!newPassword) return
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/accounts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: newPassword }),
      })
      if (!res.ok) throw new Error()
      setMessage('비밀번호 변경 완료')
      setChangingPasswordId(null)
      setNewPassword('')
    } catch {
      setMessage('오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  async function handleToggleActive(user: User) {
    await fetch(`/api/admin/accounts/${user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: !user.is_active }),
    })
    fetchUsers()
  }

  async function handleDelete(id: string) {
    if (!confirm('정말 삭제하시겠습니까?')) return
    await fetch(`/api/admin/accounts/${id}`, { method: 'DELETE' })
    fetchUsers()
  }

  return (
    <div className='min-h-screen bg-[#F8F9FA]'>
      <header className='bg-[#0F1B3D] px-8 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <button onClick={() => router.push('/admin')} className='text-[#F6C400] hover:text-white transition text-sm'>← 대시보드</button>
          <span className='text-white font-bold text-lg ml-2'>계정 관리</span>
        </div>
      </header>

      <main className='max-w-4xl mx-auto px-8 py-10'>
        <div className='bg-white rounded-2xl p-8 border border-[#E8ECF1] mb-10'>
          <h2 className='text-[#0F1B3D] font-bold text-xl mb-6'>
            {editingId ? '계정 수정' : '새 계정 추가'}
          </h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-medium text-[#0F1B3D]'>이름 *</label>
                <input
                  type='text'
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]'
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-medium text-[#0F1B3D]'>역할</label>
                <select
                  value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}
                  className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400] bg-white'
                >
                  {roles.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                </select>
              </div>
            </div>

            {!editingId && (
              <>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-sm font-medium text-[#0F1B3D]'>이메일 *</label>
                  <input
                    type='email'
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]'
                  />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-sm font-medium text-[#0F1B3D]'>비밀번호 *</label>
                  <input
                    type='password'
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    required
                    className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]'
                  />
                </div>
              </>
            )}

            {message && <p className='text-sm text-green-600 font-medium'>{message}</p>}

            <div className='flex gap-3'>
              <button
                type='submit'
                disabled={loading}
                className='bg-[#F6C400] text-[#0F1B3D] font-bold px-8 py-3 rounded-xl hover:bg-[#e5b500] transition disabled:opacity-50'
              >
                {loading ? '처리 중...' : editingId ? '수정' : '계정 추가'}
              </button>
              {editingId && (
                <button
                  type='button'
                  onClick={() => { setEditingId(null); setForm(emptyForm) }}
                  className='px-8 py-3 rounded-xl border border-[#E8ECF1] text-[#5F6B7A] hover:bg-[#F8F9FA] transition'
                >
                  취소
                </button>
              )}
            </div>
          </form>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='text-[#0F1B3D] font-bold text-xl'>계정 목록 ({users.length})</h2>
          {users.map(user => (
            <div key={user.id} className='bg-white rounded-2xl p-6 border border-[#E8ECF1]'>
              <div className='flex items-start justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-1'>
                    <h3 className='font-bold text-[#0F1B3D]'>{user.name}</h3>
                    <span className='text-xs bg-[#F8F9FA] text-[#5F6B7A] px-2 py-0.5 rounded-full'>
                      {roles.find(r => r.value === user.role)?.label || user.role}
                    </span>
                    {!user.is_active && (
                      <span className='text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full'>비활성</span>
                    )}
                  </div>
                  <p className='text-[#5F6B7A] text-sm'>{user.email}</p>

                  {changingPasswordId === user.id && (
                    <div className='flex gap-2 mt-3'>
                      <input
                        type='password'
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        placeholder='새 비밀번호'
                        className='px-3 py-2 border border-[#E8ECF1] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F6C400]'
                      />
                      <button
                        onClick={() => handlePasswordChange(user.id)}
                        className='bg-[#F6C400] text-[#0F1B3D] font-bold px-4 py-2 rounded-lg text-sm'
                      >
                        변경
                      </button>
                      <button
                        onClick={() => { setChangingPasswordId(null); setNewPassword('') }}
                        className='px-4 py-2 border border-[#E8ECF1] rounded-lg text-sm text-[#5F6B7A]'
                      >
                        취소
                      </button>
                    </div>
                  )}
                </div>

                <div className='flex gap-2 shrink-0 flex-wrap justify-end'>
                  <button
                    onClick={() => { setEditingId(user.id); setForm({ ...emptyForm, name: user.name, role: user.role }) }}
                    className='text-sm px-3 py-1.5 border border-[#E8ECF1] rounded-lg hover:bg-[#F8F9FA] transition'
                  >
                    수정
                  </button>
                  <button
                    onClick={() => setChangingPasswordId(user.id)}
                    className='text-sm px-3 py-1.5 border border-[#E8ECF1] rounded-lg hover:bg-[#F8F9FA] transition'
                  >
                    비밀번호
                  </button>
                  <button
                    onClick={() => handleToggleActive(user)}
                    className={`text-sm px-3 py-1.5 rounded-lg transition ${user.is_active ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}
                  >
                    {user.is_active ? '비활성화' : '활성화'}
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className='text-sm px-3 py-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition'
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}