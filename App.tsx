import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ValuationForm } from './components/ValuationForm';
import { MarketReport } from './components/MarketReport';
import { ChatWidget } from './components/ChatWidget';
import { ContentBlock } from './components/ContentBlock';
import { PromoSection } from './components/PromoSection';
import { Testimonials } from './components/Testimonials';
import { StatsBar } from './components/StatsBar';
import { AppView, PropertyDetails, MarketReportData, LoadingState } from './types';
import { getMarketReport } from './services/gemini';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [postcode, setPostcode] = useState('');
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetails | null>(null);
  const [marketReport, setMarketReport] = useState<MarketReportData | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);

  const handleStartValuation = (pc: string) => {
    setPostcode(pc);
    setCurrentView(AppView.VALUATION_FORM);
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = async (details: PropertyDetails) => {
    setPropertyDetails(details);
    setLoadingState(LoadingState.LOADING);
    
    // Simulate API delay for better UX
    setTimeout(async () => {
      try {
        const report = await getMarketReport(details.postcode);
        setMarketReport(report);
        setLoadingState(LoadingState.SUCCESS);
        setCurrentView(AppView.REPORT);
        window.scrollTo(0, 0);
      } catch (error) {
        setLoadingState(LoadingState.ERROR);
        alert("Sorry, we couldn't generate the AI report right now. Our team will call you shortly.");
      }
    }, 1500);
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.HOME:
        return (
          <>
            <Hero onStartValuation={handleStartValuation} />
            <Features />
            <ContentBlock 
              title="Serving In Nationwide And Near By Areas" 
              subtitle="LOCAL EXPERTISE"
              text="SwiftMove Estate Agents have expanded their roots in the UK by targeting many nearby regions. You can trace our footprints to parts including Manchester, Birmingham, Leeds, Bristol, and an extensive list. We mapped these cities by our regional offices so we can serve better."
              imageSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              buttonText="Talk To Our Expert Today!"
              imageOnRight={true}
            />
             <ContentBlock 
              title="What's Our Mission As Cash Estate Agents?" 
              text="We maintain the highest standards of quality and exceptional service at SwiftMove. We provide all necessary details, market your property on major platforms, and create standout promotional materials. Whether buying or selling, we offer expert guidance from planning to completion."
              imageSrc="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              buttonText="Watch Our Story"
              imageOnRight={false}
              isVideo={true}
            />
            <PromoSection onStartValuation={() => handleStartValuation('')} />
            <Testimonials />
            <StatsBar />
          </>
        );
      case AppView.VALUATION_FORM:
        return (
          <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Your Free Valuation</h2>
              <p className="mt-2 text-slate-600 font-sans">Step {loadingState === LoadingState.LOADING ? 'Finalizing' : '1 of 3'}</p>
            </div>
            <div className="w-full max-w-lg">
              <ValuationForm 
                initialPostcode={postcode} 
                onSubmit={handleFormSubmit} 
                isSubmitting={loadingState === LoadingState.LOADING}
              />
            </div>
          </div>
        );
      case AppView.REPORT:
        return (
          <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {marketReport && propertyDetails && (
                <MarketReport data={marketReport} details={propertyDetails} />
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Header onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;