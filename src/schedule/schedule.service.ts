import { Injectable } from '@nestjs/common';
import { ScheduleBlock } from './interfaces/schedule.interface';

@Injectable()
export class ScheduleService {
  private readonly schedule: ScheduleBlock[] = [
    { id: 1, time: "09:00 - 11:00", title: "Deep Work: Kernel Development", type: "Deep Work", description: "Focus on core feature implementation", status: "completed" },
    { id: 2, time: "11:00 - 11:30", title: "Team Standup", type: "Meetings", description: "Daily sync with development team", status: "completed" },
    { id: 3, time: "14:00 - 16:00", title: "TypeScript Course", type: "Learning", description: "Advanced patterns and best practices", status: "in-progress" },
    { id: 4, time: "16:30 - 17:30", title: "Code Review Session", type: "Deep Work", description: "Review pull requests and provide feedback", status: "upcoming" },
    { id: 5, time: "09:30 - 10:30", title: "Project Planning", type: "Admin", description: "Quarterly roadmap review and updates", status: "upcoming" },
    { id: 6, time: "11:30 - 12:30", title: "Client Meeting", type: "Meetings", description: "Requirements gathering for new features", status: "upcoming" },
    { id: 7, time: "13:00 - 14:00", title: "System Architecture Review", type: "Deep Work", description: "Evaluate current architecture and plan improvements", status: "upcoming" },
    { id: 8, time: "14:30 - 15:30", title: "Docker Workshop", type: "Learning", description: "Advanced containerization techniques", status: "upcoming" },
    { id: 9, time: "15:30 - 16:30", title: "Documentation Update", type: "Admin", description: "Update API documentation and user guides", status: "upcoming" },
    { id: 10, time: "17:00 - 18:00", title: "Performance Optimization", type: "Deep Work", description: "Optimize database queries and API endpoints", status: "upcoming" },
    { id: 11, time: "18:00 - 19:00", title: "Security Training", type: "Learning", description: "Web application security best practices", status: "upcoming" }
  ];

  findAll(): ScheduleBlock[] {
    return this.schedule;
  }

  create(block: Omit<ScheduleBlock, 'id'>): ScheduleBlock {
    const newBlock = { ...block, id: Date.now() };
    this.schedule.push(newBlock);
    return newBlock;
  }

  update(id: number, updatedBlock: Partial<ScheduleBlock>): ScheduleBlock | undefined {
    const blockIndex = this.schedule.findIndex((b) => b.id === id);
    if (blockIndex > -1) {
      this.schedule[blockIndex] = { ...this.schedule[blockIndex], ...updatedBlock };
      return this.schedule[blockIndex];
    }
    return undefined;
  }

  remove(id: number): void {
    const blockIndex = this.schedule.findIndex((b) => b.id === id);
    if (blockIndex > -1) {
      this.schedule.splice(blockIndex, 1);
    }
  }
}
