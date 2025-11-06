export interface DashboardStats {
  activeTasks: number;
  eventsThisWeek: number;
  learningProgress: number;
  ideasCaptured: number;
}

export interface RecentActivity {
  type: string;
  title: string;
  time: string;
  status: string;
}

export interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
}

export interface Goal {
  id: number;
  title: string;
  progress: number;
}

export interface DashboardData {
  stats: DashboardStats;
  recentActivities: RecentActivity[];
  upcomingEvents: UpcomingEvent[];
  goals: Goal[];
}
