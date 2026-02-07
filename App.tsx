import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import SciFiCard from './components/SciFiCard';
import DetailSection from './components/DetailSection';
import ConnectionLines from './components/ConnectionLines';
import { TEAM_DATA, THEME_COLORS, ROLE_ICONS } from './constants';

const App: React.FC = () => {
  const leader = TEAM_DATA.find(m => m.roleType === 'LEADER')!;
  const operatives = TEAM_DATA.filter(m => m.roleType !== 'LEADER');

  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black text-slate-200 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(18,16,99,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,16,99,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <Header />
      
      <main className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 flex flex-col items-center gap-8 md:gap-16 pb-20">
        
        <ConnectionLines />

        {/* Leader Section */}
        <div className="w-full max-w-3xl relative z-10">
            <div className="text-center mb-4 opacity-50 font-tech tracking-[0.3em] text-amber-500 text-xs uppercase">
                Command Node
            </div>
            <SciFiCard 
                colors={THEME_COLORS[leader.roleType]} 
                className="w-full"
                delay={0.2}
            >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                     <div className={`p-4 rounded-full border-2 ${THEME_COLORS[leader.roleType].border} bg-black/40`}>
                        {React.createElement(ROLE_ICONS[leader.roleType], { size: 40, className: THEME_COLORS[leader.roleType].primary })}
                     </div>
                     <div className="flex-grow text-center md:text-left">
                        <h2 className={`text-2xl md:text-4xl font-bold uppercase tracking-wide ${THEME_COLORS[leader.roleType].text}`}>
                            {leader.name}
                        </h2>
                        <div className={`text-sm md:text-lg font-tech uppercase tracking-wider ${THEME_COLORS[leader.roleType].secondary} mb-2`}>
                            {leader.role}
                        </div>
                        <p className="text-slate-300 font-light max-w-xl">
                            {leader.coreFunction}
                        </p>
                     </div>
                </div>
                {/* Expandable Protocol Section */}
                <div className="w-full mt-6 pt-4 border-t border-white/5">
                    <DetailSection member={leader} colors={THEME_COLORS[leader.roleType]} />
                </div>
            </SciFiCard>
        </div>

        {/* Operatives Grid */}
        <div className="w-full relative z-10">
            <div className="text-center mb-6 opacity-50 font-tech tracking-[0.3em] text-blue-500 text-xs uppercase">
                Operational Units
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {operatives.map((op, index) => (
                    <SciFiCard 
                        key={op.id}
                        colors={THEME_COLORS[op.roleType]}
                        className="h-full min-h-[400px]"
                        delay={0.4 + (index * 0.2)}
                    >
                         <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                             <div className={`p-2 rounded-lg border ${THEME_COLORS[op.roleType].border} bg-black/30`}>
                                {React.createElement(ROLE_ICONS[op.roleType], { size: 24, className: THEME_COLORS[op.roleType].primary })}
                             </div>
                             <div>
                                 <h3 className={`text-xl font-bold leading-none ${THEME_COLORS[op.roleType].text}`}>
                                     {op.name}
                                 </h3>
                                 <div className={`text-[10px] font-tech uppercase mt-1 ${THEME_COLORS[op.roleType].secondary}`}>
                                     {op.role}
                                 </div>
                             </div>
                         </div>
                         
                         <div className="mb-4">
                             <div className="text-xs uppercase text-slate-500 font-tech mb-1">Primary Objective</div>
                             <p className="text-sm text-slate-300 font-light leading-relaxed">
                                 {op.mainDuty}
                             </p>
                         </div>

                         <DetailSection member={op} colors={THEME_COLORS[op.roleType]} />
                    </SciFiCard>
                ))}
            </div>
        </div>

      </main>

      {/* Decorative Footer Ticker */}
      <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur border-t border-white/10 py-2 overflow-hidden z-50">
        <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap text-[10px] font-tech text-blue-400/50 uppercase tracking-widest"
        >
            <span>System Status: Optimal</span>
            <span>///</span>
            <span>Network: Secured</span>
            <span>///</span>
            <span>Data Stream: Active</span>
            <span>///</span>
            <span>Protocol: NexGen-Alpha</span>
            <span>///</span>
            <span>Monitoring: Ads, CPL, Organic Traffic</span>
            <span>///</span>
            <span>Creative Output: High Efficiency</span>
            <span>///</span>
            <span>System Status: Optimal</span>
            <span>///</span>
            <span>Network: Secured</span>
            <span>///</span>
        </motion.div>
      </footer>
    </div>
  );
};

export default App;