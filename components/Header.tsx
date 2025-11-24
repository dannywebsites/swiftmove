import React, { useState } from 'react';
import { AppView } from '../types';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: AppView) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50">
      {/* Top Bar - Dark Blue */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
              <Phone size={14} />
              <span>020 7055 0441</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
              <Mail size={14} />
              <span>info@swiftmoveuk.co.uk</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer transition-colors">Maintenance Portal</span>
            <div className="flex space-x-3 border-l border-slate-700 pl-4">
              <Facebook size={14} className="hover:text-blue-500 cursor-pointer" />
              <Twitter size={14} className="hover:text-blue-400 cursor-pointer" />
              <Instagram size={14} className="hover:text-pink-500 cursor-pointer" />
              <Linkedin size={14} className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - White */}
      <div className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate(AppView.HOME)}
            >
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black text-red-600 tracking-tighter">SWIFT<span className="text-blue-900">MOVE</span></span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-0.5">Premier Property Buyers</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8 font-semibold text-slate-800 text-sm tracking-wide">
                <button onClick={() => onNavigate(AppView.HOME)} className="hover:text-red-600 transition-colors">Home</button>
                <button className="hover:text-red-600 transition-colors flex items-center">Services</button>
                <button className="hover:text-red-600 transition-colors">Area Guide</button>
                <button className="hover:text-red-600 transition-colors">Blogs</button>
              </nav>
              
              <div className="flex items-center space-x-6 pl-6 border-l border-slate-200">
                <div className="flex items-center text-slate-800 hover:text-red-600 cursor-pointer font-semibold text-sm">
                   <Search size={18} className="mr-2" />
                   Find All Services
                </div>
                <button 
                  onClick={() => onNavigate(AppView.VALUATION_FORM)}
                  className="bg-slate-900 text-white px-6 py-3 font-bold text-sm hover:bg-red-600 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
                >
                  Book A Free Valuation
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-full shadow-lg p-4 flex flex-col space-y-4">
             <button onClick={() => { onNavigate(AppView.HOME); setMobileMenuOpen(false); }} className="text-left font-semibold text-slate-800">Home</button>
             <button className="text-left font-semibold text-slate-800">Services</button>
             <button className="text-left font-semibold text-slate-800">Area Guide</button>
             <button 
                onClick={() => { onNavigate(AppView.VALUATION_FORM); setMobileMenuOpen(false); }}
                className="bg-slate-900 text-white px-4 py-3 font-bold text-center mt-2"
              >
                Book Free Valuation
              </button>
          </div>
        )}
      </div>
    </header>
  );
};