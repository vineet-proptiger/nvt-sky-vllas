import { notFound } from 'next/navigation'

// Main domain root (/) pr website disable hai.
// Website ONLY /lake-facing-sky-villas slug pr live hai.
// Jise slug name pata hoga wahi ise open kar sakega.
export default function Home() {
  notFound()
}

// ═══════════════════════════════════════════════════════════════════════════
// PRESERVED MAIN DOMAIN CODE (Uncomment below whenever needed)
// ═══════════════════════════════════════════════════════════════════════════
// import HomePageClient from '../components/main-domain/HomePageClient'
// 
// export const metadata = {
//   title: 'NVT Sky Villas | Luxury 3 & 4 BHK Apartments in Sarjapur, Bangalore',
//   description: 'NVT Sky Villas by NVT Quality Lifestyle — Premium 3 & 4 BHK villa-style high-rise apartments overlooking Bidaraguppe Lake along Sarjapur–Attibele Road, Bangalore.',
//   alternates: {
//     canonical: 'https://nvtsarjapurroad.com/',
//   },
//   openGraph: {
//     title: 'NVT Sky Villas | Villa-Style Residences in Sarjapur, Bangalore',
//     description: 'Discover luxury 3 & 4 BHK sky villas at NVT Sky Villas, featuring 300-acre lake views, 4 homes per floor, and world-class amenities in East Bengaluru.',
//     url: 'https://nvtsarjapurroad.com/',
//     siteName: 'NVT Sky Villas',
//   },
// }
// 
// export default function Home() {
//   return <HomePageClient />
// }
