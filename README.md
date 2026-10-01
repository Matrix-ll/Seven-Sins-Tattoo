# Seven Sins Tattoo

Independent Vite + React website for Seven Sins Tattoo.

## Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Express
- Resend
- Hostinger Web Apps

## Local development
```sh
npm install
npm run dev
```

## Production
```sh
npm run build
npm start
```

The Express server serves the Vite build from `dist/` and exposes:

- `GET /api/health`
- `POST /api/booking/notify`

Configure production values through Hostinger Environment Variables.

Required:
- `RESEND_API_KEY`

Optional:
- `RESEND_FROM_EMAIL`
- `BOOKING_NOTIFY_EMAIL`

Do not commit live credentials or API keys.
