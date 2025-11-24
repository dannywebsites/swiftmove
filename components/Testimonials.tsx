import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Shahbaz",
      time: "4 months ago",
      text: "Met Mr. Adil through a reference, and I can genuinely say he's one of the few local estate agents who actually care about long-term relationships.",
      initial: "S",
      color: "bg-blue-600"
    },
    {
      name: "Farzandah Razzaq",
      time: "4 months ago",
      text: "I rarely write reviews, but I genuinely wanted to share this. I was completely lost when it came to renting out my flat. A friend recommended them.",
      initial: "F",
      color: "bg-slate-700"
    },
    {
      name: "Amer Hussain",
      time: "4 months ago",
      text: "As someone who has dealt with a few estate agents over the years, I can honestly say this team stands out. They really know the Canning Town area.",
      initial: "A",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Our Trusted Client Reviews</h2>
          <div className="flex justify-center items-center mt-4 space-x-2">
             <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
             </div>
             <span className="text-slate-600 font-semibold text-lg">4.9/5 based on 389 reviews</span>
          </div>
          <div className="mt-2 text-blue-500 font-bold text-2xl flex items-center justify-center">
            <span className="text-blue-400 mr-1">G</span>
            <span className="text-red-500 mr-1">o</span>
            <span className="text-yellow-500 mr-1">o</span>
            <span className="text-blue-500 mr-1">g</span>
            <span className="text-green-500 mr-1">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow border border-slate-100">
              <div className="absolute top-8 right-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
              </div>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.time}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                "{review.text}"
              </p>
              <a href="#" className="block mt-6 text-sm text-slate-400 hover:text-slate-600 font-medium">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};