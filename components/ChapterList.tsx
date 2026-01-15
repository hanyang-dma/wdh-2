import React, { useState } from 'react';
import { Plus, Minus, Clock, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ChapterList: React.FC = () => {
  const { content } = useLanguage();
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section className="bg-offWhite">
      <div className="border-b-2 border-black bg-swissRed p-4 text-center md:text-left">
        <h2 className="font-mono text-4xl font-black uppercase text-white md:text-6xl">
          {content.courseInfo.syllabus.includes('Curriculum') ? 'Curriculum Map' : (content.courseInfo.name === '西方设计史' ? '课程地图' : 'Curriculum Map')}
        </h2>
      </div>
      
      <div className="flex flex-col">
        {content.chapters.map((chapter) => (
          <div key={chapter.id} className="group border-b-2 border-black bg-white transition-all last:border-b-2">
            
            {/* Header / Clickable Area */}
            <button 
              onClick={() => setActiveId(activeId === chapter.id ? null : chapter.id)}
              className="flex w-full flex-col md:flex-row md:items-stretch text-left"
            >
              {/* Left Column: Number & Image Placeholder */}
              <div className={`relative flex items-center justify-between border-b-2 border-black p-6 md:w-1/4 md:border-b-0 md:border-r-2 md:p-8 ${activeId === chapter.id ? 'bg-black text-white' : 'bg-white text-black'}`}>
                 <span className="font-mono text-6xl font-bold md:text-7xl">{chapter.id}.</span>
                 <div className="md:hidden">
                   {activeId === chapter.id ? <Minus /> : <Plus />}
                 </div>
                 {/* Decorative Image Strip on Hover */}
                 <div className="absolute inset-0 -z-10 hidden overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-20 md:block">
                     <img src={`https://picsum.photos/seed/${chapter.id}/400/200?grayscale`} alt="texture" className="h-full w-full object-cover" />
                 </div>
              </div>

              {/* Right Column: Title & Basic Info */}
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                 <div className="mb-2 flex items-center gap-4">
                    <span className="rounded-full border border-black px-3 py-1 font-mono text-xs font-bold uppercase group-hover:bg-swissRed group-hover:text-white">
                        {chapter.periodLabel}
                    </span>
                    <span className="font-mono text-xs text-gray-500">{chapter.hoursLabel}</span>
                 </div>
                 <h3 className="text-2xl font-bold uppercase leading-tight md:text-4xl">{chapter.title}</h3>
                 <p className="mt-1 font-mono text-sm text-gray-400 uppercase">{chapter.subtitle}</p>
              </div>

              {/* Desktop Expand Indicator */}
              <div className="hidden w-24 items-center justify-center border-l-2 border-black md:flex bg-offWhite">
                 {activeId === chapter.id ? <Minus size={32} className="text-swissRed" /> : <Plus size={32} />}
              </div>
            </button>

            {/* Expanded Content */}
            {activeId === chapter.id && (
              <div className="grid grid-cols-1 border-t-2 border-black bg-offWhite md:grid-cols-12">
                
                {/* Visual Context */}
                <div className="relative border-b-2 border-black md:col-span-4 md:border-b-0 md:border-r-2 md:border-black">
                   <img 
                    src={`https://picsum.photos/seed/${chapter.id + 50}/600/800?grayscale`} 
                    alt={chapter.imageAlt} 
                    className="h-64 w-full object-cover grayscale filter md:h-full"
                   />
                   <div className="absolute bottom-0 left-0 bg-swissRed p-2 font-mono text-xs text-white">
                      {content.ui.fig} {chapter.id}.0 -- {content.ui.ref}
                   </div>
                </div>

                {/* Detailed Text */}
                <div className="p-8 md:col-span-8 md:p-12">
                   <div className="mb-8">
                      <h4 className="mb-4 font-mono text-sm font-bold uppercase text-gray-500">{chapter.labels.summary}</h4>
                      <p className="text-lg font-medium leading-relaxed">{chapter.description}</p>
                   </div>

                   <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 font-mono text-sm font-bold uppercase text-swissRed">
                            <BookOpen size={16} /> {chapter.labels.keyConcepts}
                        </h4>
                        <ul className="list-square space-y-2 pl-4 marker:text-swissRed">
                            {chapter.keyPoints.map((pt, i) => (
                                <li key={i} className="text-sm font-medium">{pt}</li>
                            ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 font-mono text-sm font-bold uppercase text-swissRed">
                            <Users size={16} /> {chapter.labels.keyFigures}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {chapter.keyFigures.map((fig, i) => (
                                <span key={i} className="border border-gray-300 bg-white px-2 py-1 text-xs font-bold uppercase">
                                    {fig}
                                </span>
                            ))}
                        </div>
                      </div>
                   </div>

                   <div className="mt-8 border-t border-gray-300 pt-6">
                       <h4 className="mb-2 flex items-center gap-2 font-mono text-sm font-bold uppercase text-black">
                           <Clock size={16} /> {chapter.labels.assignment}
                       </h4>
                       <p className="bg-black p-4 font-mono text-sm text-white">
                           {'>'} {chapter.homework}
                       </p>
                   </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChapterList;