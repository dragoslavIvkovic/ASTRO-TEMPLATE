# Uputstvo za Brzo Pokretanje Novog Klijenta (Mass-Production)

Ovaj repozitorijum je optimizovan za brzo kloniranje i podešavanje za nove klijente. 

## 1. Konfiguracija (Jedna Datoteka)
Svi ključni podaci o klijentu, SEO podešavanja i osnovni dizajn se nalaze u **jednoj** datoteci:
`src/site-config.ts`

Kada preuzmete projekat za novog klijenta, otvorite `src/site-config.ts` i ažurirajte objekat `SITE_DATA`:
- `client`: Ime, adresa, telefon, radno vreme. Ovde se nalaze i tekstovi za `about` stranicu (title, description) i `contact` stranicu (title, description).
- `seo`: Naslov, opis, ključne reči.
- `design`: Boje brenda (HEX format).
- `forms`: Email adresa na koju stižu upiti sa kontakt formi.
- `social`: Linkovi do društvenih mreža. Možete ih sakriti tako što ćete postaviti `visible: false`.

Sistemski fajlovi (Layout, Meta komponente, Navigacija, Footer, About, Contact stranice) automatski vuku ove podatke. Nema potrebe da tražite gde se menja logo, title tag, adresa firme, ili da li treba prikazati LinkedIn ikonicu po celom kodu.

## 2. Povezivanje sa Cloudflare Pages / Vercel / Netlify
Ukoliko neke podatke (npr. Form Email ili API ključeve) ne želite da držite u kodu, možete koristiti promenljive okruženja (Environment Variables).

Na Cloudflare Pages dashboard-u (Settings > Environment Variables), dodajte:
- `PUBLIC_RECIPIENT_EMAIL` = `noviklijent@email.com`

Zatim u `site-config.ts` pročitajte tu promenljivu:
```ts
forms: {
  recipientEmail: import.meta.env.PUBLIC_RECIPIENT_EMAIL || 'default@klijent.com',
}
```

## 3. Promena Sadržaja
Nakon što postavite config fajl, preostaje samo da:
1. Zamenite slike u `src/assets/images/` (posebno `logo.svg` i `default-og.jpg`).
2. Ažurirate tekstove u specifičnim Astro stranicama (`src/pages/index.astro` itd.), koristeći varijable iz config fajla gde je moguće (npr. `{SITE_DATA.client.phone}`).
