import React from 'react';
import { Eye, Brain, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Objectives: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="grid grid-cols-1 border-b-2 border-black md:grid-cols-3">
      {content.objectives.map((obj, index) => {
        const Icon = obj.icon === 'eye' ? Eye : obj.icon === 'brain' ? Brain : Heart;
        return (
          <div 
            key={index} 
            className={`group relative flex flex-col justify-between p-8 transition-colors hover:bg-black hover:text-white ${index !== 2 ? 'md:border-r-2 md:border-black' : ''} border-b-2 border-black md:border-b-0`}
          >
            <div className="mb-8 flex items-start justify-between">
              <span className="font-mono text-5xl font-bold text-gray-200 group-hover:text-gray-700">0{index + 1}.</span>
              <Icon className="h-8 w-8 text-swissRed" />
            </div>
            
            <div>
              <h3 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-swissRed">
                {obj.title}
              </h3>
              <h4 className="mb-4 text-2xl font-bold uppercase leading-none">
                {obj.subtitle}
              </h4>
              <p className="text-sm font-medium leading-relaxed opacity-80">
                {obj.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Objectives;