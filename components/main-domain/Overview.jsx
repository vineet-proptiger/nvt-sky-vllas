'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #F8F9FA;
        overflow: hidden;
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      
      {/* Section Header - Spanning across top */}
      <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[18px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>NVT Sky Villas</h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-start mt-1 mb-3">
          <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
          <div className="w-2 h-2 rounded-full bg-[#CD9E4B] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
        </div>
        <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Villa-Style High-Rise Residences in Sarjapur, Bangalore</h3>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        {/* Left Side: Green Box (Paragraph + Info Boxes) */}
        <div className="w-full lg:w-7/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000">
          <div 
            className="relative p-6 sm:p-8 rounded-2xl shadow-[0_12px_36px_rgba(2,132,199,0.18)] overflow-hidden flex-1 flex flex-col justify-between" 
            style={{ background: '#0284C7' }}
          >
            <div>
              <p style={{ fontSize: '15.5px', fontFamily: '"Poppins", sans-serif', color: '#FFFFFF', textAlign: 'justify', lineHeight: '1.85', margin: 0 }}>
                <span 
                  style={{ 
                    float: 'left', 
                    fontSize: '3.6rem', 
                    lineHeight: '0.8', 
                    fontWeight: '800', 
                    color: '#CD9E4B', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontFamily: "var(--font-jost), Montserrat, sans-serif" 
                  }}
                >
                  N
                </span>
                <span style={{ fontWeight: '700', color: '#FFFFFF' }}>VT Sky Villas</span> by NVT Quality Lifestyle is a premium residential project featuring villa-style high-rise apartments in East Bengaluru. Located along Sarjapur–Attibele Road, the project forms Phase 2 of NVT A Wonderful World, a sprawling 102-acre integrated township.{' '}
                <span className={`lg:hidden ${isExpanded ? 'hidden' : 'inline'}`}>... </span>
                <span className={`${isExpanded ? 'inline' : 'hidden'} lg:inline`}>
                  Spread across 30 acres, NVT Sky Villas comprises 604 residences in 3 BHK and 4 BHK configurations across 7 towers of G+30 floors. The project offers lake-facing homes overlooking Bidaraguppe Lake, combining spacious living, scenic surroundings, and a premium residential lifestyle. With just 4 homes per floor and panoramic 300-acre lake views, experience privacy and elevated luxury living.{' '}
                </span>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  type="button"
                  className="lg:hidden text-[#CD9E4B] hover:text-[#DFB362] font-bold inline-flex items-center gap-1 transition-colors cursor-pointer ml-1 select-none focus:outline-none"
                  style={{ fontSize: '15px' }}
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </p>
            </div>

            {/* Info Boxes inside the background container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8 pt-6 border-t border-[#CD9E4B]/20">
              
              {/* Box 1: Status */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#0284C7] leading-tight uppercase">Pre Launch</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">STATUS</span>
                </div>
              </div>

              {/* Box 2: Total Area */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4.97-4.97-8-8.58-8-12a8 8 0 1 1 16 0c0 3.42-3.03 7.03-8 12z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#0284C7] leading-tight uppercase">300 Acres</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">TOTAL AREA</span>
                </div>
              </div>

              {/* Box 3: Total Residences */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M9 8h2" />
                    <path d="M13 8h2" />
                    <path d="M9 12h2" />
                    <path d="M13 12h2" />
                    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#0284C7] leading-tight uppercase">604 Units</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">TOTAL RESIDENCES</span>
                </div>
              </div>

              {/* Box 4: Structure & Density */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="2" />
                    <path d="M14 6h2" />
                    <path d="M14 10h2" />
                    <path d="M14 14h2" />
                    <path d="M14 18h2" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#0284C7] leading-tight uppercase">7 Towers (G+30)</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">4 HOMES PER FLOOR</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Image starting at the exact same height */}
        <div className="w-full lg:w-5/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-2xl shadow-lg border border-[#CD9E4B]/20 bg-white flex-1 min-h-[380px] sm:min-h-[480px]">
            <Image
              src={overviewImage}
              alt="NVT Sky Villas - Elevation"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Overview
