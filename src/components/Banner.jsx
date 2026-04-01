import React from 'react';
import bannerImg from '../assets/banner.png';
import playIcon from '../assets/Play.png';

const Banner = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            {/* AI Badge */}
            <div className="inline-flex items-center bg-[#F3EFFF] text-[#7030E3] px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7030E3]"></span>
              </span>
              New: AI-Powered Tools Available
            </div>

            {/* Typography - No gradients, matching Figma's weight */}
            <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold text-[#2D3139] mb-6 leading-[1.1] tracking-tight">
              Supercharge Your <br />
              Digital Workflow
            </h1>

            {/* Description */}
            <p className="text-[#6B7280] text-lg mb-2 leading-relaxed max-w-lg">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>
            
            {/* Small text link like in Figma */}
            <button className="text-[#6B7280] text-sm hover:text-[#7030E3] transition-colors mb-10 block">
              Explore Products
            </button>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#7030E3] text-white px-9 py-4 rounded-full font-bold hover:bg-[#5b24c1] transition-all shadow-md active:scale-95">
                Explore Products
              </button>
              
              <button className="flex items-center justify-center border-2 border-[#D1D5DB] text-[#7030E3] px-9 py-4 rounded-full font-bold hover:border-[#7030E3] transition-all active:scale-95">
                <img src={playIcon} alt="Play" className="w-5 h-5 mr-3" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src={bannerImg} 
                alt="Digital Workflow UI"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Subtle background decoration to mimic Figma's clean look */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-0 opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;