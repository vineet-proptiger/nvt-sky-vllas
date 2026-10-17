import React from 'react'
import { Trees, Layers, MapPin, Sun, Flower2 } from 'lucide-react'

const highlightsData = [
  {
    title: '300-Acre Lake Views',
    desc: 'Unobstructed panoramic lake views overlooking Bidaraguppe Lake, creating a serene and picturesque living experience.',
    bg: 'bg-[#fdf2f8]',
    color: 'text-[#e11d48]',
    delay: '0s',
    floatDelay: '0s',
    icon: <Flower2 className="w-9 h-9 text-[#e11d48]" strokeWidth={2} />
  },
  {
    title: 'Premium 3 & 4 BHK Sky Villas',
    desc: 'Villa-style high-rise luxury residences by NVT Quality Lifestyle offering expansive living spaces with unmatched elegance.',
    bg: 'bg-[#eef5fc]',
    color: 'text-[#2563eb]',
    delay: '0.1s',
    floatDelay: '0.2s',
    icon: (
      <svg className="w-9 h-9 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3L21 10.5" />
        <path d="M5.5 8.5V20C5.5 20.55 5.95 21 6.5 21H17.5C18.05 21 18.5 20.55 18.5 20V8.5" />
        <path d="M10 21V15C10 14.45 10.45 14 11 14H13C13.55 14 14 14.45 14 15V21" />
      </svg>
    )
  },
  {
    title: 'Just 4 Homes Per Floor',
    desc: 'Low-density living with only 4 homes per floor, designed to provide uncompromised privacy and exclusivity for each family.',
    bg: 'bg-[#eefcee]',
    color: 'text-[#16a34a]',
    delay: '0.2s',
    floatDelay: '0.4s',
    icon: <Trees className="w-9 h-9 text-[#16a34a]" strokeWidth={2} />
  },
  {
    title: '102-Acre Integrated Township',
    desc: 'Phase 2 of NVT A Wonderful World, spread across 30 acres within a sprawling 102-acre master-planned community.',
    bg: 'bg-[#fdf8ee]',
    color: 'text-[#d97706]',
    delay: '0.3s',
    floatDelay: '0.6s',
    icon: <Layers className="w-9 h-9 text-[#d97706]" strokeWidth={2} />
  },
  {
    title: 'Sarjapur-Attibele Corridor',
    desc: 'Direct Silk Board–Whitefield Corridor access, close proximity to KIADB SWIFT City, and proposed metro connectivity.',
    bg: 'bg-[#f5eefc]',
    color: 'text-[#9333ea]',
    delay: '0.4s',
    floatDelay: '0.8s',
    icon: <MapPin className="w-9 h-9 text-[#9333ea]" strokeWidth={2} />
  },
  {
    title: '7 Towers of G+30 Floors',
    desc: 'Grand architectural marvel comprising 604 lake-facing residences with abundant natural light and cross-ventilation.',
    bg: 'bg-[#f0fdfa]',
    color: 'text-[#0d9488]',
    delay: '0.5s',
    floatDelay: '1s',
    icon: <Sun className="w-9 h-9 text-[#0d9488]" strokeWidth={2} />
  }
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="about_us py-20 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/highlights/highlight.webp')" }}>
      <div className="container-fluid max-w-[1300px] mx-auto relative z-10 py-[70px]">
        <h2 className="text-[18px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-[#CD9E4B] text-center" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
          PROJECT HIGHLIGHTS & USPS
        </h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
          <div className="w-2 h-2 rounded-full bg-[#CD9E4B] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
        </div>
        
        {/* 6 Highlights Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {highlightsData.map((item, index) => (
            <div
              key={index}
              className={`highlight-card p-6 sm:p-7 rounded-2xl ${item.bg} border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center`}
              style={{ animation: `0.6s ease-out ${item.delay} 1 normal both running fadeInScale` }}
            >
              <div className="icon-float mb-4 relative" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: item.floatDelay }}>
                {item.icon}
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}

export default Highlights
