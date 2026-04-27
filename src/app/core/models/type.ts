export interface User {
  user_metadata: any;
  id: string;
  email: string;
  full_name?: string;
  role?: string;
}

export interface Course {
  title: string,
  description: string,
  image: string,
  tag: string,
  label: string,
  modules: number,
  tempoEstimado: string,
  xp: number,
  streak: number,
  progresso: number,
}

export interface StatusCard {
  icon: string,
  value: number | string,
  label: string,
  variant: string,
  
}

export interface Module {
  id: number;
  title: string;
  description: string;
  tags: string[];
  duration: string;
  lessons: number;
  xp: number;
  status: 'completed' | 'in-progress' | 'pending';
}

export interface AccountMenu {
  userName: string;
  email: string;
  level: number;
  xp: number;
  maxXp: number;
}