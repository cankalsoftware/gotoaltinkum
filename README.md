# ☀️ GoToAltinkum.com — Official Altınkum & Didim Tourism & Local Portal

The definitive digital guide for **Altınkum & Didim, Aydın, Türkiye**. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Lucide icons, and `pnpm`.

---

## 🌟 Key Features

1. **Live Pulse Telemetry & FX Feeds**:
   - 60-minute automatic background sensor cadence to minimize server load.
   - Interactive **"Get Latest Update"** instant manual refresh button with live verification check.
   - Real-time Open-Meteo weather telemetry, sea temperature approximation, and live GBP/EUR/USD exchange rates.

2. **Flight Search & Route Discovery Hub (Skyscanner & 6 Major Airlines)**:
   - Interactive Skyscanner-style flight route explorer for **Milas-Bodrum (BJV)** and **Izmir (ADB)**.
   - Tailored route ideas, flight times, seasonality, and indicative price brackets.
   - Direct verified links to **Skyscanner**, **EasyJet**, **Jet2.com**, **TUI Airways**, **SunExpress**, **Turkish Airlines**, and **Condor**.
   - Airport gateway comparison (BJV vs ADB) and insider seasonal booking tips.
   - Informational disclaimer clarifying the portal provides discovery/links rather than direct ticketing.

3. **Summery Mediterranean Aesthetics**:
   - Golden sun, turquoise Aegean waters, glassmorphism, responsive cards, and micro-animations.
   - High-resolution photography of Altınkum Beach, the Temple of Apollo, D-Marin Marina, and Aegean dining.

4. **SEO, AEO & GEO Optimization**:
   - **SEO**: Dynamic XML sitemap (`/sitemap.xml`), `robots.txt`, rich OpenGraph & Twitter cards, and canonical URL tags.
   - **AEO (Answer Engine Optimization)**: Direct Q&A blocks and `public/llms.txt` structured specifically for Perplexity, ChatGPT Search, and Google AI Overviews.
   - **GEO (Generative Engine Optimization & Geo-Targeting)**: Complete JSON-LD schemas (`TouristDestination`, `TouristAttraction`, `FAQPage`, `BreadcrumbList`, `Organization`, `Place`) with precise GPS coordinates (`37.3620° N, 27.2764° E`).

5. **Interactive Visitor Modules**:
   - **Beach Explorer**: Filterable guide across 6 beaches (1st Bay, 2nd Bay, 3rd Bay, Cennet Koyu, Akbük, Tavşanburnu) with sand quality, depth, Blue Flag status, and Google Maps links.
   - **Oracle & Ancient History**: Deep dive into the Temple of Apollo (Didyma), Medusa head, Miletus (birthplace of philosophy), Priene, and Lake Bafa.
   - **Local News & Events**: Live feed covering Didim VegFest, D-Marin regattas, night lighting tours, and weekly farmer markets.
   - **Aegean Gastronomy & Nightlife**: Fresh grilled sea bass, cold-pressed Memecik olive oil, mezes, and Yalı Caddesi beachfront dining.
   - **Day Trips & Excursions**: 5-Bays Gulet cruises, scuba diving, and Ephesus/Pamukkale excursions.
   - **Transport & Essentials Hub**: Distance calculators for Bodrum (BJV) & Izmir (ADB) airports, local Dolmuş routes, climate tables, and emergency numbers.

6. **Commercial Advertising Portal for Local Businesses**:
   - Direct integration with `info@gotoaltinkum.com`
   - Advertising tiers (Verified Listing, Gold Showcase, Diamond Sponsor)
   - Interactive business inquiry generator with prefilled email and 1-click clipboard copy.

---

## 🚀 Getting Started with pnpm

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Local Development Server
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
pnpm run build
pnpm run start
```

---

## 🚢 GitHub & Vercel Deployment

1. Commit and push your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete GoToAltinkum summery portal with AEO/SEO/GEO and commercial advertising"
   git push origin main
   ```
2. In [Vercel](https://vercel.com):
   - Import your GitHub repository (`gotoaltinkum`).
   - Framework preset will automatically detect **Next.js**.
   - Package manager: **pnpm**.
   - Click **Deploy**!
