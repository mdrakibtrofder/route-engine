import { Injectable } from '@nestjs/common';
import { Writing } from './interfaces/writing.interface';

@Injectable()
export class WritingsService {
  private readonly writings: Writing[] = [
    { id: 1, title: "Building Scalable React Applications", platform: "Medium", publishDate: "2023-12-15", status: "published", url: "https://medium.com/@user/building-scalable-react-apps", tags: ["React", "JavaScript", "Web Development", "Architecture"], excerpt: "A comprehensive guide to building maintainable and scalable React applications using modern patterns and best practices." },
    { id: 2, title: "The Future of AI in Healthcare", platform: "Academic Journal", publishDate: "2024-01-10", status: "published", url: "https://journal.com/ai-healthcare-future", tags: ["AI", "Healthcare", "Machine Learning", "Research"], excerpt: "An analysis of emerging AI technologies and their potential impact on healthcare delivery and patient outcomes." },
    { id: 3, title: "Personal Productivity Systems", platform: "Personal Blog", publishDate: "", status: "drafting", url: "", tags: ["Productivity", "Personal Development", "Time Management"], excerpt: "Exploring different productivity methodologies and how to build a personal system that works." },
    { id: 4, title: "Microservices vs Monoliths", platform: "Dev.to", publishDate: "", status: "idea", url: "", tags: ["Architecture", "Microservices", "Software Design"], excerpt: "A balanced comparison of microservices and monolithic architectures with real-world examples." },
    { id: 5, title: "Cybersecurity Best Practices for Remote Teams", platform: "LinkedIn", publishDate: "2024-02-01", status: "published", url: "https://linkedin.com/pulse/cybersecurity-remote-teams", tags: ["Cybersecurity", "Remote Work", "Security", "Team Management"], excerpt: "Essential security practices and protocols for maintaining data safety in distributed teams." },
    { id: 6, title: "The Rise of Web3 Technologies", platform: "Hashnode", publishDate: "", status: "drafting", url: "", tags: ["Web3", "Blockchain", "Cryptocurrency", "Decentralization"], excerpt: "Exploring the evolution of web technologies and the potential impact of decentralized systems." },
    { id: 7, title: "Machine Learning Model Deployment Strategies", platform: "Dev.to", publishDate: "2024-01-25", status: "published", url: "https://dev.to/user/ml-deployment", tags: ["Machine Learning", "DevOps", "MLOps", "Deployment"], excerpt: "A practical guide to deploying and maintaining machine learning models in production environments." },
    { id: 8, title: "Understanding TypeScript Generic Types", platform: "Medium", publishDate: "", status: "idea", url: "", tags: ["TypeScript", "Programming", "JavaScript", "Web Development"], excerpt: "Deep dive into TypeScript's generic types system and advanced type manipulation techniques." },
    { id: 9, title: "Sustainable Software Engineering", platform: "Conference Paper", publishDate: "", status: "drafting", url: "", tags: ["Green Computing", "Sustainability", "Software Engineering", "Environment"], excerpt: "Investigating practices and methodologies for developing environmentally conscious software solutions." },
    { id: 10, title: "API Design Principles and Best Practices", platform: "Personal Blog", publishDate: "2024-02-15", status: "published", url: "https://blog.com/api-design-principles", tags: ["API", "REST", "Backend", "Architecture"], excerpt: "Comprehensive guide to designing robust and developer-friendly APIs with real-world examples." },
    { id: 11, title: "The Psychology of User Experience", platform: "Medium", publishDate: "", status: "idea", url: "", tags: ["UX", "Psychology", "Design", "User Research"], excerpt: "Exploring the psychological principles behind effective user experience design and interaction patterns." }
  ];

  findAll(): Writing[] {
    return this.writings;
  }

  create(writing: Omit<Writing, 'id'>): Writing {
    const newWriting = { ...writing, id: Date.now() };
    this.writings.push(newWriting);
    return newWriting;
  }

  update(id: number, updatedWriting: Partial<Writing>): Writing {
    const writingIndex = this.writings.findIndex((writing) => writing.id === id);
    if (writingIndex > -1) {
      this.writings[writingIndex] = { ...this.writings[writingIndex], ...updatedWriting };
      return this.writings[writingIndex];
    }
    return null;
  }

  remove(id: number): void {
    const writingIndex = this.writings.findIndex((writing) => writing.id === id);
    if (writingIndex > -1) {
      this.writings.splice(writingIndex, 1);
    }
  }
}
