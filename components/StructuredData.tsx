import React from 'react';
import { FAQ_DATA, ALTINKUM_QUICK_FACTS, BEACHES_DATA, HISTORY_DATA } from '@/data/altinkum-data';

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://gotoaltinkum.com/#website",
        "url": "https://gotoaltinkum.com",
        "name": "GoToAltinkum - Official Altınkum & Didim Tourist Guide",
        "description": "Comprehensive visitor guide, local news, history of Temple of Apollo, beaches, restaurants, and advertising portal for Altınkum, Didim, Türkiye.",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://gotoaltinkum.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://gotoaltinkum.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://gotoaltinkum.com/#organization",
        "name": "GoToAltinkum",
        "url": "https://gotoaltinkum.com",
        "logo": "https://gotoaltinkum.com/images/altinkum-main-beach.jpg",
        "email": "info@gotoaltinkum.com",
        "telephone": "+905374909095",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Tourist Information & Business Advertising",
            "email": "info@gotoaltinkum.com",
            "telephone": "+905374909095",
            "availableLanguage": ["English", "Turkish", "German"]
          }
        ]
      },
      {
        "@type": "TouristDestination",
        "@id": "https://gotoaltinkum.com/#destination",
        "name": "Altınkum & Didim",
        "description": "Premier Aegean holiday destination in Aydın Province, Türkiye, renowned for Blue Flag golden sand beaches, the ancient Temple of Apollo Oracle, D-Marin luxury marina, and Aegean cuisine.",
        "url": "https://gotoaltinkum.com",
        "touristType": ["Beach Tourism", "Cultural Tourism", "Archaeological Tourism", "Family Vacation", "Yachting & Watersports"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": ALTINKUM_QUICK_FACTS.coordinates.lat,
          "longitude": ALTINKUM_QUICK_FACTS.coordinates.lng
        },
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Didim",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Didim",
            "addressRegion": "Aydın",
            "postalCode": "09270",
            "addressCountry": "TR"
          }
        },
        "hasMap": "https://maps.google.com/?q=Altinkum+Didim+Aydin"
      },
      {
        "@type": "TouristAttraction",
        "@id": "https://gotoaltinkum.com/#temple-of-apollo",
        "name": "Temple of Apollo (Didyma)",
        "description": "One of the greatest oracle sanctuaries of antiquity featuring towering Hellenistic columns and the world-famous carved Medusa relief.",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.3850,
          "longitude": 27.2562
        },
        "isAccessibleForFree": false,
        "publicAccess": true
      },
      {
        "@type": "TouristAttraction",
        "@id": "https://gotoaltinkum.com/#altinkum-main-beach",
        "name": "Altınkum Main Beach (1. Koy)",
        "description": "Famous Blue Flag beach with shallow turquoise water and golden sand, ideal for families and water sports.",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.3571,
          "longitude": 27.2798
        },
        "isAccessibleForFree": true,
        "publicAccess": true
      },
      {
        "@type": "FAQPage",
        "@id": "https://gotoaltinkum.com/#faq",
        "mainEntity": FAQ_DATA.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${faq.shortAnswer} ${faq.fullAnswer}`
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://gotoaltinkum.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://gotoaltinkum.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Beaches",
            "item": "https://gotoaltinkum.com/#beaches"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "History & Temple of Apollo",
            "item": "https://gotoaltinkum.com/#history"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Local News & Events",
            "item": "https://gotoaltinkum.com/#news-events"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Advertise Local Business",
            "item": "https://gotoaltinkum.com/#advertise"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
