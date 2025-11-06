export interface Habit {
  id: number;
  name: string;
  streak: number;
  target: string;
  completion: number;
  lastActivity: string;
}

export interface Skill {
  id: number;
  name: string;
  level: string;
  progress: number;
  hoursLogged: number;
  recentActivity: string;
}

export interface Memorization {
  id: number;
  type: string;
  title: string;
  description: string;
  targetDate: string;
  progress: number;
  versesCompleted: number;
  totalVerses: number;
  dailyTarget: string;
  timeSpent: string;
  status: string;
}

export interface KeyResult {
  description: string;
  progress: number;
  status: string;
}

export interface Objective {
  id: number;
  title: string;
  progress: number;
  keyResults: KeyResult[];
}
