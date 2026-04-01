import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Ensure react-icons is installed

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-bold text-white mb-6">
              DigiTools
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs text-sm md:text-base">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-white">Social Links</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-purple-500 hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-purple-500 hover:text-white transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-purple-500 hover:text-white transition-all">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;