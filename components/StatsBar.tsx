import React from 'react';
import { ShieldCheck, Award, Lock, Home } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <div className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Logos with Icons/Text */}
                <div className="flex items-center space-x-2">
                    <Home size={32} className="text-blue-600" />
                    <span className="font-bold text-xl text-slate-800">OnTheMarket</span>
                </div>
                <div className="flex items-center space-x-2">
                    <ShieldCheck size={32} className="text-blue-500" />
                    <span className="font-bold text-xl text-slate-800">ICO<span className="text-blue-500 text-xs align-top">®</span></span>
                </div>
                 <div className="flex items-center space-x-2">
                    <Lock size={32} className="text-purple-600" />
                    <span className="font-bold text-xl text-slate-800">AMLA</span>
                </div>
                 <div className="flex items-center space-x-2">
                    <Award size={32} className="text-red-600" />
                    <span className="font-bold text-xl text-slate-800">PropertyMark</span>
                </div>
            </div>
        </div>
    </div>
  );
};