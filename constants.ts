import { TeamMember, ColorScheme } from './types';
import { Shield, Cpu, Palette, Leaf } from 'lucide-react';

export const THEME_COLORS: Record<string, ColorScheme> = {
  LEADER: {
    primary: 'text-amber-400',
    secondary: 'text-amber-200',
    border: 'border-amber-500/50',
    shadow: 'shadow-amber-500/20',
    bg: 'bg-amber-950/30',
    text: 'text-amber-100',
  },
  IT_AI: {
    primary: 'text-cyan-400',
    secondary: 'text-cyan-200',
    border: 'border-cyan-500/50',
    shadow: 'shadow-cyan-500/20',
    bg: 'bg-cyan-950/30',
    text: 'text-cyan-100',
  },
  GRAPHIC: {
    primary: 'text-purple-400',
    secondary: 'text-purple-200',
    border: 'border-purple-500/50',
    shadow: 'shadow-purple-500/20',
    bg: 'bg-purple-950/30',
    text: 'text-purple-100',
  },
  ORGANIC: {
    primary: 'text-emerald-400',
    secondary: 'text-emerald-200',
    border: 'border-emerald-500/50',
    shadow: 'shadow-emerald-500/20',
    bg: 'bg-emerald-950/30',
    text: 'text-emerald-100',
  },
};

export const ROLE_ICONS: Record<string, any> = {
  LEADER: Shield,
  IT_AI: Cpu,
  GRAPHIC: Palette,
  ORGANIC: Leaf,
};

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'leader-01',
    name: "พี่เอิธ (P'Earth)",
    role: "Marketing & Sales Lead",
    roleType: 'LEADER',
    coreFunction: "กำหนดทิศทาง, ฟันธงตัดสินใจ, เชื่อมประสานทีม",
    protocols: {
      urgent: "LINE / โทรศัพท์",
      routine: "Google Drive / Sheets",
      rule: "ถ้าไม่แน่ใจ ให้ถามก่อนลงมือทำ"
    }
  },
  {
    id: 'op-01',
    name: "แตงกวา (Tangkwa)",
    role: "IT + AI + Ads Monitor",
    roleType: 'IT_AI',
    mainDuty: "ดูหลังบ้าน + แปลข้อมูลดิบให้ทีมนำไปใช้ต่อได้",
    tasks: {
      daily: ["เช็กหลังบ้านแอด Meta/Google", "ตรวจสอบค่า CPL ผิดปกติ", "รับแจ้งปัญหา IT/ระบบ"],
      weekly: {
        name: "Competitor Intelligence",
        tool: "Perplexity AI",
        outputs: ["โปรโมชั่นคู่แข่ง", "Tone of Voice", "สไตล์ภาพ/วิดีโอ"]
      },
      special: "ทดลองเครื่องมือ AI ใหม่ๆ และช่วยคิด Workflow"
    }
  },
  {
    id: 'op-02',
    name: "บอย (Boy)",
    role: "Graphic + Creative Production",
    roleType: 'GRAPHIC',
    mainDuty: "ผลิตงานให้ขายง่าย และดูเป็นมืออาชีพ",
    workflowRule: "สูตร 3-2-1",
    tasks: {
      daily_pattern: {
        images: "3 ชิ้น (ขาย/เล่าเรื่อง/บรรยากาศ)",
        short_videos: "2 ชิ้น (Reels/Shorts)",
        ads: "1 ชิ้น (ปรับตาม Data)"
      },
      input_source: "รับ Guideline มาจากแตงกวา"
    }
  },
  {
    id: 'op-03',
    name: "สุ (Su)",
    role: "Organic + Reviewer",
    roleType: 'ORGANIC',
    mainDuty: "ทำให้เพจมีชีวิตชีวา และโครงการดูน่าเข้าอยู่",
    tasks: {
      daily: ["ดูแลโพสต์ Organic", "เขียนแคปชั่น", "ตอบ Inbox/Comment", "เก็บ Feedback ลูกค้า"],
      special: {
        name: "รีวิวโครงการ (Video Review)",
        style: "เดินถ่ายจริง, Authentic, Non-Hard Sell",
        collaboration: "ส่งไฟล์ Footage ให้บอยตัดต่อ"
      }
    }
  }
];