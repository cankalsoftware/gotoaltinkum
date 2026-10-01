export interface BeachItem {
  id: string;
  name: string;
  turkishName: string;
  tagline: string;
  description: string;
  sandType: string;
  waterDepth: string;
  vibe: string;
  blueFlag: boolean;
  facilities: string[];
  bestFor: string;
  image: string;
  galleryImages: string[];
  colorTheme: string;
  coordinates: { lat: number; lng: number };
  googleMapsUrl: string;
  googleMapsPhotosUrl: string;
}

export interface HistoricalSite {
  id: string;
  name: string;
  era: string;
  distanceFromAltinkum: string;
  summary: string;
  deepDive: string;
  highlightFact: string;
  visitingTips: string[];
  image: string;
}

export interface NewsEventItem {
  id: string;
  title: string;
  category: 'Festival' | 'Culture' | 'Local News' | 'Nightlife' | 'Guide';
  date: string;
  badge: string;
  summary: string;
  readTime: string;
  author: string;
  image: string;
  location: string;
  fullArticle: string;
  keyHighlights: string[];
  eventSchedule: string;
  visitorAdvice: string[];
}

export interface DiningSpot {
  id: string;
  name: string;
  type: string;
  specialty: string;
  location: string;
  description: string;
  priceLevel: '€' | '€€' | '€€€';
  recommendedDish: string;
}

export interface AdPackage {
  id: string;
  name: string;
  badge: string;
  priceTag: string;
  targetAudience: string;
  features: string[];
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  category: 'General' | 'Beaches' | 'History' | 'Transport' | 'Advertising';
}

export const ALTINKUM_QUICK_FACTS = {
  name: "Altınkum / Didim",
  meaning: "Altınkum translates to 'Golden Sand' in Turkish, named after its shimmering golden shoreline.",
  region: "Aydın Province, Aegean Region, Southwestern Türkiye",
  coordinates: { lat: 37.3620, lng: 27.2764 },
  sunshineDays: "300+ sunny days per year",
  summerSeaTemp: "24°C - 27°C (75°F - 81°F)",
  microclimate: "Low humidity with therapeutic Aegean sea breezes, world-renowned for health and asthma wellness.",
  closestAirports: [
    { code: "BJV", name: "Milas-Bodrum Airport", distance: "85 km", travelTime: "approx. 1 hour" },
    { code: "ADB", name: "Izmir Adnan Menderes Airport", distance: "140 km", travelTime: "approx. 1 hour 30 mins" }
  ],
  ancientOrigins: "Ancient Didyma, home to the sacred Oracle Temple of Apollo, second only to Delphi in the ancient world.",
  contactPhone: "+90 537 490 90 95",
  contactPhoneRaw: "05374909095",
  whatsAppUrl: "https://wa.me/905374909095"
};

export const BEACHES_DATA: BeachItem[] = [
  {
    id: "main-beach-1st-koy",
    name: "Altınkum Main Beach (1st Bay)",
    turkishName: "Altınkum 1. Koy / Ana Plaj",
    tagline: "The famous wide golden sands with calm, shallow turquoise water",
    description: "The crown jewel of Didim. Altınkum's primary beach features ultra-fine golden sand that gently slopes into tranquil Aegean waters. You can walk 50 meters out with the water barely reaching waist-deep, making it an absolute haven for families with small children.",
    sandType: "100% Fine Golden Sand",
    waterDepth: "Very Shallow & Calm (Ideal for kids)",
    vibe: "Lively, Family-Friendly, Promenade Atmosphere",
    blueFlag: true,
    facilities: ["Sunbeds & Umbrellas", "Yalı Caddesi Beachfront Restaurants", "Water Sports (Jet Ski, Banana)", "Showers & Changing Cabins", "Lifeguard on duty", "Wheelchair Accessible Paths"],
    bestFor: "Families, shallow swimming, water sports, vibrant beachfront dining",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    colorTheme: "Turquoise Sea & Golden Sand",
    coordinates: { lat: 37.3571, lng: 27.2798 },
    googleMapsUrl: "https://maps.google.com/?q=Altinkum+Beach+Didim",
    googleMapsPhotosUrl: "https://www.google.com/maps/search/?api=1&query=Alt%C4%B1nkum+Plaj%C4%B1+Didim+Ayd%C4%B1n"
  },
  {
    id: "second-beach-2nd-koy",
    name: "Second Beach (2nd Bay)",
    turkishName: "Didim 2. Koy Plajı",
    tagline: "Relaxed coastal inlet with boutique beach bars and crystal waters",
    description: "Located just a short scenic stroll west along the shoreline from the main beach, the 2nd Bay offers a slightly more relaxed pace with chill beach clubs, comfortable lounge cushions, and crystal clear sea perfect for swimming laps and paddleboarding.",
    sandType: "Fine Sand with light golden pebbles",
    waterDepth: "Gently deepening, pristine clarity",
    vibe: "Boutique, Chill, Relaxed music & cocktails",
    blueFlag: true,
    facilities: ["Beach Clubs", "Lounge Chairs & Beanbags", "Paddleboard Rental", "Seafood Cafes", "Sunset Viewpoint"],
    bestFor: "Couples, relaxing reads, sunset cocktails, peaceful swimming",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=1200&q=80"
    ],
    colorTheme: "Crystal Aquamarine & Coastal Cliffs",
    coordinates: { lat: 37.3512, lng: 27.2685 },
    googleMapsUrl: "https://maps.google.com/?q=Didim+2.+Koy",
    googleMapsPhotosUrl: "https://www.google.com/maps/search/?api=1&query=Didim+2.+Koy+Plaj%C4%B1+Alt%C4%B1nkum"
  },
  {
    id: "third-beach-3rd-koy",
    name: "Third Beach (3rd Bay & Marina Edge)",
    turkishName: "Didim 3. Koy Plajı",
    tagline: "The water sports & scuba diving capital of Didim",
    description: "Adjacent to the world-class D-Marin complex, the 3rd Bay is famous for water sports enthusiasts, licensed scuba diving departures, and luxury yacht views. The water is exceptionally transparent with underwater rock formations rich in Aegean marine life.",
    sandType: "Golden sand mixed with smooth pebbles",
    waterDepth: "Medium depth, excellent visibility for snorkeling",
    vibe: "Active, Adventurous, Yachting & Watersports",
    blueFlag: true,
    facilities: ["PADI Diving Center", "Windsurfing & Parasailing", "Marina Walkway Access", "Beach Cafes", "Ample Parking"],
    bestFor: "Scuba divers, snorkelers, adrenaline seekers, marina visitors",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    colorTheme: "Deep Azure & Marina Coast",
    coordinates: { lat: 37.3489, lng: 27.2574 },
    googleMapsUrl: "https://maps.google.com/?q=Didim+3.+Koy",
    googleMapsPhotosUrl: "https://www.google.com/maps/search/?api=1&query=Didim+3.+Koy+Plaj%C4%B1"
  },
  {
    id: "cennet-koyu-paradise-bay",
    name: "Cennet Koyu (Paradise Bay)",
    turkishName: "Cennet Koyu & Manastır Koyu",
    tagline: "Untouched turquoise inlet embraced by aromatic pine hills",
    description: "True to its name ('Paradise Bay'), this hidden gem features electric turquoise waters nestled against untouched nature. Free from big hotels, it provides a blissful natural sanctuary with dramatic rocky cliffs and mirror-like calm seas.",
    sandType: "Natural golden sand & marine pebble",
    waterDepth: "Crystal clear, calm natural pool",
    vibe: "Serene, Natural, Romantic & Secluded",
    blueFlag: true,
    facilities: ["Natural shade", "Boat Tour Anchorage Point", "Snorkeling reefs", "Eco-friendly beach kiosks"],
    bestFor: "Nature lovers, boat trips, underwater photography, quiet sunbathing",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    colorTheme: "Electric Turquoise & Green Pine Hills",
    coordinates: { lat: 37.3685, lng: 27.2341 },
    googleMapsUrl: "https://maps.google.com/?q=Cennet+Koyu+Didim",
    googleMapsPhotosUrl: "https://www.google.com/maps/search/?api=1&query=Cennet+Koyu+Didim"
  },
  {
    id: "akbuk-bay",
    name: "Akbük Bay (Pine Forest Lagoon)",
    turkishName: "Akbük Sahili & Koyu",
    tagline: "Where dense mountain pine forests kiss the calm Aegean Sea",
    description: "Situated 18 km east of Altınkum, Akbük is celebrated for having some of the purest, oxygen-rich air in the Mediterranean. Surrounded by the Kiran Mountains, its 11-kilometer coastline provides glassy calm water with gentle breezes.",
    sandType: "Soft sand with shallow pebble shoreline",
    waterDepth: "Very shallow and warm",
    vibe: "Tranquil, Wellness, Picturesque fishing harbor",
    blueFlag: true,
    facilities: ["Seaside Fish Taverns", "Harbor Promenade", "Boutique Hotels", "Sunbed Rentals", "Children's Playgrounds"],
    bestFor: "Peaceful retreats, asthma & health holidays, scenic dinners by the water",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476673160081-cf065607f449?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    colorTheme: "Glassy Turquoise & Mountain Pines",
    coordinates: { lat: 37.4082, lng: 27.4246 },
    googleMapsUrl: "https://maps.google.com/?q=Akbuk+Didim",
    googleMapsPhotosUrl: "https://www.google.com/maps/search/?api=1&query=Akb%C3%BCk+Sahili+Didim"
  },
  {
    id: "dalyanaki-tavsanburnu",
    name: "Tavşanburnu Nature Park & Dalyanaki",
    turkishName: "Tavşanburnu Tabiat Parkı & Dalyanaki Koyu",
    tagline: "Protected Aegean pine reserve with beach camping & swimming",
    description: "A national nature park where campers, day-trippers, and hikers can swim beneath the shade of towering coastal pine and eucalyptus trees. Dalyanaki also serves as a protected natural harbor that was used since ancient Greco-Roman times.",
    sandType: "Fine sand & natural pine needle forest floor",
    waterDepth: "Shallow, wave-protected natural cove",
    vibe: "Eco-Camping, Picnics, Forest & Sea fusion",
    blueFlag: true,
    facilities: ["Caravan & Tent Camping", "Picnic Tables", "Showers & Electricity", "Mini Market", "Lifeguard"],
    bestFor: "Campers, nature lovers, shady family picnics, historical exploration",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],
    colorTheme: "Emerald Pine Forest & Marine Cove",
    coordinates: { lat: 37.4110, lng: 27.2180 },
    googleMapsUrl: "https://maps.google.com/?q=Tavsanburnu+Tabiat+Parki+Didim",
    googleMapsPhotosUrl: "https://www.google.com/maps/search/?api=1&query=Tav%C5%9Fanburnu+Tabiat+Park%C4%B1+Didim"
  }
];

export const HISTORY_DATA: HistoricalSite[] = [
  {
    id: "temple-of-apollo-didyma",
    name: "The Grand Temple of Apollo (Didyma)",
    era: "Colossal Hellenistic Sanctuary (c. 300 BC – Roman Era)",
    distanceFromAltinkum: "4 km (8 mins via Dolmuş / 30 min walk)",
    summary: "One of the largest and most awe-inspiring religious temples of the ancient Mediterranean, renowned across antiquity for its divine prophetic Oracle and the legendary stone-carved Medusa relief.",
    deepDive: "Didyma was not a city, but the sacred prophetic sanctuary of Apollo connected to Miletus by the 20 km 'Sacred Way' (Hiera Hodos). Rulers and generals, including Alexander the Great and Roman emperors, traveled from across the known world to seek prophecies from the Oracle priestess who breathed mystical vapors rising from the sacred spring. Designed by Paeonius of Ephesus and Daphnis of Miletus, the temple originally featured 122 colossal 20-meter high columns, vaulted stone tunnels, and an open-air inner courtyard (Adyton) housing a sacred laurel grove.",
    highlightFact: "The haunting stone relief of Medusa carved on the temple frieze is today the worldwide recognized emblem of Didim, symbolizing ancient protection against evil.",
    visitingTips: [
      "Visit during golden hour (17:30 - 19:30) when the setting sun illuminates the soaring marble columns.",
      "Walk through the underground stone barrel-vaulted tunnels into the inner sanctuary where the oracle once spoke.",
      "Enjoy traditional Turkish tea at the open-air cafes facing the illuminated columns at night."
    ],
    image: "/images/temple-apollo.jpg"
  },
  {
    id: "ancient-miletus-theater",
    name: "Ancient Miletus (Miletos)",
    era: "Birthplace of Science & Philosophy (c. 1000 BC – Roman / Byzantine)",
    distanceFromAltinkum: "22 km (20 mins drive north)",
    summary: "The greatest Ionian metropolis on the Aegean coast, birthplace of Western scientific philosophy (Thales, Anaximander, Hippodamus), boasting a colossal 15,000-seat Roman Great Theater.",
    deepDive: "Miletus was once a supreme maritime superpower with over 90 colonies across the Black Sea and Mediterranean. It is universally celebrated as the intellectual cradle of rational thought, mathematics, and philosophy. Architect Hippodamus of Miletus invented the world's first modern grid-based city plan here. Visitors can climb the monumental 15,000-seat theater, wander the magnificent Roman Baths of Faustina with marble statues, and visit the Miletus Archaeological Museum.",
    highlightFact: "Philosopher Thales accurately predicted a solar eclipse in 585 BC while living and teaching in Miletus, initiating modern empirical astronomy.",
    visitingTips: [
      "Combine Miletus with Didyma and Priene on a single unforgettable day trip.",
      "Climb to the upper tier of the Great Theater for breathtaking panoramic views across the ancient Meander river delta.",
      "Visit the Faustina Baths to see the original marble reclining river god statue."
    ],
    image: "/images/temple-apollo.jpg"
  },
  {
    id: "ancient-priene-acropolis",
    name: "Ancient Priene",
    era: "Hellenistic Mountain Citadel (c. 350 BC)",
    distanceFromAltinkum: "38 km (35 mins drive)",
    summary: "A spectacular cliffside city perched beneath Mount Mycale with 5 towering columns of the Temple of Athena and the most authentic Greek theater in Asia Minor.",
    deepDive: "Unlike many ancient cities modified heavily by the Romans, Priene remains a pristine, pure example of classical Hellenistic architecture and democratic urban design. Alexander the Great stayed here and funded the completion of the Temple of Athena Polias. The theater retains its original stone armchair VIP thrones (proedria) where city leaders sat 2,300 years ago.",
    highlightFact: "The original dedication stone carved on behalf of Alexander the Great was unearthed here and is preserved in the British Museum.",
    visitingTips: [
      "Wear sturdy walking shoes as the city climbs up pine-forested stone staircases.",
      "Early morning visits offer incredible cool mountain air and mystical mountain mist."
    ],
    image: "/images/temple-apollo.jpg"
  },
  {
    id: "lake-bafa-heraclea",
    name: "Lake Bafa & Latmos Mountains (Heraclea)",
    era: "Prehistoric (8,000-year-old rock art) & Byzantine Ruins",
    distanceFromAltinkum: "30 km (25 mins drive)",
    summary: "A mystical inland salt lake nestled amongst bizarre granite boulders, home to 8,000-year-old Neolithic cave paintings, Byzantine monastery islands, and the myth of Endymion.",
    deepDive: "Once a gulf of the Aegean Sea (the Latmian Gulf) before the Meander River silted its entrance, Lake Bafa is now a peaceful natural sanctuary. In Greek mythology, the Moon Goddess Selene fell in love with the handsome shepherd Endymion on Mount Latmos and cast him into eternal sleep so she could kiss him every night. Today, visitors can kayak among Byzantine castle ruins and hike among ancient rock sanctuaries.",
    highlightFact: "Over 260 species of rare migratory birds and wild pelicans nest on the peaceful islands of Lake Bafa.",
    visitingTips: [
      "Stop at Kapıkırı village for a traditional lakeside breakfast with village-churned butter and wild honeycomb.",
      "Take a small fishing boat out to Yediler Monastery and the castle islands."
    ],
    image: "/images/boat-trip.jpg"
  }
];

export const NEWS_AND_EVENTS_DATA: NewsEventItem[] = [
  {
    id: "didim-vegfest-2026",
    title: "Didim VegFest: Türkiye's Premier Vegan & Gastronomy Festival Around Apollo",
    category: "Festival",
    date: "Annual Spring Event (Mid-April)",
    badge: "Major Festival",
    summary: "Thousands of international and domestic food lovers gather in the historic streets surrounding the Temple of Apollo for 4 days of plant-based culinary masterclasses, Aegean olive oil tastings, and live music.",
    readTime: "3 min read",
    author: "GoToAltinkum Editorial",
    image: "/images/vegfest-didim.jpg",
    location: "Historic Temple of Apollo Quarter, Didim",
    eventSchedule: "Thursday through Sunday (10:00 AM – 22:00 PM)",
    fullArticle: `Didim VegFest is officially recognized as Türkiye's first and largest plant-based culinary and cultural festival. Set against the magnificent backdrop of the ancient Temple of Apollo, the festival celebrates the rich Aegean tradition of wild herb harvesting and cold-pressed extra virgin olive oil cuisine.

Over four vibrant days, the historical quarter transforms into an aromatic open-air market filled with over 200 artisanal stalls. Renowned master chefs, botanical botanists, and nutrition experts conduct live cooking demonstrations, showcasing regional delicacies such as stuffed squash blossoms (Kabak Çiçeği Dolması), samphire salad (Deniz Börülcesi), and wild golden thistle stew (Şevketi Bostan).

Beyond the food, VegFest features non-stop live entertainment including traditional Aegean folk dances, panel discussions on ethical sustainability, vegan leather craft workshops, and open-air sunset acoustic concerts under the towering 2,500-year-old marble columns of Apollo. Entrance to the festival grounds is completely free for all visitors.`,
    keyHighlights: [
      "Over 200 food & artisan stalls showcasing Aegean plant-based recipes",
      "Free cooking masterclasses with celebrity Turkish and European chefs",
      "Traditional Aegean wild herb harvesting workshops & olive oil tastings",
      "Evening live concerts and DJ sets beneath the illuminated Temple of Apollo"
    ],
    visitorAdvice: [
      "Arrive before noon to avoid parking congestion; frequent Dolmuş minibuses run directly from Altınkum beachfront.",
      "Bring cash as some local village artisan stalls do not accept international credit cards.",
      "Wear comfortable walking shoes for cobblestone streets surrounding the archaeological site."
    ]
  },
  {
    id: "d-marin-summer-regatta",
    title: "D-Marin Didim Aegean Yachting Regatta & Sunset Concert Series",
    category: "Nightlife",
    date: "Summer Season (June – August)",
    badge: "Yachting & Music",
    summary: "Superyachts and international sailors dock at D-Marin's 580-berth marina for the annual Aegean Trophy race, accompanied by open-air acoustic jazz and DJ performances on the marina promenade.",
    readTime: "3 min read",
    author: "Maritime Correspondent",
    image: "/images/d-marin-didim-marina.jpg",
    location: "D-Marin Didim Yacht Club & Harbor Promenade",
    eventSchedule: "Weekly Races & Nightly Sunset Sessions (18:00 – Midnight)",
    fullArticle: `D-Marin Didim stands as one of the most sophisticated 5-gold-anchor superyacht marinas in the Eastern Mediterranean, offering 580 berths and a world-class waterfront promenade. Every summer, the marina hosts the prestigious Aegean Trophy Regatta, drawing elite sailing teams and maritime enthusiasts from the UK, Greece, Germany, and Turkey.

The event combines thrilling offshore sailboat racing with high-end lifestyle entertainment. Spectators gather at the waterfront cafes and the elevated Yacht Club Sky Lounge to watch the boats unfurl their colorful spinnakers against the backdrop of the setting Aegean sun.

As twilight falls, the promenade comes alive with the Summer Sunset Concert Series. International jazz ensembles, acoustic guitarists, and sunset chillout DJs perform along the palm-lined docks. Visitors can stroll the illuminated piers, browse boutique designer shops, and enjoy fresh Mediterranean fine dining with panoramic views over multi-million-dollar yachts.`,
    keyHighlights: [
      "International sailboat races across the Didim-Bodrum Aegean corridor",
      "Open-access waterfront promenade with luxury yacht spotting",
      "Free live open-air jazz concerts and acoustic sunset sessions",
      "Fine dining seafood and cocktail bars at the D-Marin Yacht Club"
    ],
    visitorAdvice: [
      "Reserve dinner tables at least 24 hours in advance on race weekends.",
      "The marina breakwater lighthouse offers the best vantage point for sunset photos.",
      "Free parking is available in the main D-Marin visitor lot."
    ]
  },
  {
    id: "apollo-night-illumination",
    title: "Nighttime Illumination & Guided Moonlight Walks at Temple of Apollo",
    category: "Culture",
    date: "Nightly Throughout Summer (June – September)",
    badge: "Must Experience",
    summary: "Experience the monumental columns of Didyma under energy-efficient architectural golden spotlights, with accredited archaeological storytelling sessions under the starry Aegean sky.",
    readTime: "4 min read",
    author: "Didim Culture Desk",
    image: "/images/apollo-night-lights.jpg",
    location: "Temple of Apollo Archaeological Sanctuary, Didyma",
    eventSchedule: "Every evening from 20:30 to 23:30",
    fullArticle: `The Ministry of Culture and Tourism alongside the Didim Archaeological Directorate have unveiled a state-of-the-art golden LED illumination system across the sacred sanctuary of Didyma. The monumental columns, vaulted stone oracle tunnels, and the iconic carved stone Medusa head now glow magnificently against the dark Aegean night sky.

The new night-visiting experience allows travelers to escape daytime summer heat and explore the sanctuary in a mystical, serene atmosphere. Licensed multi-lingual archaeological guides lead romantic 'Moonlight Walks', recounting the enigmatic prophecies delivered by the Oracle Priestess of Branchidae to world conquerors including Alexander the Great and Emperor Diocletian.

On full moon nights, the sanctuary hosts intimate classical acoustic recitals where the natural acoustic resonance of the Adyton (the sacred inner courtyard) brings ancient Greek hymns and classical flute compositions to life under the open Aegean stars.`,
    keyHighlights: [
      "Monumental 20-meter Hellenistic columns illuminated with warm architectural lighting",
      "Guided atmospheric moonlight walks through the underground stone oracle tunnels",
      "Special full-moon acoustic chamber music performances inside the sanctuary",
      "Spectacular night astrophotography opportunities with zero daytime heat"
    ],
    visitorAdvice: [
      "Museum Card (MüzeKart) and standard daytime entrance tickets can be validated at the night gate.",
      "Tripods and mobile night-mode cameras are permitted for personal photography.",
      "Stop at the historic open-air tea gardens overlooking the glowing columns after your walk."
    ]
  },
  {
    id: "altinkum-promenade-renewal",
    title: "New Eco-Friendly Pedestrian Boulevard & Cycling Path Along Yalı Caddesi",
    category: "Local News",
    date: "Completed for 2026 Season",
    badge: "Visitor Update",
    summary: "The Didim Municipality has completed the pedestrianization and palm tree landscaping along Altınkum's beachfront, adding free high-speed public Wi-Fi, modern shower stations, and smooth cycling lanes.",
    readTime: "2 min read",
    author: "Local Municipality Desk",
    image: "/images/altinkum-main-beach.jpg",
    location: "Yalı Caddesi Beach Boulevard (1st, 2nd & 3rd Bays)",
    eventSchedule: "Open 24/7 (Pedestrian & Cyclist Zone)",
    fullArticle: `The Didim Municipality has officially unveiled the multimillion-lira revitalization of Altınkum's premier coastal corridor, Yalı Caddesi. The comprehensive project transformed the 3-kilometer waterfront spanning from the 1st Bay Main Beach to the 3rd Bay Marina into a fully pedestrianized eco-friendly lifestyle promenade.

Key improvements include a dedicated solar-powered bicycle and electric scooter lane, smooth tactile paving for baby strollers and wheelchair accessibility, automated mist-cooling stations to refresh beachgoers during hot afternoons, and modern freshwater shower and changing modules.

Furthermore, the municipality has activated free high-speed public Wi-Fi access points along the entire beach boulevard, complemented by USB charging solar benches and smart trash-sorting bins. Over 200 Mediterranean date palms and blooming bougainvillea flowerbeds have been planted, cementing Altınkum's reputation as one of the cleanest and most walkable resort promenades in the Mediterranean.`,
    keyHighlights: [
      "Completely traffic-free, safe pedestrianized seaside walking boulevard",
      "Dedicated 3km bicycle & e-scooter lane connecting all 3 bays",
      "Free high-speed Municipal public Wi-Fi along the beachfront",
      "Wheelchair-accessible ramps extending down to the water's edge"
    ],
    visitorAdvice: [
      "Bicycle and electric scooter rentals are available via mobile app docking hubs along the promenade.",
      "The best time for a scenic morning jog is between 07:00 and 09:00 before beach umbrellas open."
    ]
  },
  {
    id: "saturday-didim-bazaar-guide",
    title: "The Ultimate Guide to Didim's Saturday & Wednesday Open Markets",
    category: "Guide",
    date: "Every Wednesday (Didim Center) & Saturday (Altınkum)",
    badge: "Shopping Guide",
    summary: "Discover where to buy fresh sun-ripened Aegean figs, cold-pressed Memecik olive oil, mountain sage, Turkish spices, authentic leather goods, and Turkish cotton towels directly from local farmers and artisans.",
    readTime: "4 min read",
    author: "GoToAltinkum Team",
    image: "/images/didim-bazaar-market.jpg",
    location: "Didim Central Covered Market (Wed) & Altınkum Market Ground (Sat)",
    eventSchedule: "08:00 AM – 19:00 PM (Weekly)",
    fullArticle: `No holiday to Altınkum is complete without experiencing the intoxicating sights, aromas, and sounds of a traditional Turkish open bazaar. Didim hosts two major weekly markets: the massive Wednesday Central Bazaar located near the Didim Otogar (bus station), and the vibrant Saturday Altınkum Market catering directly to seaside vacationers.

The food pavilion is a paradise for foodies. Local village farmers from the surrounding Aydın agricultural valley sell sun-drenched Aegean produce harvested hours earlier: sweet black figs, juicy pomegranates, giant watermelons, local goat cheeses, wild mountain thyme (*kekik*), and bottles of unfiltered, peppery extra-virgin Memecik olive oil.

The textile and artisan section offers exceptional value on world-renowned Turkish cotton towels (*Peshtemals*), bed linens, handwoven kilim rugs, authentic leather jackets, and evil eye (*Nazar Boncuğu*) glass ornaments. Vendors warmly invite shoppers with slices of sweet oranges and cups of hot Turkish tea (*Çay*).`,
    keyHighlights: [
      "Over 400 local farmers and artisan stalls offering fresh Aegean goods",
      "World-famous Turkish cotton peshtemal towels at factory-direct prices",
      "Authentic village herbs, pine honeycomb, and cold-pressed olive oils",
      "Friendly, safe bargaining culture with English-speaking local merchants"
    ],
    visitorAdvice: [
      "Polite bargaining is customary in the clothing and souvenir section (aim for 10–20% below starting price), but food prices are fixed and clearly displayed per kilogram.",
      "Take small Turkish Lira cash denominations for easy change.",
      "Dolmuş minibuses with 'Pazar' signs run constantly from all hotel zones directly to the market gates."
    ]
  }
];

export const DINING_HIGHLIGHTS: DiningSpot[] = [
  {
    id: "yali-aegean-fish",
    name: "Sunset Fish Taverns of Yalı Caddesi",
    type: "Seafood & Aegean Meze Tavern",
    specialty: "Fresh Grilled Sea Bass, Calamari, Deniz Börülcesi & Raki",
    location: "Altınkum Beachfront Promenade",
    description: "Tables set right along the gentle Aegean waves with lantern light, serving fresh daily catches from local Didim fishermen alongside chilled Aegean meze plates.",
    priceLevel: "€€",
    recommendedDish: "Levrek Izgara (Grilled Sea Bass) with Girit Ezmesi and warm garlic butter butterflied prawns."
  },
  {
    id: "apollo-village-breakfast",
    name: "Didyma Garden Serpme Kahvaltı",
    type: "Traditional Turkish Village Breakfast",
    specialty: "Village Olives, Fried Hellim, Menemen, Homemade Fig Jam",
    location: "Temple of Apollo Quarter, Didim",
    description: "Shaded garden courtyards surrounded by pomegranate and olive trees, offering endless hot Turkish tea and 20+ dishes of organic homemade local farm foods.",
    priceLevel: "€",
    recommendedDish: "Aegean Menemen with Didim goat cheese, hot Turkish flatbread, and fresh honeycomb."
  },
  {
    id: "d-marin-yacht-club-dining",
    name: "The Marina Yacht Club & Sky Lounge",
    type: "Fine Dining & Mediterranean Fusion",
    specialty: "Dry-Aged Steaks, Seafood Risotto, Signature Sunset Cocktails",
    location: "D-Marin Didim Marina Promenade",
    description: "Upscale waterfront dining with sweeping views across luxury superyachts, ambient lounge music, and an extensive international wine cellar.",
    priceLevel: "€€€",
    recommendedDish: "Aegean Lobster Tagliolini and Truffle Beef Tenderloin."
  }
];

export const AD_PACKAGES: AdPackage[] = [
  {
    id: "starter-listing",
    name: "Verified Business Listing",
    badge: "Essential Local Visibility",
    priceTag: "Affordable Annual Rate",
    targetAudience: "Local cafes, transfer drivers, boutique shops & tour guides",
    features: [
      "Dedicated Profile on GoToAltinkum.com Directory",
      "Direct Phone, WhatsApp, and Google Maps location links",
      "Listed in relevant category (Dining, Transfers, Hotels, Activities)",
      "Verified 'GoToAltinkum Recommended' Local Badge",
      "Inclusion in tourist search results"
    ]
  },
  {
    id: "gold-showcase",
    name: "Gold Featured Spotlight",
    badge: "Most Popular for Hotels & Restaurants",
    priceTag: "High Return on Investment",
    targetAudience: "Hotels, beachfront restaurants, boat operators, dental/wellness clinics",
    popular: true,
    features: [
      "Top 3 Premium Placement in Category & Homepage rotation",
      "High-resolution Photo Gallery & Video embed",
      "Direct Booking / Reservation CTA buttons (Commission-Free)",
      "Feature in monthly 'Top Places in Altınkum' tourist newsletter",
      "Social Media shoutout to visiting UK, European & Turkish tourists",
      "Monthly performance click analytics report"
    ]
  },
  {
    id: "diamond-partner",
    name: "Diamond Brand Sponsor",
    badge: "Exclusive Hero & Category Dominance",
    priceTag: "Full Custom Partnership",
    targetAudience: "Resort hotels, real estate developers, regional tour operators & marinas",
    features: [
      "Exclusive Banner takeover in Hero, Beach Guide & Transport pages",
      "Dedicated sponsored feature article written by our travel editors",
      "Direct inquiry lead forwarding to your email/CRM in real-time",
      "VIP Video showcase on landing page",
      "Prominent placement on all mobile and desktop visitor guides",
      "Dedicated account manager & priority seasonal promotions"
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Where is Altınkum and Didim located?",
    shortAnswer: "Altınkum is a seaside resort in the Didim district of Aydın Province, on the southwestern Aegean coast of Türkiye, between Bodrum and Kuşadası.",
    fullAnswer: "Altınkum (meaning 'Golden Sand') is located on the Didim peninsula in southwestern Turkey, overlooking the Aegean Sea. It is approximately 85 km north of Bodrum (Milas-Bodrum Airport BJV) and 140 km south of Izmir (Adnan Menderes Airport ADB). Its geographical coordinates are 37.3620° N, 27.2764° E.",
    category: "General"
  },
  {
    question: "What is Altınkum beach famous for?",
    shortAnswer: "Altınkum is world-famous for its ultra-fine golden sand, shallow turquoise waters, Blue Flag cleanliness, and family-friendly swimming.",
    fullAnswer: "The main beach (1. Koy) is renowned for crystal-clear, calm waters where you can walk out 50 meters and remain in shallow depth, making it one of the safest beaches in the Mediterranean for children and novice swimmers. The long promenade (Yalı Caddesi) offers beachfront dining, lively cafes, water sports, and sunset boat trips.",
    category: "Beaches"
  },
  {
    question: "What is the history of the Temple of Apollo in Didim?",
    shortAnswer: "The Temple of Apollo at Didyma was one of the greatest oracle sanctuaries of the ancient world, second only to Delphi in Greece.",
    fullAnswer: "Constructed over centuries starting around 300 BC by famous architects Paeonius of Ephesus and Daphnis of Miletus, Didyma was connected to the ancient maritime metropolis of Miletus via a 20 km Sacred Way. Ancient kings, Roman emperors, and Alexander the Great consulted the prophetess here. Today, its colossal 20-meter columns and the carved Medusa stone relief remain iconic world archaeological treasures.",
    category: "History"
  },
  {
    question: "Which airport is closest to Altınkum and Didim?",
    shortAnswer: "Milas-Bodrum Airport (BJV) is the closest at 85 km (1 hour drive), followed by Izmir Adnan Menderes Airport (ADB) at 140 km (1.5 hours drive).",
    fullAnswer: "Most international visitors from the UK, Germany, and Europe fly into Milas-Bodrum Airport (BJV) which is only 1 hour away by private transfer, taxi, or shuttle bus. Izmir Airport (ADB) is also an excellent option with frequent year-round international flights and direct Havaş airport coaches to Didim bus terminal.",
    category: "Transport"
  },
  {
    question: "When is the best time of year to visit Altınkum?",
    shortAnswer: "May through October offers warm sunshine and sea temperatures, with May-June and September-October being the perfect sweet spot for warm weather without intense summer crowds.",
    fullAnswer: "Didim boasts over 300 days of sunshine each year. Peak summer (July–August) brings hot sunny days (33°C-38°C) and buzzing nightlife. Spring (April–June) and Autumn (September–October) offer idyllic temperatures (25°C-29°C), warm seas (24°C), lower accommodation rates, and ideal conditions for exploring ancient ruins like Apollo and Miletus.",
    category: "General"
  },
  {
    question: "How can local Didim businesses advertise on GoToAltinkum.com?",
    shortAnswer: "Local businesses can partner and advertise by emailing info@gotoaltinkum.com or completing the online commercial inquiry form on GoToAltinkum.com.",
    fullAnswer: "GoToAltinkum.com is the leading digital portal connecting hundreds of thousands of international tourists with verified local Didim and Altınkum businesses. We offer featured listings, banner placements, social promotions, and direct lead generation for hotels, restaurants, boat tour operators, transfer companies, car rentals, real estate agencies, and health clinics. Simply email info@gotoaltinkum.com for our media kit and rates.",
    category: "Advertising"
  }
];
