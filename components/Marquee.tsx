import React from 'react';

const Marquee: React.FC<{ text: string; reverse?: boolean }> = ({ text, reverse = false }) => {
  return (
    <div className="relative flex overflow-x-hidden border-b-2 border-black bg-swissRed py-2">
      <div className={`animate-marquee whitespace-nowrap font-mono text-sm font-bold uppercase text-white ${reverse ? 'direction-reverse' : ''}`}>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
      <div className={`absolute top-0 animate-marquee2 whitespace-nowrap font-mono text-sm font-bold uppercase text-white ${reverse ? 'direction-reverse' : ''}`}>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;