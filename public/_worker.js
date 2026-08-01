export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === "/api/booking/notify" && request.method === "POST") {
      const apiKey = env.RESEND_API_KEY
      if (!apiKey) {
        return new Response(JSON.stringify({ error: "Email service not configured." }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        })
      }

      let payload
      try {
        payload = await request.json()
      } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON." }), { status: 400 })
      }

      const { full_name, email, placement, size, style, color_type, description, preferred_dates, artist_preference, budget } = payload
      if (!full_name || !email || !placement || !description) {
        return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 })
      }

      const detailLines = [
        placement ? `Placement: ${placement}` : null,
        size ? `Size: ${size}` : null,
        style ? `Style: ${style}` : null,
        color_type ? `Color type: ${color_type}` : null,
        preferred_dates ? `Preferred dates: ${preferred_dates}` : null,
        artist_preference ? `Artist preference: ${artist_preference || "None"}` : null,
        budget ? `Budget: ${budget}` : null,
      ].filter(Boolean).join("\n")

      const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

      const customerPayload = {
        from: "Seven Sins Tattoo <notifications@send.sevensins.ing>",
        to: [email],
        subject: `Your consultation request \u2014 Seven Sins Tattoo`,
        html: `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px;background:#0D0D0D;color:#C8B89A;line-height:1.6"><p style="font-size:11px;font-family:system-ui,sans-serif;font-weight:500;text-transform:uppercase;letter-spacing:0.2em;color:#C8B89A;opacity:0.6;margin:0 0 24px">Consultation Received</p><h1 style="font-family:Playfair Display,Georgia,serif;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:0.02em;color:#ffffff;margin:0 0 20px;line-height:1.15">Thank You,<br/>${esc(full_name)}</h1><p style="font-size:16px;margin:0 0 16px">Your consultation request has been received. The studio will review your project details and contact you within 48 hours.</p><p style="font-size:14px;margin:0 0 28px;opacity:0.7">This email confirms your inquiry \u2014 it does not confirm a tattoo appointment. A 15% deposit will be required only after the project and appointment details are approved.</p><div style="border-top:1px solid rgba(200,184,154,0.1);border-bottom:1px solid rgba(200,184,154,0.1);padding:24px 0;margin:0 0 28px"><p style="font-family:system-ui,sans-serif;font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:0.15em;color:#C8B89A;opacity:0.5;margin:0 0 12px">Your Project Details</p><p style="font-family:Georgia,serif;font-size:14px;color:#C8B89A;opacity:0.75;margin:0;line-height:1.8;white-space:pre-wrap">${esc(detailLines)}</p><p style="font-family:Georgia,serif;font-size:14px;color:#C8B89A;opacity:0.75;margin:8px 0 0;line-height:1.8;white-space:pre-wrap">Your idea:\n${esc(description)}</p></div><p style="font-size:13px;margin:0 0 8px;opacity:0.5">Seven Sins Tattoo</p><p style="font-size:13px;margin:0;opacity:0.5">152 Everett St, Folkston, GA 31537</p><p style="font-size:13px;margin:0;opacity:0.5">hello@sevensins.ing</p></div>`,
      }

      const adminPayload = {
        from: "Seven Sins Tattoo <notifications@send.sevensins.ing>",
        to: ["hello@sevensins.ing"],
        subject: `New consultation \u2014 ${full_name}`,
        html: `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px;background:#0D0D0D;color:#C8B89A;line-height:1.6"><p style="font-size:11px;font-family:system-ui,sans-serif;font-weight:500;text-transform:uppercase;letter-spacing:0.2em;color:#C8B89A;opacity:0.6;margin:0 0 24px">New Consultation</p><h1 style="font-family:Playfair Display,Georgia,serif;font-size:24px;font-weight:900;text-transform:uppercase;letter-spacing:0.02em;color:#ffffff;margin:0 0 20px;line-height:1.15">${esc(full_name)}</h1><div style="border-top:1px solid rgba(200,184,154,0.1);border-bottom:1px solid rgba(200,184,154,0.1);padding:24px 0;margin:0 0 16px"><p style="font-family:Georgia,serif;font-size:14px;color:#C8B89A;opacity:0.75;margin:0;line-height:1.8;white-space:pre-wrap">Name: ${esc(full_name)}\nEmail: ${esc(email)}\n${esc(detailLines)}</p></div><p style="font-size:14px;margin:0 0 8px;opacity:0.7">Tattoo idea:</p><p style="font-size:14px;margin:0 0 28px;opacity:0.5;font-style:italic">${esc(description)}</p></div>`,
      }

      try {
        const [c, a] = await Promise.all([
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify(customerPayload),
          }),
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify(adminPayload),
          }),
        ])

        const [cBody, aBody] = await Promise.all([c.json(), a.json()])
        return new Response(JSON.stringify({ ok: true, customer_email_id: cBody.id, admin_email_id: aBody.id }), {
          status: 200,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        })
      } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to send email.", detail: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        })
      }
    }

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" },
      })
    }

    // Fall through to static assets
    return fetch(request)
  },
}
