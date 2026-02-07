import React from 'react';
import { TeamMember, ColorScheme } from '../types';
import { ArrowRight, Activity, AlertCircle, PlayCircle, FileText, Share2, Layers } from 'lucide-react';

interface DetailSectionProps {
  member: TeamMember;
  colors: ColorScheme;
}

const DetailSection: React.FC<DetailSectionProps> = ({ member, colors }) => {
  const { roleType, tasks, protocols, workflowRule } = member;

  if (roleType === 'LEADER' && protocols) {
    return (
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
            <Activity className={`w-4 h-4 ${colors.primary}`} />
            <span className={`text-xs font-tech tracking-wider uppercase ${colors.secondary}`}>โปรโตคอลคำสั่ง</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className={`p-2 rounded border ${colors.border} bg-black/20`}>
                <div className={`text-[10px] uppercase ${colors.secondary} mb-1`}>ระดับเร่งด่วน</div>
                <div className="text-sm font-semibold">{protocols.urgent}</div>
            </div>
            <div className={`p-2 rounded border ${colors.border} bg-black/20`}>
                <div className={`text-[10px] uppercase ${colors.secondary} mb-1`}>การสื่อสารทั่วไป</div>
                <div className="text-sm font-semibold">{protocols.routine}</div>
            </div>
            <div className={`p-2 rounded border ${colors.border} bg-black/20`}>
                <div className={`text-[10px] uppercase ${colors.secondary} mb-1`}>กฎเหล็ก</div>
                <div className="text-sm font-semibold text-amber-300">{protocols.rule}</div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3 flex-grow">
      {/* Daily Tasks / Patterns */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
            <Layers className={`w-4 h-4 ${colors.primary}`} />
            <span className={`text-xs font-tech tracking-wider uppercase ${colors.secondary}`}>
                {workflowRule ? `ขั้นตอนการทำงาน: ${workflowRule}` : 'ภารกิจประจำวัน'}
            </span>
        </div>
        
        <div className={`p-3 rounded border ${colors.border} bg-black/20 text-sm space-y-1`}>
            {tasks?.daily?.map((task, idx) => (
                <div key={idx} className="flex items-start gap-2">
                    <span className={`${colors.primary} mt-1`}>›</span>
                    <span className="opacity-90">{task}</span>
                </div>
            ))}
            {tasks?.daily_pattern && (
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/5 p-2 rounded flex flex-col items-center justify-center min-h-[60px]">
                        <div className={`text-sm font-bold ${colors.primary} leading-tight`}>
                            {tasks.daily_pattern.images}
                        </div>
                        <div className="text-[9px] opacity-60 font-tech uppercase mt-1 tracking-wider">ภาพนิ่ง</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded flex flex-col items-center justify-center min-h-[60px]">
                        <div className={`text-sm font-bold ${colors.primary} leading-tight`}>
                            {tasks.daily_pattern.short_videos}
                        </div>
                        <div className="text-[9px] opacity-60 font-tech uppercase mt-1 tracking-wider">วิดีโอสั้น</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded flex flex-col items-center justify-center min-h-[60px]">
                        <div className={`text-sm font-bold ${colors.primary} leading-tight`}>
                            {tasks.daily_pattern.ads}
                        </div>
                        <div className="text-[9px] opacity-60 font-tech uppercase mt-1 tracking-wider">โฆษณา</div>
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* Special / Weekly */}
      {tasks?.weekly && (
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <AlertCircle className={`w-4 h-4 ${colors.primary}`} />
                <span className={`text-xs font-tech tracking-wider uppercase ${colors.secondary}`}>ข่าวกรอง (รายสัปดาห์)</span>
            </div>
            <div className={`p-3 rounded border ${colors.border} bg-black/20 text-sm`}>
                <div className="flex justify-between mb-2 border-b border-white/10 pb-1">
                    <span className="font-bold">{tasks.weekly.name}</span>
                    <span className={`font-tech text-xs py-0.5 px-2 rounded-full border ${colors.border} ${colors.primary}`}>
                        {tasks.weekly.tool}
                    </span>
                </div>
                <div className="space-y-1">
                    {tasks.weekly.outputs.map((out, i) => (
                        <div key={i} className="text-xs opacity-80 flex items-center gap-2">
                             <div className={`w-1 h-1 rounded-full ${colors.bg.replace('bg-', 'bg-opacity-100 bg-')}`} />
                             {out}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}

      {tasks?.special && (
         <div className="space-y-1">
            <div className="flex items-center gap-2">
                <Activity className={`w-4 h-4 ${colors.primary}`} />
                <span className={`text-xs font-tech tracking-wider uppercase ${colors.secondary}`}>ภารกิจพิเศษ</span>
            </div>
             <div className={`p-3 rounded border ${colors.border} bg-black/20 text-sm`}>
                {typeof tasks.special === 'string' ? (
                    <span className="opacity-90">{tasks.special}</span>
                ) : (
                    <div className="space-y-2">
                        <div className="font-bold flex items-center gap-2">
                            <PlayCircle size={14} /> {tasks.special.name}
                        </div>
                        <div className="text-xs opacity-70 italic">"{tasks.special.style}"</div>
                        <div className={`text-xs mt-2 pt-2 border-t border-white/10 flex items-center gap-2 ${colors.secondary}`}>
                            <Share2 size={12} /> {tasks.special.collaboration}
                        </div>
                    </div>
                )}
             </div>
         </div>
      )}
      
      {tasks?.input_source && (
          <div className={`mt-auto pt-2 flex items-center gap-2 text-xs ${colors.secondary} opacity-70`}>
              <ArrowRight size={12} />
              <span>ข้อมูลนำเข้า: {tasks.input_source}</span>
          </div>
      )}
    </div>
  );
};

export default DetailSection;