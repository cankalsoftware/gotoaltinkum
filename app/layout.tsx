import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-YJXVC4Q4X8';

export const viewport: Viewport = {
  themeColor: '#0369a1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gotoaltinkum.com'),
  title: {
    default: 'GoToAltinkum | Complete Travel Guide to Altınkum & Didim, Türkiye',
    template: '%s | GoToAltinkum',
  },
  description:
    'Discover Altınkum & Didim, Türkiye: Famous Blue Flag golden sand beaches, the colossal ancient Temple of Apollo (Didyma), Medusa head, Miletus, Didim VegFest, Aegean seafood dining, airport transfers, and local business advertising.',
  keywords: [
    'Altinkum',
    'Didim',
    'Altinkum beach',
    'Didim Turkey',
    'Altinkum Didim',
    'Temple of Apollo Didim',
    'Didyma Oracle',
    'Medusa Didim',
    'Miletus ancient city',
    'Akbuk Didim',
    'D-Marin Didim',
    'Didim VegFest',
    'Altinkum boat trips',
    'Bodrum airport to Didim transfer',
    'Izmir airport to Altinkum',
    'Altinkum restaurants',
    'Didim hotels',
    'GoToAltinkum'
  ],
  authors: [{ name: 'GoToAltinkum Editorial Team', url: 'https://gotoaltinkum.com' }],
  creator: 'GoToAltinkum',
  publisher: 'GoToAltinkum',
  alternates: {
    canonical: 'https://gotoaltinkum.com',
  },
  openGraph: {
    title: 'GoToAltinkum | The Definitive Guide to Altınkum & Didim, Türkiye',
    description:
      'Where ancient legends walk and golden sands meet the Aegean Sea. Your ultimate guide to beaches, Temple of Apollo, local news, and local business directory in Didim, Türkiye.',
    url: 'https://gotoaltinkum.com',
    siteName: 'GoToAltinkum',
    images: [
      {
        url: '/images/altinkum-main-beach.jpg',
        width: 1200,
        height: 675,
        alt: 'Altınkum Beach and Turquoise Aegean Coast in Didim Türkiye',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoToAltinkum | Altınkum & Didim Travel & Local News Portal',
    description:
      'Explore Blue Flag golden beaches, Temple of Apollo Oracle, Didim VegFest, Aegean seafood, and local business advertisements.',
    images: ['/images/altinkum-main-beach.jpg'],
    creator: '@gotoaltinkum',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'TR-09',
    'geo.placename': 'Didim, Aydın, Türkiye',
    'geo.position': '37.3620;27.2764',
    'ICBM': '37.3620, 27.2764',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950">
        {/* Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
