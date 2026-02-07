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
    role: "หัวหน้าฝ่ายการตลาดและการขาย (แม่ทัพใหญ่)",
    roleType: 'LEADER',
    coreFunction: "กำหนดทิศทางยุทธศาสตร์การตลาดและการขาย, ตัดสินใจขั้นสุดท้าย (ลุย/ไม่ลุย), เป็นจุดเชื่อมประสานระหว่างทีมการตลาด ทีมขาย และผู้บริหารระดับสูง",
    protocols: {
      urgent: "สายด่วน / โทรศัพท์",
      routine: "Google Workspace / ประชุมรายสัปดาห์",
      rule: "เชื่อสัญชาตญาณ แต่ตรวจสอบด้วยข้อมูล (ไม่ชัวร์ให้ถาม)"
    }
  },
  {
    id: 'op-01',
    name: "แตงกวา (Tangkwa)",
    role: "ผู้เชี่ยวชาญ IT + AI + Ads (สถาปนิกระบบ)",
    roleType: 'IT_AI',
    mainDuty: "ดูแลระบบหลังบ้านทั้งหมด (ปรับแต่งโฆษณา) และแปรรูปข้อมูลดิบให้เป็นข้อมูลเชิงลึกที่ทีมนำไปใช้ต่อได้จริง",
    tasks: {
      daily: ["ตรวจสอบผลโฆษณา (Meta/Google)", "ตรวจสอบความผิดปกติของค่า CPL/CTR", "ซัพพอร์ตปัญหา IT และอุปกรณ์ของทีม"],
      weekly: {
        name: "หน่วยสอดแนมคู่แข่ง",
        tool: "Perplexity AI + Social Listening",
        outputs: ["วิเคราะห์โปรโมชั่นคู่แข่ง", "จับตาโทนเสียงใหม่ๆ", "แกะรอยภาพโฆษณาคู่แข่ง"]
      },
      special: "วิจัยและพัฒนาเครื่องมือ AI ใหม่ๆ เพื่อลดเวลาทำงานและสร้างระบบอัตโนมัติ"
    }
  },
  {
    id: 'op-02',
    name: "บอย (Boy)",
    role: "กราฟิกอาวุโสและครีเอทีฟ (นักสร้างสรรค์)",
    roleType: 'GRAPHIC',
    mainDuty: "ผลิตสื่อภาพและวิดีโอ เพื่อตอบโจทย์การตลาดเน้นผลลัพธ์และการสร้างแบรนด์ (เน้นขายได้และภาพลักษณ์ดี)",
    tasks: {
      daily: [
        "ออกแบบภาพนิ่ง (Key Visual / Perspective / Mood & Tone)",
        "ตัดต่อวิดีโอสั้น (Reels / TikTok / Walkthrough)",
        "ออกแบบภาพโฆษณา (Conversion Ads / Promotion / Hard Sell)"
      ],
      special: {
        name: "กระบวนการสร้างสรรค์",
        style: "Creative Pattern Protocol",
        collaboration: "รับบรีฟจากแตงกวา และทิศทางจากพี่เอิธ"
      }
    }
  },
  {
    id: 'op-03',
    name: "สุ (Su)",
    role: "คอนเทนต์ครีเอเตอร์ (จิตวิญญาณ)",
    roleType: 'ORGANIC',
    mainDuty: "สร้างสรรค์คอนเทนต์ให้เพจมีชีวิตชีวา (เน้นการมีส่วนร่วม) และนำเสนอภาพลักษณ์โครงการให้น่าอยู่ (สร้างความต้องการ)",
    tasks: {
      daily: ["ดูแลคอนเทนต์เพจให้ลื่นไหล", "เขียนแคปชั่นให้น่าติดตาม (Hook/Story)", "ตอบแชท/คอมเมนต์ (ภายใน 1 ชม.)", "สรุปเสียงตอบรับจากลูกค้า"],
      special: {
        name: "รีวิวพาชมโครงการ",
        style: "ประสบการณ์ผู้ใช้จริง (POV) จริงใจ ไม่ขายยัดเยียด",
        collaboration: "ถ่ายฟุตเทจคุณภาพสูง ส่งต่อให้บอยตัดต่อ"
      }
    }
  }
];