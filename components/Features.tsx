import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  const cards = [
    {
      title: "Streamlined Transaction Management",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "We deliver the best, so trust our marketing strategy which includes comprehensive support for all aspects of the transaction process. From document preparation to payment processing, we'll handle every detail."
    },
    {
      title: "Post-Sale Follow-Up And Support",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The ownership concerns are worth mentioning for us. Our dedicated team is ready to address any queries or concerns of our customers. Which includes regular check-ins and other issues resolution."
    },
    {
      title: "Professional Property Promotion",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "We help you attract high-quality buyers which will benefit you with an increase in revenue. Don't miss the chance to shift your property's marketing with our professional promotion services."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border-b-4 border-transparent hover:border-red-600">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm">
                   <div className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200">
                     <span className="text-red-600 font-bold text-xs">SM</span>
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-1">
                  {card.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <a href="#" className="inline-flex items-center text-red-600 font-bold text-sm tracking-wide hover:underline">
                    READ MORE <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};