import '../globals.css'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout" style={{ isolation: 'isolate' }}>
      {children}
    </div>
  )
}