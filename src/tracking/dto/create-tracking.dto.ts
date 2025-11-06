export class CreateHabitDto {
  name: string;
  streak: number;
  target: string;
  completion: number;
  lastActivity: string;
}

export class CreateSkillDto {
  name: string;
  level: string;
  progress: number;
  hoursLogged: number;
  recentActivity: string;
}

export class CreateMemorizationDto {
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

export class CreateObjectiveDto {
  title: string;
  progress: number;
  keyResults: { description: string; progress: number; status: string }[];
}
