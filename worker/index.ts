export default {
  async fetch(request: Request) {
    return new Response(JSON.stringify({ ok: true, message: "Worker is alive" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  },
}
