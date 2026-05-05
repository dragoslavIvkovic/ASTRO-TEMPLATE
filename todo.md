# TODO

## Sažetak

- `Resend` zahteva server-side runtime. U ovom projektu pošiljanje emaila je u `src/actions/index.ts`, pa se izvršava na backendu.
- Trenutna Astro konfiguracija koristi `@astrojs/node` adapter i nije direktno Cloudflare-friendly.
- `astro dev` će i dalje raditi normalno ako prebaciš na Cloudflare adapter.
- Ako želiš Cloudflare Pages ili Workers, ne moraš koristiti Node u produkciji.
- Ako ostaviš samo statički build (`output: 'static'`) bez servera, email slanje neće raditi.

## Preporuke

1. Ako koristiš Cloudflare sa `Resend` server action:
   - prebaci adapter na `@astrojs/cloudflare` u `astro.config.ts`
   - postavi `RESEND_API_KEY` u Cloudflare environment variables
   - koristi `astro dev` za lokalni rad

2. Ako ideš na Cloudflare Pages kao statički sajt:
   - ukloni `adapter: node({ mode: 'standalone' })`
   - ostavi `output: 'static'`
   - podesi `build command: npm run build`
   - podesi `publish directory: dist/`
   - napomena: tada ne možeš koristiti server-side `Resend` action bez dodatnog serverless backenda.

## Ideje za dalje

- Proveriti da li se `src/actions/index.ts` koristi kao forma koja stvarno šalje email, i testirati slanje lokalno.
- Ako želiš Cloudflare Workers, proveriti kompatibilnost `resend` paketa sa Cloudflare runtime-om.
- Razmotriti postavljanje Cloudflare Pages Functions ako treba samo lako serverless rešenje bez punog Node deploymenta.
- Ako želiš zadržati Node, deployment može ići na platforme kao što su Vercel, Netlify, Render ili Fly.io, umesto Cloudflare.
