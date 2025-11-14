import { Injectable } from '@nestjs/common';
import { AllResources } from './interfaces/resource.interface';

@Injectable()
export class ResourcesService {
  private readonly resources: AllResources = {
    files: [
      {
        id: 1,
        name: 'System Architecture Design.pdf',
        type: 'PDF',
        size: '2.4 MB',
        modified: '2024-01-10',
        tags: ['architecture', 'design'],
      },
      {
        id: 2,
        name: 'React Best Practices.docx',
        type: 'Document',
        size: '1.2 MB',
        modified: '2024-01-08',
        tags: ['react', 'frontend'],
      },
      {
        id: 3,
        name: 'Project Timeline.xlsx',
        type: 'Spreadsheet',
        size: '3.1 MB',
        modified: '2024-01-15',
        tags: ['project', 'planning'],
      },
      {
        id: 4,
        name: 'API Documentation.md',
        type: 'Markdown',
        size: '856 KB',
        modified: '2024-01-14',
        tags: ['api', 'documentation'],
      },
      {
        id: 5,
        name: 'Database Schema.svg',
        type: 'Image',
        size: '445 KB',
        modified: '2024-01-13',
        tags: ['database', 'architecture'],
      },
    ],
    bookmarks: [
      {
        id: 1,
        title: 'Advanced React Patterns',
        url: 'https://react-patterns.com',
        description: 'Comprehensive guide to React patterns',
        tags: ['react', 'patterns'],
      },
      {
        id: 2,
        title: 'System Design Primer',
        url: 'https://github.com/donnemartin/system-design-primer',
        description: 'Learn system design',
        tags: ['system-design', 'learning'],
      },
      {
        id: 3,
        title: 'TypeScript Handbook',
        url: 'https://www.typescriptlang.org/docs/',
        description: 'Official TypeScript documentation',
        tags: ['typescript', 'documentation'],
      },
      {
        id: 4,
        title: 'Web Performance Guide',
        url: 'https://web.dev/performance',
        description: 'Best practices for web performance',
        tags: ['performance', 'web'],
      },
      {
        id: 5,
        title: 'Cloud Architecture Patterns',
        url: 'https://cloudpatterns.org',
        description: 'Cloud design patterns and solutions',
        tags: ['cloud', 'architecture'],
      },
    ],
    notes: [
      {
        id: 1,
        title: 'Meeting Notes - Project Kickoff',
        content: 'Key decisions and action items...',
        modified: '2024-01-12',
        tags: ['meetings', 'project'],
      },
      {
        id: 2,
        title: 'Learning Notes - TypeScript Generics',
        content: 'Advanced TypeScript generic patterns...',
        modified: '2024-01-09',
        tags: ['typescript', 'learning'],
      },
      {
        id: 3,
        title: 'Architecture Decision Records',
        content: 'System design decisions and rationale...',
        modified: '2024-01-16',
        tags: ['architecture', 'documentation'],
      },
      {
        id: 4,
        title: 'Code Review Guidelines',
        content: 'Team standards for code reviews...',
        modified: '2024-01-15',
        tags: ['process', 'development'],
      },
      {
        id: 5,
        title: 'Performance Optimization Notes',
        content: 'Techniques for improving app performance...',
        modified: '2024-01-14',
        tags: ['performance', 'optimization'],
      },
    ],
    snippets: [
      {
        id: 1,
        title: 'React Custom Hook Template',
        language: 'TypeScript',
        lines: 25,
        modified: '2024-01-11',
        tags: ['react', 'hooks'],
      },
      {
        id: 2,
        title: 'Database Query Optimization',
        language: 'SQL',
        lines: 15,
        modified: '2024-01-07',
        tags: ['sql', 'optimization'],
      },
      {
        id: 3,
        title: 'Authentication Middleware',
        language: 'JavaScript',
        lines: 45,
        modified: '2024-01-16',
        tags: ['auth', 'security'],
      },
      {
        id: 4,
        title: 'Redux Store Configuration',
        language: 'TypeScript',
        lines: 30,
        modified: '2024-01-15',
        tags: ['redux', 'state-management'],
      },
      {
        id: 5,
        title: 'GraphQL Query Builder',
        language: 'TypeScript',
        lines: 55,
        modified: '2024-01-14',
        tags: ['graphql', 'api'],
      },
    ],
  };

  findAll(): AllResources {
    return this.resources;
  }

  // Implement create, update, delete methods for each resource type as needed
}
