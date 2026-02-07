export interface Protocol {
  urgent: string;
  routine: string;
  rule: string;
}

export interface TaskMap {
  daily?: string[];
  daily_pattern?: {
    images: string;
    short_videos: string;
    ads: string;
  };
  input_source?: string;
  weekly?: {
    name: string;
    tool: string;
    outputs: string[];
  };
  special?: string | {
    name: string;
    style: string;
    collaboration: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleType: 'LEADER' | 'IT_AI' | 'GRAPHIC' | 'ORGANIC';
  coreFunction?: string;
  mainDuty?: string;
  protocols?: Protocol;
  tasks?: TaskMap;
  workflowRule?: string;
  avatarUrl?: string;
}

export type ColorScheme = {
  primary: string;
  secondary: string;
  border: string;
  shadow: string;
  bg: string;
  text: string;
};