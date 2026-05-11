'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Pencil, Trash2, Plus, Upload, Download, X } from 'lucide-react'

interface Center {
  id: string
  name: string
  country: string
  region: string | null
  city: string
  address: string
  phone: string | null
  email: string | null
  maps_url: string | null
  lat: number | null
  lng: number | null
  is_published: boolean
  sort_order: number
  created_at: string
}

const emptyForm = {
  name: '',
  country: '',
  region: '',
  city: '',
  address: '',
  phone: '',
  email: '',
  maps_url: '',
  lat: '',
  lng: '',
  is_published: true,
  sort_order: 0,
}

type FormState = typeof emptyForm

const CSV_TEMPLATE = 'name,country,region,city,address,phone,email,maps_url,lat,lng,sort_order\n'

function parseCSV(text: string): FormState[] {
  const lines = text.trim().split('\n')
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
  return lines.slice(1).map(line => {
    const values: string[] = []
    let current = ''
    let inQuotes = false
    for (const char of line) {
      if (char === '"') { inQuotes = !inQuotes }
      else if (char === ',' && !inQuotes) { values.push(current.trim()); current = '' }
      else { current += char }
    }
    values.push(current.trim())
    const row: Record<string, string> = {}
    headers.forEach((h, i) => { row[h] = values[i] ?? '' })
    return {
      name: row.name || '',
      country: row.country || '',
      region: row.region || '',
      city: row.city || '',
      address: row.address || '',
      phone: row.phone || '',
      email: row.email || '',
      maps_url: row.maps_url || '',
      lat: row.lat || '',
      lng: row.lng || '',
      is_published: true,
      sort_order: parseInt(row.sort_order) || 0,
    }
  }).filter(r => r.name && r.country && r.city && r.address)
}

function buildPayload(form: FormState) {
  return {
    name: form.name,
    country: form.country,
    region: form.region || null,
    city: form.city,
    address: form.address,
    phone: form.phone || null,
    email: form.email || null,
    maps_url: form.maps_url || null,
    lat: form.lat !== '' ? parseFloat(form.lat) : null,
    lng: form.lng !== '' ? parseFloat(form.lng) : null,
    is_published: form.is_published,
    sort_order: form.sort_order,
  }
}

export default function AdminCentersPage() {
  const router = useRouter()
  const [centers, setCenters] = useState<Center[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [csvProgress, setCsvProgress] = useState('')
  const [csvResult, setCsvResult] = useState('')
  const csvRef = useRef<HTMLInputElement>(null)

  useEffect(() => { fetchCenters() }, [])

  async function fetchCenters() {
    const res = await fetch('/api/admin/centers')
    const data = await res.json()
    setCenters(Array.isArray(data) ? data : [])
  }

  function openAdd() {
    setEditingId(null)
    setForm(emptyForm)
    setMessage('')
    setModalOpen(true)
  }

  function openEdit(center: Center) {
    setEditingId(center.id)
    setForm({
      name: center.name,
      country: center.country,
      region: center.region || '',
      city: center.city,
      address: center.address,
      phone: center.phone || '',
      email: center.email || '',
      maps_url: center.maps_url || '',
      lat: center.lat?.toString() || '',
      lng: center.lng?.toString() || '',
      is_published: center.is_published,
      sort_order: center.sort_order,
    })
    setMessage('')
    setModalOpen(true)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const url = editingId ? `/api/admin/centers/${editingId}` : '/api/admin/centers'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload(form)),
      })
      if (!res.ok) throw new Error()
      setMessage(editingId ? '수정 완료' : '등록 완료')
      fetchCenters()
      setTimeout(() => { setModalOpen(false); setMessage('') }, 700)
    } catch {
      setMessage('오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('삭제하시겠습니까?')) return
    await fetch(`/api/admin/centers/${id}`, { method: 'DELETE' })
    fetchCenters()
  }

  async function handleTogglePublish(center: Center) {
    await fetch(`/api/admin/centers/${center.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_published: !center.is_published }),
    })
    fetchCenters()
  }

  async function handleCsvUpload() {
    if (!csvFile) return
    const text = await csvFile.text()
    const rows = parseCSV(text)
    if (rows.length === 0) {
      setCsvResult('유효한 데이터가 없습니다. (name, country, city, address 필수)')
      return
    }
    let success = 0
    let fail = 0
    for (let i = 0; i < rows.length; i++) {
      setCsvProgress(`업로드 중 ${i + 1}/${rows.length}...`)
      try {
        const res = await fetch('/api/admin/centers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(buildPayload(rows[i])),
        })
        if (res.ok) success++
        else fail++
      } catch {
        fail++
      }
    }
    setCsvProgress('')
    setCsvResult(`완료: ${success}개 성공${fail > 0 ? `, ${fail}개 실패` : ''}`)
    setCsvFile(null)
    if (csvRef.current) csvRef.current.value = ''
    fetchCenters()
  }

  function downloadTemplate() {
    const blob = new Blob([CSV_TEMPLATE], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'centers_template.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  const field = (
    label: string,
    key: keyof FormState,
    opts?: { type?: string; placeholder?: string; required?: boolean; step?: string }
  ) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#0F1B3D]">
        {label}{opts?.required && ' *'}
      </label>
      <input
        type={opts?.type ?? 'text'}
        step={opts?.step}
        value={form[key] as string | number}
        onChange={e => setForm({ ...form, [key]: e.target.value })}
        required={opts?.required}
        placeholder={opts?.placeholder}
        className="px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400] text-sm"
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <header className="bg-[#0F1B3D] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/admin')}
            className="text-[#F6C400] hover:text-white transition text-sm"
          >
            ← 대시보드
          </button>
          <span className="text-white font-bold text-lg ml-2">Find Center 관리</span>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#F6C400] text-[#0F1B3D] font-semibold px-5 py-2 rounded-xl hover:bg-[#e5b500] transition text-sm"
        >
          <Plus size={15} />
          Add Center
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-10 flex flex-col gap-6">

        {/* CSV Upload Bar */}
        <div className="bg-white rounded-xl border border-[#E8ECF1] px-6 py-4 flex flex-wrap items-center gap-4">
          <span className="text-sm font-semibold text-[#0F1B3D] shrink-0">CSV 일괄 업로드</span>
          <input
            ref={csvRef}
            type="file"
            accept=".csv"
            onChange={e => { setCsvFile(e.target.files?.[0] || null); setCsvResult('') }}
            className="text-sm text-[#5F6B7A] file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-[#F8F9FA] file:text-[#0F1B3D] file:font-medium hover:file:bg-[#E8ECF1] cursor-pointer"
          />
          <button
            onClick={handleCsvUpload}
            disabled={!csvFile || !!csvProgress}
            className="flex items-center gap-2 bg-[#0F1B3D] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a2d5a] transition disabled:opacity-40 shrink-0"
          >
            <Upload size={13} />
            {csvProgress || '업로드'}
          </button>
          <button
            onClick={downloadTemplate}
            className="flex items-center gap-1.5 text-sm text-[#5F6B7A] hover:text-[#0F1B3D] transition shrink-0"
          >
            <Download size={13} />
            템플릿 다운로드
          </button>
          {csvResult && (
            <span className={`text-sm font-medium ${csvResult.includes('실패') ? 'text-orange-500' : 'text-green-600'}`}>
              {csvResult}
            </span>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#E8ECF1] overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-[#E8ECF1]">
            <h2 className="text-[#0F1B3D] font-bold text-base">센터 목록 ({centers.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#E8ECF1]">
                  <th className="text-left px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">국가</th>
                  <th className="text-left px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">도시</th>
                  <th className="text-left px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">센터명</th>
                  <th className="text-left px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">주소</th>
                  <th className="text-left px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">연락처</th>
                  <th className="text-center px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">지도</th>
                  <th className="text-center px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">공개</th>
                  <th className="text-center px-4 py-3 text-[#5F6B7A] font-medium whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {centers.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-14 text-[#5F6B7A] text-sm">
                      등록된 센터가 없습니다.
                    </td>
                  </tr>
                ) : (
                  centers.map(center => (
                    <tr key={center.id} className="border-b border-[#E8ECF1] hover:bg-[#FAFBFC] transition-colors">
                      <td className="px-4 py-3 text-[#0F1B3D] font-medium whitespace-nowrap">{center.country}</td>
                      <td className="px-4 py-3 text-[#0F1B3D] whitespace-nowrap">{center.city}</td>
                      <td className="px-4 py-3 text-[#0F1B3D] font-medium max-w-[160px]">
                        <span className="block truncate">{center.name}</span>
                      </td>
                      <td className="px-4 py-3 text-[#5F6B7A] max-w-[220px]">
                        <span className="block truncate">{center.address}</span>
                      </td>
                      <td className="px-4 py-3 text-[#5F6B7A] whitespace-nowrap">{center.phone || '—'}</td>
                      <td className="px-4 py-3 text-center">
                        {center.maps_url ? (
                          <a
                            href={center.maps_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#FFF8E1] text-[#F6C400] hover:bg-[#F6C400] hover:text-white transition"
                            title="Google Maps 열기"
                          >
                            <MapPin size={14} />
                          </a>
                        ) : (
                          <span className="text-[#D0D5DD] text-xs">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleTogglePublish(center)}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                            center.is_published
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-[#F8F9FA] text-[#5F6B7A] hover:bg-[#E8ECF1]'
                          }`}
                        >
                          {center.is_published ? '공개' : '비공개'}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => openEdit(center)}
                            className="p-1.5 rounded-lg border border-[#E8ECF1] hover:bg-[#F8F9FA] text-[#5F6B7A] hover:text-[#0F1B3D] transition"
                            title="수정"
                          >
                            <Pencil size={13} />
                          </button>
                          <button
                            onClick={() => handleDelete(center.id)}
                            className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-400 hover:text-red-600 transition"
                            title="삭제"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between px-8 py-5 border-b border-[#E8ECF1] sticky top-0 bg-white rounded-t-2xl z-10">
              <h2 className="text-[#0F1B3D] font-bold text-lg">
                {editingId ? '센터 수정' : '새 센터 등록'}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg hover:bg-[#F8F9FA] text-[#5F6B7A] transition"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-8 py-6 flex flex-col gap-4">
              {field('센터명', 'name', { required: true, placeholder: 'Noljak Seoul Center' })}

              <div className="grid grid-cols-2 gap-4">
                {field('국가', 'country', { required: true, placeholder: 'Korea' })}
                {field('지역', 'region', { placeholder: 'Gyeonggi-do (선택)' })}
              </div>

              {field('도시', 'city', { required: true, placeholder: 'Seoul' })}
              {field('주소', 'address', { required: true, placeholder: '123 Noljak St, Mapo-gu' })}

              <div className="grid grid-cols-2 gap-4">
                {field('전화번호', 'phone', { placeholder: '+82-2-1234-5678' })}
                {field('이메일', 'email', { type: 'email', placeholder: 'center@noljak.com' })}
              </div>

              {field('Google Maps URL', 'maps_url', { type: 'url', placeholder: 'https://maps.google.com/...' })}

              <div className="grid grid-cols-2 gap-4">
                {field('위도 (lat)', 'lat', { type: 'number', step: 'any', placeholder: '37.5665' })}
                {field('경도 (lng)', 'lng', { type: 'number', step: 'any', placeholder: '126.9780' })}
              </div>

              <div className="grid grid-cols-2 gap-4 items-end">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#0F1B3D]">노출 순서</label>
                  <input
                    type="number"
                    value={form.sort_order}
                    onChange={e => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })}
                    className="px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400] text-sm"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer pb-3">
                  <input
                    type="checkbox"
                    checked={form.is_published}
                    onChange={e => setForm({ ...form, is_published: e.target.checked })}
                    className="w-4 h-4 accent-[#F6C400]"
                  />
                  <span className="text-sm text-[#0F1B3D]">공개</span>
                </label>
              </div>

              {message && (
                <p className={`text-sm font-medium ${message.includes('오류') ? 'text-red-500' : 'text-green-600'}`}>
                  {message}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#F6C400] text-[#0F1B3D] font-bold px-8 py-3 rounded-xl hover:bg-[#e5b500] transition disabled:opacity-50"
                >
                  {loading ? '처리 중...' : editingId ? '수정' : '등록'}
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-8 py-3 rounded-xl border border-[#E8ECF1] text-[#5F6B7A] hover:bg-[#F8F9FA] transition"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
