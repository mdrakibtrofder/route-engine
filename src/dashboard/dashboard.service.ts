import { Injectable } from '@nestjs/common';
import { DashboardData } from './interfaces/dashboard.interface';

@Injectable()
export class DashboardService {
  // This service would aggregate data from other services.
  // For now, returning static data based on the frontend.
  private getDashboardData(): DashboardData {
    return {
      stats: {
        activeTasks: 5,
        eventsThisWeek: 3,
        learningProgress: 75,
        ideasCaptured: 10,
      },
      recentActivities: [
        { type: "task", title: "Complete React Component Refactoring", time: "2 hours ago", status: "in-progress" },
        { type: "course", title: "Advanced TypeScript Patterns", time: "1 day ago", status: "in-progress" },
      ],
      upcomingEvents: [
        { id: 1, title: "Team Standup Meeting", date: "2024-01-15", time: "10:00", type: "meeting" },
        { id: 2, title: "TypeScript Advanced Course", date: "2024-01-15", time: "14:00", type: "learning" },
      ],
      goals: [
        { id: 1, title: "Launch Personal Blog Platform", progress: 75 },
        { id: 2, title: "Complete Advanced TypeScript Mastery", progress: 60 },
      ]
    };
  }

  findAll(): DashboardData {
    return this.getDashboardData();
  }
}
