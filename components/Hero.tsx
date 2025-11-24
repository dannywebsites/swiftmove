import React, { useState } from 'react';

interface HeroProps {
  onStartValuation: (postcode: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartValuation }) => {
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postcode.trim()) {
      onStartValuation(postcode);
    }
  };

  return (
    <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="London City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Trusted Property Experts <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
            In London & The UK
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          Did you know that the average property owner spends over 20 hours per month managing their property? 
          Let us guide you through effortless Letting & Buying with a free consultation.
        </p>

        <div className="bg-white p-3 rounded-lg shadow-2xl max-w-2xl mx-auto transform transition-all hover:scale-[1.01]">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Enter your postcode (e.g. E14 5AB)"
              className="flex-1 px-6 py-4 rounded bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-slate-900 hover:bg-blue-800 text-white font-bold tracking-wide rounded transition-colors whitespace-nowrap"
            >
              Get Free Valuation
            </button>
          </form>
        </div>

        <div className="mt-8 flex justify-center space-x-8 text-white text-sm font-semibold tracking-wide uppercase opacity-90">
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> Residential Sales</span>
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> Commercial</span>
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> Lettings</span>
        </div>
      </div>
    </section>
  );
};