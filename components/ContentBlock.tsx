import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContentBlockProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  text: string;
  imageOnRight?: boolean;
  buttonText?: string;
  isVideo?: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ 
  imageSrc, 
  title, 
  subtitle,
  text, 
  imageOnRight = false, 
  buttonText = "Read More",
  isVideo = false
}) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${imageOnRight ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image/Video Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded shadow-2xl overflow-hidden group">
              {isVideo ? (
                 <div className="aspect-video bg-slate-100 relative">
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center pl-1 cursor-pointer hover:bg-red-700 transition-colors shadow-lg">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent"></div>
                        </div>
                    </div>
                 </div>
              ) : (
                <div className="aspect-[4/3] relative">
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
                </div>
              )}
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            {subtitle && (
                <span className="block text-red-600 font-bold tracking-widest text-sm uppercase mb-3">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {text}
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 font-bold rounded shadow-lg hover:bg-red-600 transition-all duration-300 flex items-center group">
              {buttonText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};