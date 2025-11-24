import React from 'react';

interface PromoSectionProps {
    onStartValuation: () => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({ onStartValuation }) => {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" 
                alt="Background" 
                className="w-full h-full object-cover"
            />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        What's Your Property <br/>
                        <span className="text-blue-400">Really Worth?</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed">
                        Unlock your property's potential with a free, expert valuation. Backed by real-time market insights and local expertise.
                        Discover the true value of your asset in today's shifting market.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={onStartValuation}
                            className="bg-white text-slate-900 px-8 py-4 font-bold rounded hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            Get Your Free Valuation Today
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 font-bold rounded hover:bg-white/10 transition-colors">
                            Our Services
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Valuation Report on Laptop" 
                            className="rounded-lg shadow-2xl border-4 border-slate-700/50"
                        />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};