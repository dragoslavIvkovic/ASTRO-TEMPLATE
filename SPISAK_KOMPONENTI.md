# Struktura Komponenti (AstroWind)

Ovaj dokument sadrži pregled svih ključnih komponenti (vidžeta) koje se koriste na stranicama u AstroWind temi. Koristite ovaj spisak kako biste lakše odlučili koje sekcije želite da zadržite, a koje da izbrišete sa određenih stranica (npr. sa `index.astro`, `about.astro`, itd.).

Kada zatražite od AI-a da obriše neku sekciju, slobodno referencirajte ime komponente iz ovog fajla.

## Glavne Komponente (Widgets)

### 1. `Hero` / `Hero2` / `HeroText`
- **Gde se nalazi:** `src/components/widgets/Hero.astro`
- **Opis:** Glavna sekcija na vrhu stranice (naslov, podnaslov, glavni Call-to-Action dugmići, slika ili video).
- **Kada obrisati:** Ako stranici nije potreban vizuelno naglašen vrh (retko se briše, ali se menja tip - npr. prelaz sa `Hero` na `HeroText` za manje stranice).

### 2. `Features` / `Features2` / `Features3`
- **Gde se nalazi:** `src/components/widgets/Features.astro` (itd.)
- **Opis:** Prikaz karakteristika usluge/proizvoda pomoću ikonica i teksta (najčešće u mreži od 2, 3 ili 4 kolone).
  - `Features`: Standardni grid sa ikonicama.
  - `Features2`: Karte (Cards) dizajn ili lista.
  - `Features3`: Detaljnije funkcionalnosti (često korišćeno za prikaz opcija, lokacija ili timova).
- **Kada obrisati:** Obrisati blok ako klijent nema šta da istakne u formi grid/karata (npr. nema 6 glavnih usluga).

### 3. `Content`
- **Gde se nalazi:** `src/components/widgets/Content.astro`
- **Opis:** Sekcija koja obično sadrži sliku sa jedne strane i tekst (sa listom funkcionalnosti) sa druge strane. Podržava `isReversed` kako bi se slika prebacila na suprotnu stranu.
- **Kada obrisati:** Ako nemate "duži tekst" za pojašnjenje procesa ili proizvoda na stranici.

### 4. `Steps` / `Steps2`
- **Gde se nalazi:** `src/components/widgets/Steps.astro`
- **Opis:** Prikazuje proces korak-po-korak (npr. 1. Prijava, 2. Rad, 3. Rezultat).
- **Kada obrisati:** Ako proces saradnje sa klijentom nije jasan ili nije potreban.

### 5. `Stats`
- **Gde se nalazi:** `src/components/widgets/Stats.astro`
- **Opis:** Brojke (npr. "100+ Klijenata", "15 Godina iskustva").
- **Kada obrisati:** Ako klijent nema relevantnu statistiku kojom bi se hvalio.

### 6. `Testimonials`
- **Gde se nalazi:** `src/components/widgets/Testimonials.astro`
- **Opis:** Recenzije korisnika i klijenata (slika, ime, komentar).
- **Kada obrisati:** Ako klijent nema javne recenzije.

### 7. `Brands`
- **Gde se nalazi:** `src/components/widgets/Brands.astro`
- **Opis:** Logo sekcija ("Klijenti sa kojima sarađujemo" ili "Partneri").
- **Kada obrisati:** Ako klijent nema značajne partnere.

### 8. `FAQs`
- **Gde se nalazi:** `src/components/widgets/FAQs.astro`
- **Opis:** Često postavljana pitanja u vidu harmonike (accordion).
- **Kada obrisati:** Ako nema potrebe za FAQ sekcijom.

### 9. `Pricing`
- **Gde se nalazi:** `src/components/widgets/Pricing.astro`
- **Opis:** Cenovnik paketa (Standard, Premium, itd.).
- **Kada obrisati:** Ako klijent nema javno dostupne cene ili nudi samo B2B usluge na upit.

### 10. `CallToAction`
- **Gde se nalazi:** `src/components/widgets/CallToAction.astro`
- **Opis:** Donja traka neposredno iznad footera koja podstiče korisnika na finalnu akciju (npr. "Kontaktirajte nas danas").
- **Kada obrisati:** Uglavnom se zadržava, ali ako je stranica čisto informativna, može se skloniti.

### 11. `BlogLatestPosts`
- **Gde se nalazi:** `src/components/widgets/BlogLatestPosts.astro`
- **Opis:** Prikazuje 3-4 poslednja članka sa bloga.
- **Kada obrisati:** Ako sajt za klijenta neće imati blog sekciju.

### 12. `ContactUs`
- **Gde se nalazi:** `src/components/widgets/Contact.astro`
- **Opis:** Kontakt forma (koristi se prvenstveno na `contact.astro`).
- **Kada obrisati:** Ako klijent želi samo broj telefona bez kontakt forme.

---

## Kako obrisati? (Uputstvo za AI)

Kada radite na nekoj stranici (npr. `src/pages/index.astro`), ona je sastavljena isključivo od ovih blokova (`<Hero>`, `<Features>`, `<Content>`, itd.). 

**Za korisnika:** Ako hoćete da obrišete nešto, samo recite AI-ju: 
*"Izbriši `<Stats>`, `<Brands>` i `<BlogLatestPosts>` sa naslovne strane."*

AI će zatim pronaći te blokove koda unutar fajla i bezbedno ih ukloniti, ostavljajući ostatak stranice netaknutim.
