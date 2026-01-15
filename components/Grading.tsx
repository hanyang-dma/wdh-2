import React from 'react';
import { useLanguage } from '../LanguageContext';

const Grading: React.FC = () => {
  const { content } = useLanguage();
  const { grading } = content;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
      <div className="bg-black p-8 text-white md:p-12 border-b-2 border-white md:border-b-0 md:border-r-2 md:border-white">
        <h2 className="mb-6 text-4xl font-black uppercase md:text-5xl text-swissRed whitespace-pre-line">
            {grading.title.includes(' ') ? grading.title.replace(' ', '\n') : grading.title}
        </h2>
        <p className="font-mono text-sm leading-relaxed text-gray-300 whitespace-pre-line">
          {grading.description}
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
        {grading.items.map((item, idx) => (
          <div key={idx} className="mb-6 last:mb-0">
            <div className="mb-2 flex items-end justify-between">
              <span className="font-bold uppercase tracking-wider">{item.label}</span>
              <span className="font-mono text-2xl font-bold text-swissRed">{item.percentage}%</span>
            </div>
            {/* Bar */}
            <div className="h-4 w-full border-2 border-black bg-offWhite relative">
              <div 
                className="h-full bg-black transition-all duration-1000 ease-out" 
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <p className="mt-2 font-mono text-xs text-gray-500">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Grading;