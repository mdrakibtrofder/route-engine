import { Injectable } from '@nestjs/common';
import { WeeklyStackData } from './interfaces/stack.interface';

@Injectable()
export class StacksService {
  private readonly weeklyData: WeeklyStackData[] = [
    {
      week: 'Week 1',
      activities: [
        { stack: 'Competitive Programming', hours: 8 },
        { stack: 'Development', hours: 20 },
        { stack: 'AI', hours: 12 },
        { stack: 'DevOps', hours: 30 },
        { stack: 'Machine Learning', hours: 15 },
        { stack: 'Research', hours: 5 },
      ],
    },
    {
      week: 'Week 2',
      activities: [
        { stack: 'Competitive Programming', hours: 12 },
        { stack: 'Development', hours: 28 },
        { stack: 'AI', hours: 8 },
        { stack: 'DevOps', hours: 38 },
        { stack: 'Machine Learning', hours: 8 },
        { stack: 'Research', hours: 6 },
      ],
    },
    {
      week: 'Week 3',
      activities: [
        { stack: 'Competitive Programming', hours: 15 },
        { stack: 'Development', hours: 22 },
        { stack: 'AI', hours: 14 },
        { stack: 'DevOps', hours: 32 },
        { stack: 'Machine Learning', hours: 12 },
        { stack: 'Research', hours: 8 },
      ],
    },
    {
      week: 'Week 4',
      activities: [
        { stack: 'Competitive Programming', hours: 10 },
        { stack: 'Development', hours: 26 },
        { stack: 'AI', hours: 11 },
        { stack: 'DevOps', hours: 35 },
        { stack: 'Machine Learning', hours: 9 },
        { stack: 'Research', hours: 7 },
      ],
    },
    {
      week: 'Week 5',
      activities: [
        { stack: 'Competitive Programming', hours: 11 },
        { stack: 'Development', hours: 24 },
        { stack: 'AI', hours: 9 },
        { stack: 'DevOps', hours: 36 },
        { stack: 'Machine Learning', hours: 11 },
        { stack: 'Research', hours: 9 },
      ],
    },
    {
      week: 'Week 6',
      activities: [
        { stack: 'Competitive Programming', hours: 9 },
        { stack: 'Development', hours: 27 },
        { stack: 'AI', hours: 13 },
        { stack: 'DevOps', hours: 33 },
        { stack: 'Machine Learning', hours: 10 },
        { stack: 'Research', hours: 8 },
      ],
    },
    {
      week: 'Week 7',
      activities: [
        { stack: 'Competitive Programming', hours: 13 },
        { stack: 'Development', hours: 23 },
        { stack: 'AI', hours: 10 },
        { stack: 'DevOps', hours: 37 },
        { stack: 'Machine Learning', hours: 13 },
        { stack: 'Research', hours: 4 },
      ],
    },
    {
      week: 'Week 8',
      activities: [
        { stack: 'Competitive Programming', hours: 14 },
        { stack: 'Development', hours: 25 },
        { stack: 'AI', hours: 7 },
        { stack: 'DevOps', hours: 34 },
        { stack: 'Machine Learning', hours: 14 },
        { stack: 'Research', hours: 6 },
      ],
    },
    {
      week: 'Week 9',
      activities: [
        { stack: 'Competitive Programming', hours: 7 },
        { stack: 'Development', hours: 29 },
        { stack: 'AI', hours: 15 },
        { stack: 'DevOps', hours: 31 },
        { stack: 'Machine Learning', hours: 7 },
        { stack: 'Research', hours: 11 },
      ],
    },
  ];

  findAll(): WeeklyStackData[] {
    return this.weeklyData;
  }

  // For simplicity, we are not implementing create, update, delete for weekly data.
  // A real application would have more complex logic for managing this data.
}
