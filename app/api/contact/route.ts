import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, country, businessType, message } = await request.json()

  if (!name || !email || !country || !businessType || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: 'noljak@noljak.global',
    to: 'contact@noljakedu.com',
    subject: `[Global Business Inquiry] from ${name} - ${country}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #e94560; padding-bottom: 10px;">
          New Global Business Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 30%;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Country</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${country}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Business Type</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${businessType}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f5f5f5; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, id: data?.id })
}
