export interface StackActivity {
  stack: string;
  hours: number;
}

export interface WeeklyStackData {
  week: string;
  activities: StackActivity[];
}
