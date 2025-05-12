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
  img: string; // 800×533 Unsplash crop
  tab: TourTab;
}

/* prettier-ignore */
export const tours: Tour[] = [
  /* ---------- SPECIAL DEALS ---------- */
  { id:"hurawalhi", country:"Maldives", title:"Hurawalhi Island",        duration:"7 days • 2 people", price:620, rating:4.7, tab:"special",
    img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" },
  { id:"bali",       country:"Indonesia", title:"Bali Province",          duration:"4 days • 2 people", price:780, rating:4.7, tab:"special",
    img:"https://images.unsplash.com/photo-1507525428035-ef2da7e80afd?auto=format&fit=crop&w=800&q=60" },
  { id:"barcelona",  country:"Spain",     title:"Barcelona City Beach",   duration:"4 days • 4 people", price:850, rating:4.6, tab:"special",
    img:"https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60" },
  { id:"hakone",     country:"Japan",     title:"Hakone Maple Lake",      duration:"5 days • 2 people", price:690, rating:4.6, tab:"special",
    img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
  { id:"amalfi",     country:"Italy",     title:"Amalfi Coast Drive",     duration:"3 days • 2 people", price:510, rating:4.8, tab:"special",
    img:"https://images.unsplash.com/photo-1506355683713-43d2d122b2dc?auto=format&fit=crop&w=800&q=60" },
  { id:"seychelles", country:"Seychelles",title:"Praslin Serenity",       duration:"6 days • 2 people", price:650, rating:4.7, tab:"special",
    img:"https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=60" },
  { id:"zanzibar",   country:"Tanzania",  title:"Zanzibar Spice Tour",    duration:"5 days • 2 people", price:540, rating:4.6, tab:"special",
    img:"https://images.unsplash.com/photo-1581804928342-4e3405e39c91?auto=format&fit=crop&w=800&q=60" },
  { id:"phuquoc",    country:"Vietnam",   title:"Phú Quốc Escape",        duration:"4 days • 2 people", price:480, rating:4.5, tab:"special",
    img:"https://images.unsplash.com/photo-1605443809863-34e29405b026?auto=format&fit=crop&w=800&q=60" },
  { id:"goa",        country:"India",     title:"Goa Beach Yoga",         duration:"5 days • 2 people", price:455, rating:4.5, tab:"special",
    img:"https://images.unsplash.com/photo-1574661342215-f3f5f8d06f1f?auto=format&fit=crop&w=800&q=60" },
  { id:"langkawi",   country:"Malaysia",  title:"Langkawi Island Hop",    duration:"3 days • 2 people", price:430, rating:4.4, tab:"special",
    img:"https://images.unsplash.com/photo-1539186607619-df736217e3af?auto=format&fit=crop&w=800&q=60" },

  /* ---------- POPULAR ---------- */
  { id:"samarkand",  country:"Uzbekistan",title:"Samarkand Silk Road",    duration:"2 days • city tour", price:120, rating:4.9, tab:"popular",
    img:"https://images.unsplash.com/photo-1605547014389-97bb109212d3?auto=format&fit=crop&w=800&q=60" },
  { id:"bukhara",    country:"Uzbekistan",title:"Bukhara Fortress Walk",  duration:"2 days • city tour", price:110, rating:4.8, tab:"popular",
    img:"https://images.unsplash.com/photo-1582384232419-f6917ec9b733?auto=format&fit=crop&w=800&q=60" },
  { id:"dubai",      country:"UAE",       title:"Dubai City Break",       duration:"3 days • 2 people", price:450, rating:4.8, tab:"popular",
    img:"https://images.unsplash.com/photo-1526483362235-ea4ebf8d5f5c?auto=format&fit=crop&w=800&q=60" },
  { id:"cappadocia", country:"Turkey",    title:"Cappadocia Balloons",    duration:"4 days • 2 people", price:510, rating:4.8, tab:"popular",
    img:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&w=800&q=60" },
  { id:"astana",     country:"Kazakhstan",title:"Astana Weekend",         duration:"2 days • city tour", price:210, rating:4.5, tab:"popular",
    img:"https://images.unsplash.com/photo-1597086480402-f9cb779f6e9d?auto=format&fit=crop&w=800&q=60" },
  { id:"istanbul",   country:"Turkey",    title:"Istanbul Grand Bazaar",  duration:"3 days • 2 people", price:330, rating:4.7, tab:"popular",
    img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60" },
  { id:"tashkentN",  country:"Uzbekistan",title:"Tashkent Night Lights",  duration:"1 day • guided",    price: 65, rating:4.6, tab:"popular",
    img:"https://images.unsplash.com/photo-1633622000936-77f7852d2495?auto=format&fit=crop&w=800&q=60" },
  { id:"alanya",     country:"Turkey",    title:"Alanya All-Inclusive",   duration:"5 days • 2 people", price:540, rating:4.7, tab:"popular",
    img:"https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60" },
  { id:"batumi",     country:"Georgia",   title:"Batumi Seaside Fun",     duration:"3 days • 2 people", price:250, rating:4.6, tab:"popular",
    img:"https://images.unsplash.com/photo-1596727141542-b211f44ecbf2?auto=format&fit=crop&w=800&q=60" },
  { id:"ankara",     country:"Turkey",    title:"Ankara Cultural Tour",   duration:"2 days • city tour", price:190, rating:4.5, tab:"popular",
    img:"https://images.unsplash.com/photo-1533722950766-327ac3ef3b59?auto=format&fit=crop&w=800&q=60" },

  /* ---------- RECOMMENDED ---------- */
  { id:"machu",      country:"Peru",      title:"Machu Picchu",           duration:"7 days • 2 people", price:820, rating:4.7, tab:"recommended",
    img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60" },
  { id:"borabora",   country:"Polynesia", title:"Bora Bora Island",       duration:"7 days • 2 people", price:550, rating:4.7, tab:"recommended",
    img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60" },
  { id:"seoul",      country:"S. Korea",  title:"Seoul Culture Trip",     duration:"5 days • 2 people", price:490, rating:4.6, tab:"recommended",
    img:"https://images.unsplash.com/photo-1538688525198-9be2a99da9f0?auto=format&fit=crop&w=800&q=60" },
  { id:"almaty",     country:"Kazakhstan",title:"Almaty Nature Gate",     duration:"3 days • 2 people", price:310, rating:4.5, tab:"recommended",
    img:"https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=60" },
  { id:"queenstown", country:"N. Zealand",title:"Queenstown Adventure",   duration:"6 days • 2 people", price:890, rating:4.8, tab:"recommended",
    img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60" },
  { id:"banff",      country:"Canada",    title:"Banff & Lake Louise",    duration:"5 days • 2 people", price:760, rating:4.8, tab:"recommended",
    img:"https://images.unsplash.com/photo-1501785888041-af3ef285b471?auto=format&fit=crop&w=800&q=60" },
  { id:"santorini",  country:"Greece",    title:"Santorini Blue Domes",   duration:"5 days • 2 people", price:680, rating:4.7, tab:"recommended",
    img:"https://images.unsplash.com/photo-1507085449935-ec34e76e044b?auto=format&fit=crop&w=800&q=60" },
  { id:"paris",      country:"France",    title:"Paris Romance Break",    duration:"4 days • 2 people", price:720, rating:4.7, tab:"recommended",
    img:"https://images.unsplash.com/photo-1528909514045-a302e30eacbc?auto=format&fit=crop&w=800&q=60" },
  { id:"baku",       country:"Azerbaijan",title:"Baku City Lights",       duration:"3 days • 2 people", price:230, rating:4.5, tab:"recommended",
    img:"https://images.unsplash.com/photo-1585247563711-8c345e703143?auto=format&fit=crop&w=800&q=60" },
  { id:"rome",       country:"Italy",     title:"Rome Ancient Wonders",   duration:"4 days • 2 people", price:640, rating:4.7, tab:"recommended",
    img:"https://images.unsplash.com/photo-1533681982065-b31e5c0b9c3b?auto=format&fit=crop&w=800&q=60" },

  /* ---------- BEST PRICE ---------- */
  { id:"sydney",     country:"Australia", title:"Sydney Opera House",     duration:"5 days • 2 people", price:310, rating:4.7, tab:"best",
    img:"https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=60" },
  { id:"phuket",     country:"Thailand",  title:"Phuket Island Fun",      duration:"4 days • 2 people", price:280, rating:4.6, tab:"best",
    img:"https://images.unsplash.com/photo-1502163141567-8c5f3c7c08b8?auto=format&fit=crop&w=800&q=60" },
  { id:"issyk",      country:"Kyrgyzstan",title:"Issyk-Kul & Tien Shan",  duration:"5 days • 4 people", price:260, rating:4.6, tab:"best",
    img:"https://images.unsplash.com/photo-1543248939-6d65d47b3c61?auto=format&fit=crop&w=800&q=60" },
  { id:"tbilisi",    country:"Georgia",   title:"Tbilisi Wine Escape",    duration:"3 days • 2 people", price:240, rating:4.5, tab:"best",
    img:"https://images.unsplash.com/photo-1584382298912-adca1c5d0870?auto=format&fit=crop&w=800&q=60" },
  { id:"kuala",      country:"Malaysia",  title:"Kuala Lumpur Weekend",   duration:"3 days • 2 people", price:250, rating:4.6, tab:"best",
    img:"https://images.unsplash.com/photo-1470115636492-6d2b56b74e5c?auto=format&fit=crop&w=800&q=60" },
  { id:"prague",     country:"Czechia",   title:"Prague on Budget",       duration:"4 days • 2 people", price:270, rating:4.6, tab:"best",
    img:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60" },
  { id:"budapest",   country:"Hungary",   title:"Budapest Thermal Bath",  duration:"3 days • 2 people", price:260, rating:4.6, tab:"best",
    img:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=60" },
  { id:"sochi",      country:"Russia",    title:"Sochi Black-Sea Break",  duration:"4 days • 2 people", price:230, rating:4.5, tab:"best",
    img:"https://images.unsplash.com/photo-1610900471385-df4f1f8f36fd?auto=format&fit=crop&w=800&q=60" },
  { id:"antalya",    country:"Turkey",    title:"Antalya All-Inclusive",  duration:"5 days • 2 people", price:300, rating:4.7, tab:"best",
    img:"https://images.unsplash.com/photo-1526481280695-3bfa7568e1cf?auto=format&fit=crop&w=800&q=60" },
  { id:"dushanbe",   country:"Tajikistan",title:"Dushanbe & Fann Mtns",   duration:"4 days • 2 people", price:240, rating:4.4, tab:"best",
    img:"https://images.unsplash.com/photo-1598013592425-b40ee6bfda1e?auto=format&fit=crop&w=800&q=60" },
];
