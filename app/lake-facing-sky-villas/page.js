import HomePageClient from '../../components/main-domain/HomePageClient'

export const metadata = {
  title: 'NVT Sky Villas | Luxury 3 & 4 BHK Apartments in Sarjapur, Bangalore',
  description: 'NVT Sky Villas by NVT Quality Lifestyle — Premium 3 & 4 BHK villa-style high-rise apartments overlooking Bidaraguppe Lake along Sarjapur–Attibele Road, Bangalore.',
  alternates: {
    canonical: 'https://nvtsarjapurroad.com/lake-facing-sky-villas',
  },
  openGraph: {
    title: 'NVT Sky Villas | Villa-Style Residences in Sarjapur, Bangalore',
    description: 'Discover luxury 3 & 4 BHK sky villas at NVT Sky Villas, featuring 300-acre lake views, 4 homes per floor, and world-class amenities in East Bengaluru.',
    url: 'https://nvtsarjapurroad.com/lake-facing-sky-villas',
    siteName: 'NVT Sky Villas',
  },
}

export default function LakeFacingSkyVillasPage() {
  return <HomePageClient />
}
