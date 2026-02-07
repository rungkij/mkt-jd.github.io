import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-between items-center py-4 px-6 border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/50 animate-pulse">
          <div className="w-3 h-3 bg-blue-400 rounded-full" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold font-tech tracking-widest text-white uppercase">
            NexGen <span className="text-blue-400">Operations</span>
          </h1>
          <div className="flex items-center gap-2 text-[10px] text-blue-300/70 font-tech tracking-wider">
            <span>SYS.VER.4.2.0</span>
            <span className="w-1 h-1 bg-blue-500 rounded-full" />
            <span>เชื่อมต่อสำเร็จ</span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 font-tech text-blue-200/80">
        <div className="flex items-center gap-2">
            <Wifi size={16} />
            <span className="text-sm">ออนไลน์</span>
        </div>
        <div className="flex items-center gap-2">
            <Battery size={16} />
            <span className="text-sm">98%</span>
        </div>
        <div className="flex items-center gap-2 pl-4 border-l border-white/10">
            <Clock size={16} />
            <span className="text-lg tracking-widest">
                {time.toLocaleTimeString('th-TH', { hour12: false })}
            </span>
        </div>
      </div>
    </div>
  );
};

export default Header;