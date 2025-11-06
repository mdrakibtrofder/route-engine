import { Injectable } from '@nestjs/common';
import { Reading } from './interfaces/reading.interface';

@Injectable()
export class ReadingsService {
  private readonly readings: Reading[] = [
    {
      id: 1,
      title: "Understanding TypeScript Generics",
      source: "Medium",
      link: "https://medium.com/typescript-generics",
      notes: "Great introduction to TypeScript generics with practical examples",
      date: "2024-03-15T10:00:00Z",
      duration: "15m",
      categories: ["TypeScript", "Programming"]
    },
    {
      id: 2,
      title: "React Performance Optimization",
      source: "Website",
      link: "https://reactjs.org/performance",
      notes: "Deep dive into React rendering and optimization techniques",
      date: "2024-03-14T09:30:00Z",
      duration: "25m",
      categories: ["React", "Performance"]
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      source: "LinkedIn",
      link: "https://linkedin.com/css-modern",
      notes: "Overview of new CSS features and best practices",
      date: "2024-03-13T14:20:00Z",
      duration: "20m",
      categories: ["CSS", "Web Development"]
    },
    {
      id: 4,
      title: "JavaScript Design Patterns",
      source: "Medium",
      link: "https://medium.com/js-patterns",
      notes: "Common design patterns in JavaScript applications",
      date: "2024-03-12T11:15:00Z",
      duration: "30m",
      categories: ["JavaScript", "Architecture"]
    },
    {
      id: 5,
      title: "Web Accessibility Guidelines",
      source: "Website",
      link: "https://web.dev/accessibility",
      notes: "WCAG guidelines and implementation strategies",
      date: "2024-03-11T16:45:00Z",
      duration: "40m",
      categories: ["Accessibility", "Web Development"]
    },
    {
      id: 6,
      title: "State Management in 2024",
      source: "Facebook",
      link: "https://facebook.com/tech/state-management",
      notes: "Comparison of modern state management solutions",
      date: "2024-03-10T13:30:00Z",
      duration: "35m",
      categories: ["React", "State Management"]
    },
    {
      id: 7,
      title: "GraphQL Best Practices",
      source: "Medium",
      link: "https://medium.com/graphql-practices",
      notes: "Tips for building scalable GraphQL APIs",
      date: "2024-03-09T08:20:00Z",
      duration: "45m",
      categories: ["GraphQL", "API"]
    },
    {
      id: 8,
      title: "Micro-Frontend Architecture",
      source: "LinkedIn",
      link: "https://linkedin.com/micro-frontends",
      notes: "Implementation strategies for micro-frontends",
      date: "2024-03-08T15:10:00Z",
      duration: "50m",
      categories: ["Architecture", "Web Development"]
    },
    {
      id: 9,
      title: "Docker for Frontend Developers",
      source: "Website",
      link: "https://docker.com/frontend-guide",
      notes: "Getting started with Docker in frontend development",
      date: "2024-03-07T12:00:00Z",
      duration: "28m",
      categories: ["Docker", "DevOps"]
    },
    {
      id: 10,
      title: "Testing React Applications",
      source: "Medium",
      link: "https://medium.com/react-testing",
      notes: "Comprehensive guide to testing React components",
      date: "2024-03-06T09:45:00Z",
      duration: "32m",
      categories: ["React", "Testing"]
    },
    {
      id: 11,
      title: "Web Security Fundamentals",
      source: "LinkedIn",
      link: "https://linkedin.com/web-security",
      notes: "Essential security concepts for web developers",
      date: "2024-03-05T14:15:00Z",
      duration: "55m",
      categories: ["Security", "Web Development"]
    },
    {
      id: 12,
      title: "Next.js 14 Features",
      source: "Website",
      link: "https://nextjs.org/features",
      notes: "Overview of new features in Next.js 14",
      date: "2024-03-04T10:30:00Z",
      duration: "22m",
      categories: ["Next.js", "React"]
    }
  ];

  findAll(): Reading[] {
    return this.readings;
  }

  create(reading: Omit<Reading, 'id'>): Reading {
    const newReading = { ...reading, id: Date.now() };
    this.readings.push(newReading);
    return newReading;
  }

  update(id: number, updatedReading: Partial<Reading>): Reading {
    const readingIndex = this.readings.findIndex((reading) => reading.id === id);
    if (readingIndex > -1) {
      this.readings[readingIndex] = { ...this.readings[readingIndex], ...updatedReading };
      return this.readings[readingIndex];
    }
    return null;
  }

  remove(id: number): void {
    const readingIndex = this.readings.findIndex((reading) => reading.id === id);
    if (readingIndex > -1) {
      this.readings.splice(readingIndex, 1);
    }
  }
}
