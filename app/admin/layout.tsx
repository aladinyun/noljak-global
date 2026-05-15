import "../globals.css"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <div className="isolate">
          {children}
        </div>
      </body>
    </html>
  )
}
