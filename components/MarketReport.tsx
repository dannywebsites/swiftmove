import React from 'react';
import { MarketReportData, PropertyDetails } from '../types';
import { TrendingUp, AlertTriangle, CheckCircle, Clock, Map } from 'lucide-react';

interface MarketReportProps {
  data: MarketReportData;
  details: PropertyDetails;
}

export const MarketReport: React.FC<MarketReportProps> = ({ data, details }) => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Banner */}
      <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-700 rounded-full opacity-50 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Market Insight Report</h2>
          <p className="text-blue-200 text-lg">Analysis for {details.postcode.toUpperCase()}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Local Market Overview</h3>
            <p className="text-slate-600 leading-relaxed">{data.summary}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Estimated Time */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="p-4 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Clock className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold text-slate-700 mb-1">Avg. Time to Sell (Open Market)</h4>
            <span className="text-3xl font-bold text-slate-900">{data.estimatedTimeOnMarket}</span>
            <p className="text-sm text-slate-500 mt-2">SwiftMove can complete in 7 days.</p>
        </div>

        {/* Our Offer Estimate (Dummy) */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
             <div className="p-4 bg-green-100 text-green-600 rounded-full mb-4">
                <TrendingUp className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold text-slate-700 mb-1">Your Preliminary Cash Offer</h4>
            <span className="text-3xl font-bold text-green-700">£ Pending Valuation</span>
            <p className="text-sm text-slate-500 mt-2">One of our senior valuers is reviewing your details now.</p>
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h4 className="flex items-center text-lg font-bold text-slate-900 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                Challenges of Open Market
            </h4>
            <ul className="space-y-3">
                {data.traditionalVsCash.cons.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm">
                        <span className="mr-2 text-red-400">•</span> {item}
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h4 className="flex items-center text-lg font-bold text-slate-900 mb-4">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Benefits of Traditional Agent
            </h4>
            <ul className="space-y-3">
                {data.traditionalVsCash.pros.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm">
                         <span className="mr-2 text-green-400">•</span> {item}
                    </li>
                ))}
            </ul>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">What happens next?</h3>
        <p className="text-slate-600 mb-6">We have received your details. A member of our team will call you at <strong>{details.phone}</strong> within 1 hour to provide your guaranteed cash offer.</p>
        <button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
            onClick={() => window.location.reload()}
        >
            Start New Valuation
        </button>
      </div>
    </div>
  );
};