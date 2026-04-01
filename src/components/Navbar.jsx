import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import cartIcon from "../assets/shopping-cart.png";


const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-[28px] font-bold text-[#7030E3] tracking-tight">
              DigiTools
            </span>
          </div>

          {/* Desktop Menu - Centered links */}
          <div className="hidden md:flex items-center space-x-10">
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[#374151] hover:text-[#7030E3] transition-colors text-[15px] font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Shopping Cart with Badge */}
            <div className="relative cursor-pointer group">
              <img 
                src={cartIcon} 
                alt="Cart" 
                className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all" 

              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="text-[#374151] hover:text-[#7030E3] font-medium text-[15px]">
              Login
            </button>
            
            <button className="bg-[#7030E3] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-[#5b24c1] transition-all shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
           <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#374151]">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 bg-white">
            <div className="flex flex-col space-y-4">
              {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <a key={item} href="#" className="text-gray-700 text-lg font-medium px-2 border-b border-gray-50 pb-2">
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full py-3 text-[#7030E3] font-bold border border-[#7030E3] rounded-full">
                  Login
                </button>
                <button className="w-full py-3 bg-[#7030E3] text-white font-bold rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;