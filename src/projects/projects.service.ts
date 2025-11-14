import { Injectable } from '@nestjs/common';
import { Project } from './interfaces/project.interface';

@Injectable()
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      status: 'completed',
      startDate: '2023-10-01',
      endDate: '2023-11-15',
      progress: 100,
      repositoryUrl: 'https://github.com/user/portfolio',
      liveUrl: 'https://myportfolio.com',
      linkedTasks: 8,
      linkedResources: 12,
    },
    {
      id: 2,
      title: 'AI Research Assistant',
      status: 'active',
      startDate: '2023-12-01',
      endDate: '2024-03-01',
      progress: 65,
      repositoryUrl: 'https://github.com/user/ai-assistant',
      liveUrl: 'https://ai-assistant.com',
      linkedTasks: 15,
      linkedResources: 8,
    },
    {
      id: 3,
      title: 'Mobile Finance Tracker',
      status: 'planning',
      startDate: '2024-02-01',
      endDate: '2024-06-01',
      progress: 15,
      repositoryUrl: 'https://github.com/user/mobile-finance-tracker',
      liveUrl: 'https://mobile-finance-tracker.com',
      linkedTasks: 3,
      linkedResources: 5,
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-30',
      progress: 45,
      repositoryUrl: 'https://github.com/user/ecommerce',
      liveUrl: 'https://myshop.com',
      linkedTasks: 20,
      linkedResources: 15,
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      status: 'on-hold',
      startDate: '2023-11-01',
      endDate: '2024-04-01',
      progress: 30,
      repositoryUrl: 'https://github.com/user/social-dashboard',
      liveUrl: 'https://social-metrics.com',
      linkedTasks: 12,
      linkedResources: 7,
    },
    {
      id: 6,
      title: 'Machine Learning Model',
      status: 'completed',
      startDate: '2023-09-15',
      endDate: '2024-01-15',
      progress: 100,
      repositoryUrl: 'https://github.com/user/ml-model',
      liveUrl: 'https://ml-predictions.com',
      linkedTasks: 18,
      linkedResources: 25,
    },
    {
      id: 7,
      title: 'Task Management System',
      status: 'archived',
      startDate: '2023-08-01',
      endDate: '2023-12-15',
      progress: 100,
      repositoryUrl: 'https://github.com/user/task-manager',
      liveUrl: 'https://taskflow.com',
      linkedTasks: 10,
      linkedResources: 6,
    },
    {
      id: 8,
      title: 'Weather Forecast App',
      status: 'planning',
      startDate: '2024-03-01',
      endDate: '2024-07-01',
      progress: 5,
      repositoryUrl: 'https://github.com/user/weather-app',
      liveUrl: 'https://weathernow.com',
      linkedTasks: 6,
      linkedResources: 4,
    },
    {
      id: 9,
      title: 'Blockchain Explorer',
      status: 'active',
      startDate: '2024-02-15',
      endDate: '2024-08-15',
      progress: 25,
      repositoryUrl: 'https://github.com/user/blockchain-explorer',
      liveUrl: 'https://chain-explorer.com',
      linkedTasks: 16,
      linkedResources: 20,
    },
    {
      id: 10,
      title: 'Virtual Reality Game',
      status: 'on-hold',
      startDate: '2023-12-15',
      endDate: '2024-06-30',
      progress: 40,
      repositoryUrl: 'https://github.com/user/vr-game',
      liveUrl: 'https://vr-adventure.com',
      linkedTasks: 25,
      linkedResources: 30,
    },
  ];

  findAll(): Project[] {
    return this.projects;
  }

  create(project: Omit<Project, 'id'>): Project {
    const newProject = { ...project, id: Date.now() };
    this.projects.push(newProject);
    return newProject;
  }

  update(id: number, updatedProject: Partial<Project>): Project | undefined {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === id,
    );
    if (projectIndex > -1) {
      this.projects[projectIndex] = {
        ...this.projects[projectIndex],
        ...updatedProject,
      };
      return this.projects[projectIndex];
    }
    return undefined;
  }

  remove(id: number): void {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === id,
    );
    if (projectIndex > -1) {
      this.projects.splice(projectIndex, 1);
    }
  }
}
