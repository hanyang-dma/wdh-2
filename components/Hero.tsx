import React from 'react';
import { ArrowDownLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { content, language, toggleLanguage } = useLanguage();
  const { courseInfo } = content;

  return (
    <header className="relative border-b-2 border-black">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b-2 border-black bg-white px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest md:px-8">
        <span className="text-swissRed">{courseInfo.department}</span>
        <span className="hidden md:inline">{courseInfo.syllabus}</span>
        <div className="flex items-center gap-4">
          <span>{courseInfo.code}</span>
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex border border-black px-2 py-1 hover:bg-black hover:text-white transition-colors"
          >
            <span className={language === 'en' ? 'text-swissRed' : ''}>EN</span>
            <span className="mx-1">/</span>
            <span className={language === 'zh' ? 'text-swissRed' : ''}>中</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left: Course Title */}
        <div className="flex flex-col justify-between bg-white p-6 md:col-span-8 md:border-r-2 md:border-black md:p-12">
          <div>
             <h2 className="mb-2 font-mono text-sm font-bold text-gray-500">{courseInfo.enName}</h2>
             <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter md:text-8xl lg:text-9xl whitespace-pre-line">
              {courseInfo.name.includes(' ') ? courseInfo.name.replace(/ /g, '\n') : courseInfo.name.split('').join('\n')}
            </h1>
          </div>
          
          <div className="mt-12 flex items-end justify-between">
             <div className="max-w-md">
                <p className="font-mono text-sm leading-relaxed">
                   {courseInfo.credits} | {courseInfo.semester}
                </p>
                <p className="mt-4 border-l-4 border-swissRed pl-4 text-sm font-medium leading-relaxed text-gray-800">
                   {courseInfo.description}
                </p>
             </div>
             <ArrowDownLeft size={48} className="hidden text-swissRed md:block" />
          </div>
        </div>

        {/* Right: Big Visual Number */}
        <div className="flex min-h-[300px] flex-col justify-center bg-black p-8 text-white md:col-span-4 md:min-h-0">
          <div className="relative h-full w-full overflow-hidden">
             <span className="absolute -right-4 -top-12 font-mono text-[12rem] font-bold leading-none text-swissRed opacity-90 md:text-[16rem]">
               101
             </span>
             <div className="absolute bottom-0 left-0">
                <h3 className="mb-2 font-mono text-xl text-swissRed">{courseInfo.required}</h3>
                <p className="text-sm text-gray-400 max-w-[200px]">
                  {courseInfo.foundation}<br/>
                  {courseInfo.school}
                </p>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;