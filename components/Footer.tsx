import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
                <span className="text-3xl font-black text-red-600 tracking-tighter">SWIFT<span className="text-blue-900">MOVE</span></span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-0.5">Premier Property Buyers</span>
            </div>
            <p className="text-sm leading-relaxed">
              At the intersection of global influence and local expertise, our real estate brand is committed to helping buyers and sellers navigate their journeys with confidence and precision.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-600" />
                <span className="text-sm font-semibold text-slate-900">020 7055 0441</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-600" />
                <span className="text-sm font-semibold text-slate-900">info@swiftmoveuk.co.uk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-red-600 mt-1" />
                <span className="text-sm font-semibold text-slate-900">75A Barking Rd, London E16 4HB, United Kingdom</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
                <div className="bg-slate-900 text-white p-2 rounded hover:bg-red-600 transition-colors cursor-pointer"><Facebook size={16} /></div>
                <div className="bg-slate-900 text-white p-2 rounded hover:bg-red-600 transition-colors cursor-pointer"><Twitter size={16} /></div>
                <div className="bg-slate-900 text-white p-2 rounded hover:bg-red-600 transition-colors cursor-pointer"><Instagram size={16} /></div>
                <div className="bg-slate-900 text-white p-2 rounded hover:bg-red-600 transition-colors cursor-pointer"><Linkedin size={16} /></div>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Property Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Property Management</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Block Management</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Asset Management</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Facilities Management</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>HMO Management</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Guaranteed Rent</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>About Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Contact Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Team</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Career</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Maintenance Portal</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center"><span className="mr-2 text-slate-300">›</span>Blogs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Our Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
            <div className="flex">
                <input type="email" placeholder="Email" className="flex-1 px-4 py-3 bg-white border border-slate-300 text-sm focus:outline-none focus:border-red-600" />
                <button className="bg-slate-900 text-white px-4 py-3 font-bold text-sm hover:bg-red-600 transition-colors">Submit</button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500 bg-slate-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8 mt-16 text-slate-400">
            <div className="py-4">
              &copy; {new Date().getFullYear()} By SwiftMove UK. All Rights Reserved.
            </div>
            <div className="flex space-x-6 py-4">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Cookie policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
               <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
        </div>
      </div>
    </footer>
  );
};