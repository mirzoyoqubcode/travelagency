/**
 *  data/tours.ts
 *  – static catalogue of 40 tours (10 per tab)
 */

export type TourTab = "special" | "popular" | "recommended" | "best";

export interface Tour {
  id: string;
  title: string;
  country: string;
  duration: string;
  price: number; // USD per package
  rating: number; // 0-5, 1 decimal
  img: string; // 800×533 seeded placeholder
  tab: TourTab;
}

/* prettier-ignore */
export const tours: Tour[] = [
  /* ---------- SPECIAL DEALS ---------- */
  { id:"hurawalhi", country:"Maldives",   title:"Hurawalhi Island",       duration:"7 days • 2 people", price:620, rating:4.7, tab:"special",
    img:`https://picsum.photos/seed/hurawalhi/800/533` },
  { id:"bali",      country:"Indonesia",  title:"Bali Province",          duration:"4 days • 2 people", price:780, rating:4.7, tab:"special",
    img:`https://picsum.photos/seed/bali/800/533` },
  { id:"barcelona", country:"Spain",      title:"Barcelona City Beach",   duration:"4 days • 4 people", price:850, rating:4.6, tab:"special",
    img:`https://picsum.photos/seed/barcelona/800/533` },
  { id:"hakone",    country:"Japan",      title:"Hakone Maple Lake",      duration:"5 days • 2 people", price:690, rating:4.6, tab:"special",
    img:`https://picsum.photos/seed/hakone/800/533` },
  { id:"amalfi",    country:"Italy",      title:"Amalfi Coast Drive",     duration:"3 days • 2 people", price:510, rating:4.8, tab:"special",
    img:`https://picsum.photos/seed/amalfi/800/533` },
  { id:"seychelles",country:"Seychelles", title:"Praslin Serenity",       duration:"6 days • 2 people", price:650, rating:4.7, tab:"special",
    img:`https://picsum.photos/seed/seychelles/800/533` },
  { id:"zanzibar",  country:"Tanzania",   title:"Zanzibar Spice Tour",    duration:"5 days • 2 people", price:540, rating:4.6, tab:"special",
    img:`https://picsum.photos/seed/zanzibar/800/533` },
  { id:"phuquoc",   country:"Vietnam",    title:"Phú Quốc Escape",        duration:"4 days • 2 people", price:480, rating:4.5, tab:"special",
    img:`https://picsum.photos/seed/phuquoc/800/533` },
  { id:"goa",       country:"India",      title:"Goa Beach Yoga",         duration:"5 days • 2 people", price:455, rating:4.5, tab:"special",
    img:`https://picsum.photos/seed/goa/800/533` },
  { id:"langkawi",  country:"Malaysia",   title:"Langkawi Island Hop",    duration:"3 days • 2 people", price:430, rating:4.4, tab:"special",
    img:`https://picsum.photos/seed/langkawi/800/533` },

  /* ---------- POPULAR ---------- */
  { id:"samarkand", country:"Uzbekistan", title:"Samarkand Silk Road",    duration:"2 days • city tour", price:120, rating:4.9, tab:"popular",
    img:`https://picsum.photos/seed/samarkand/800/533` },
  { id:"bukhara",   country:"Uzbekistan", title:"Bukhara Fortress Walk",  duration:"2 days • city tour", price:110, rating:4.8, tab:"popular",
    img:`https://picsum.photos/seed/bukhara/800/533` },
  { id:"dubai",     country:"UAE",        title:"Dubai City Break",       duration:"3 days • 2 people", price:450, rating:4.8, tab:"popular",
    img:`https://picsum.photos/seed/dubai/800/533` },
  { id:"cappadocia",country:"Turkey",     title:"Cappadocia Balloons",    duration:"4 days • 2 people", price:510, rating:4.8, tab:"popular",
    img:`https://picsum.photos/seed/cappadocia/800/533` },
  { id:"astana",    country:"Kazakhstan", title:"Astana Weekend",         duration:"2 days • city tour", price:210, rating:4.5, tab:"popular",
    img:`https://picsum.photos/seed/astana/800/533` },
  { id:"istanbul",  country:"Turkey",     title:"Istanbul Grand Bazaar",  duration:"3 days • 2 people", price:330, rating:4.7, tab:"popular",
    img:`https://picsum.photos/seed/istanbul/800/533` },
  { id:"tashkentN", country:"Uzbekistan", title:"Tashkent Night Lights",  duration:"1 day • guided",    price: 65, rating:4.6, tab:"popular",
    img:`https://picsum.photos/seed/tashkentN/800/533` },
  { id:"alanya",    country:"Turkey",     title:"Alanya All-Inclusive",   duration:"5 days • 2 people", price:540, rating:4.7, tab:"popular",
    img:`https://picsum.photos/seed/alanya/800/533` },
  { id:"batumi",    country:"Georgia",    title:"Batumi Seaside Fun",     duration:"3 days • 2 people", price:250, rating:4.6, tab:"popular",
    img:`https://picsum.photos/seed/batumi/800/533` },
  { id:"ankara",    country:"Turkey",     title:"Ankara Cultural Tour",   duration:"2 days • city tour", price:190, rating:4.5, tab:"popular",
    img:`https://picsum.photos/seed/ankara/800/533` },

  /* ---------- RECOMMENDED ---------- */
  { id:"machu",     country:"Peru",       title:"Machu Picchu",           duration:"7 days • 2 people", price:820, rating:4.7, tab:"recommended",
    img:`https://picsum.photos/seed/machu/800/533` },
  { id:"borabora",  country:"Polynesia",  title:"Bora Bora Island",       duration:"7 days • 2 people", price:550, rating:4.7, tab:"recommended",
    img:`https://picsum.photos/seed/borabora/800/533` },
  { id:"seoul",     country:"S. Korea",   title:"Seoul Culture Trip",     duration:"5 days • 2 people", price:490, rating:4.6, tab:"recommended",
    img:`https://picsum.photos/seed/seoul/800/533` },
  { id:"almaty",    country:"Kazakhstan", title:"Almaty Nature Gate",     duration:"3 days • 2 people", price:310, rating:4.5, tab:"recommended",
    img:`https://picsum.photos/seed/almaty/800/533` },
  { id:"queenstown",country:"N. Zealand", title:"Queenstown Adventure",   duration:"6 days • 2 people", price:890, rating:4.8, tab:"recommended",
    img:`https://picsum.photos/seed/queenstown/800/533` },
  { id:"banff",     country:"Canada",     title:"Banff & Lake Louise",    duration:"5 days • 2 people", price:760, rating:4.8, tab:"recommended",
    img:`https://picsum.photos/seed/banff/800/533` },
  { id:"santorini", country:"Greece",     title:"Santorini Blue Domes",   duration:"5 days • 2 people", price:680, rating:4.7, tab:"recommended",
    img:`https://picsum.photos/seed/santorini/800/533` },
  { id:"paris",     country:"France",     title:"Paris Romance Break",    duration:"4 days • 2 people", price:720, rating:4.7, tab:"recommended",
    img:`https://picsum.photos/seed/paris/800/533` },
  { id:"baku",      country:"Azerbaijan", title:"Baku City Lights",       duration:"3 days • 2 people", price:230, rating:4.5, tab:"recommended",
    img:`https://picsum.photos/seed/baku/800/533` },
  { id:"rome",      country:"Italy",      title:"Rome Ancient Wonders",   duration:"4 days • 2 people", price:640, rating:4.7, tab:"recommended",
    img:`https://picsum.photos/seed/rome/800/533` },

  /* ---------- BEST PRICE ---------- */
  { id:"sydney",    country:"Australia",  title:"Sydney Opera House",     duration:"5 days • 2 people", price:310, rating:4.7, tab:"best",
    img:`https://picsum.photos/seed/sydney/800/533` },
  { id:"phuket",    country:"Thailand",   title:"Phuket Island Fun",      duration:"4 days • 2 people", price:280, rating:4.6, tab:"best",
    img:`https://picsum.photos/seed/phuket/800/533` },
  { id:"issyk",     country:"Kyrgyzstan", title:"Issyk-Kul & Tien Shan",  duration:"5 days • 4 people", price:260, rating:4.6, tab:"best",
    img:`https://picsum.photos/seed/issyk/800/533` },
  { id:"tbilisi",   country:"Georgia",    title:"Tbilisi Wine Escape",    duration:"3 days • 2 people", price:240, rating:4.5, tab:"best",
    img:`https://picsum.photos/seed/tbilisi/800/533` },
  { id:"kuala",     country:"Malaysia",   title:"Kuala Lumpur Weekend",   duration:"3 days • 2 people", price:250, rating:4.6, tab:"best",
    img:`https://picsum.photos/seed/kuala/800/533` },
  { id:"prague",    country:"Czechia",    title:"Prague on Budget",       duration:"4 days • 2 people", price:270, rating:4.6, tab:"best",
    img:`https://picsum.photos/seed/prague/800/533` },
  { id:"budapest",  country:"Hungary",    title:"Budapest Thermal Bath",  duration:"3 days • 2 people", price:260, rating:4.6, tab:"best",
    img:`https://picsum.photos/seed/budapest/800/533` },
  { id:"sochi",     country:"Russia",     title:"Sochi Black-Sea Break",  duration:"4 days • 2 people", price:230, rating:4.5, tab:"best",
    img:`https://picsum.photos/seed/sochi/800/533` },
  { id:"antalya",   country:"Turkey",     title:"Antalya All-Inclusive",  duration:"5 days • 2 people", price:300, rating:4.7, tab:"best",
    img:`https://picsum.photos/seed/antalya/800/533` },
  { id:"dushanbe",  country:"Tajikistan", title:"Dushanbe & Fann Mtns",  duration:"4 days • 2 people", price:240, rating:4.4, tab:"best",
    img:`https://picsum.photos/seed/dushanbe/800/533` },
];
