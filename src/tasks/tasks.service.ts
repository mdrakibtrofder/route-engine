import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [
    {
      id: 1,
      title: "Complete React Component Refactoring",
      priority: "high",
      status: "in-progress", 
      dueDate: "2025-09-25",
      project: "Kernel Development",
    },
    {
      id: 2,
      title: "Review ML Paper on Software Reconstruction",
      priority: "medium",
      status: "todo",
      dueDate: "2025-10-05", 
      project: "Research",
    },
    {
      id: 3,
      title: "Prepare Technical Documentation",
      priority: "high",
      status: "completed",
      dueDate: "2025-09-20",
      project: "Documentation",
    },
    {
      id: 4,
      title: "Deploy Staging Environment",
      priority: "high",
      status: "todo",
      dueDate: "2025-09-28",
      project: "Kernel Development",
    },
    {
      id: 5,
      title: "User Acceptance Testing",
      priority: "medium",
      status: "in-progress",
      dueDate: "2025-10-10",
      project: "Kernel Development",
    },
    {
      id: 6,
      title: "Implement Security Protocols",
      priority: "high",
      status: "todo",
      dueDate: "2025-10-15",
      project: "Security",
    },
    {
      id: 7,
      title: "Optimize Database Performance",
      priority: "medium",
      status: "in-progress",
      dueDate: "2025-10-20",
      project: "Database",
    },
    {
      id: 8,
      title: "Create API Documentation",
      priority: "low",
      status: "todo",
      dueDate: "2025-10-25",
      project: "Documentation",
    },
    {
      id: 9,
      title: "Conduct Code Review",
      priority: "high",
      status: "todo",
      dueDate: "2025-10-30",
      project: "Quality Assurance",
    },
    {
      id: 10,
      title: "Setup CI/CD Pipeline",
      priority: "medium",
      status: "in-progress",
      dueDate: "2025-11-05",
      project: "DevOps",
    },
    {
      id: 11,
      title: "Implement User Authentication",
      priority: "high",
      status: "todo",
      dueDate: "2025-11-10",
      project: "Security",
    },
    {
      id: 12,
      title: "Design System Architecture",
      priority: "high",
      status: "completed",
      dueDate: "2025-11-15",
      project: "Architecture",
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  create(task: Omit<Task, 'id'>): Task {
    const newTask = { ...task, id: Date.now() };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updatedTask: Partial<Task>): Task | undefined {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex > -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
      return this.tasks[taskIndex];
    }
    return undefined;
  }

  remove(id: number): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
