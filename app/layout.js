import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://nvtsarjapurroad.com'),
  title: 'NVT Sky Villas | Luxury 3 & 4 BHK Apartments in Sarjapur, Bangalore',
  description: "NVT Sky Villas by NVT Quality Lifestyle — Premium 3 & 4 BHK villa-style high-rise apartments overlooking Bidaraguppe Lake along Sarjapur–Attibele Road, Bangalore.",
  alternates: {
    canonical: 'https://nvtsarjapurroad.com',
  },
  openGraph: {
    title: 'NVT Sky Villas | Luxury 3 & 4 BHK Apartments in Sarjapur, Bangalore',
    description: "Discover luxury 3 & 4 BHK sky villas at NVT Sky Villas, featuring 300-acre lake views, 4 homes per floor, and world-class amenities in East Bengaluru.",
    url: 'https://nvtsarjapurroad.com',
    siteName: 'NVT Sky Villas',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'NVT Sky Villas Sarjapur Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVT Sky Villas | Luxury 3 & 4 BHK Apartments in Sarjapur, Bangalore',
    description: "Premium 3 & 4 BHK villa-style high-rise apartments overlooking Bidaraguppe Lake along Sarjapur–Attibele Road, Bangalore.",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "NVT Sky Villas Sarjapur Bangalore",
              "url": "https://nvtsarjapurroad.com",
              "logo": "https://nvtsarjapurroad.com/images/logo/Logo.webp",
              "image": "https://nvtsarjapurroad.com/images/hero/banner.webp",
              "description": "NVT Sky Villas by NVT Quality Lifestyle, premier luxury villa-style residences along Sarjapur–Attibele Road offering 3 & 4 BHK sky villas.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sarjapur–Attibele Road",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "562125",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 1.69 Crore Onwards",
              "sameAs": [
                "https://nvtsarjapurroad.com"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
