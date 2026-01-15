import React from 'react';
import { Library, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { footer } = content;

  return (
    <footer className="bg-offWhite pb-12">
       <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
          {/* Readings */}
          <div className="p-8 md:border-r-2 md:border-black md:p-12">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold uppercase">
                <Library className="text-swissRed"/> {footer.essentialReadingsTitle}
            </h3>
            <ul className="space-y-4 font-mono text-sm">
                {footer.readings.map((reading, idx) => (
                    <li key={idx} className={`border-l-2 pl-4 ${idx === 0 ? 'border-swissRed' : 'border-black'}`}>
                        <p className="font-bold">{reading.title}</p>
                        <span className="text-xs text-gray-500">{reading.note}</span>
                    </li>
                ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="p-8 md:p-12">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold uppercase">
                <LinkIcon className="text-swissRed"/> {footer.digitalResourcesTitle}
            </h3>
            <div className="grid gap-4">
                {footer.resources.map((res, idx) => (
                    <a key={idx} href="#" className="group flex items-center justify-between border-2 border-black bg-white p-4 transition-colors hover:bg-black hover:text-white">
                        <span className="font-bold">{res.name}</span>
                        <span className="font-mono text-xs text-swissRed">{res.linkText}</span>
                    </a>
                ))}
            </div>
          </div>
       </div>
       
       <div className="pt-12 text-center font-mono text-xs text-gray-400">
           <p>{footer.copyright}</p>
       </div>
    </footer>
  );
};

export default Footer;