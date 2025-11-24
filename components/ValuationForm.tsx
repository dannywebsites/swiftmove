import React, { useState } from 'react';
import { PropertyDetails } from '../types';
import { ArrowRight, Check, MapPin, Home, BedDouble } from 'lucide-react';

interface ValuationFormProps {
  initialPostcode?: string;
  onSubmit: (details: PropertyDetails) => void;
  isSubmitting: boolean;
}

export const ValuationForm: React.FC<ValuationFormProps> = ({ initialPostcode = '', onSubmit, isSubmitting }) => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<PropertyDetails>({
    postcode: initialPostcode,
    bedrooms: '',
    propertyType: '',
    condition: 'Good',
    email: '',
    phone: ''
  });

  const handleChange = (field: keyof PropertyDetails, value: string) => {
    setDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  const renderStep1 = () => (
    <div className="animate-fade-in">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Where is the property?</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Postcode</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              required
              value={details.postcode}
              onChange={(e) => handleChange('postcode', e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="e.g. SW1A 1AA"
            />
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={!details.postcode}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          Next Step <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="animate-fade-in">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Property Details</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Home className="h-5 w-5 text-slate-400" />
            </div>
            <select
              value={details.propertyType}
              onChange={(e) => handleChange('propertyType', e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">Select Type</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="Flat/Apartment">Flat/Apartment</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms</label>
          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BedDouble className="h-5 w-5 text-slate-400" />
            </div>
            <select
              value={details.bedrooms}
              onChange={(e) => handleChange('bedrooms', e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">Select Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={!details.propertyType || !details.bedrooms}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          Next Step <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="animate-fade-in">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Details</h3>
      <div className="space-y-4">
        <p className="text-sm text-slate-600 mb-4">
          Where should we send your valuation report?
        </p>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input
            type="email"
            required
            value={details.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="block w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
          <input
            type="tel"
            required
            value={details.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="block w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="07700 900000"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!details.email || !details.phone || isSubmitting}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center disabled:opacity-75"
        >
          {isSubmitting ? 'Generating Report...' : 'Get My Cash Offer Now'}
          {!isSubmitting && <Check className="ml-2 w-5 h-5" />}
        </button>
        <p className="text-xs text-center text-slate-400 mt-2">
          By clicking above, you agree to our Terms. Your data is secure.
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <div className="mb-8">
        <div className="flex space-x-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                s <= step ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
      
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </div>
  );
};