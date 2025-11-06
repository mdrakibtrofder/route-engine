import { Injectable } from '@nestjs/common';
import { Idea } from './interfaces/idea.interface';

@Injectable()
export class IdeasService {
  private readonly ideas: Idea[] = [
    { id: 1, title: "AI-Powered Code Review Tool", description: "Develop an intelligent code review system that can automatically detect patterns, suggest improvements, and provide architectural insights.", researchArea: "Software Engineering", status: "planning", impact: "high", effort: "high", hypothesis: "AI can significantly improve code quality and reduce review time for development teams", tags: ["AI", "Code Review", "Software Engineering"] },
    { id: 2, title: "Personal Knowledge Graph Visualizer", description: "Create an interactive visualization system for personal knowledge networks, connecting ideas, concepts, and learning resources.", researchArea: "Knowledge Management", status: "validating", impact: "medium", effort: "medium", hypothesis: "Visual knowledge graphs can improve learning retention and idea connection", tags: ["Knowledge Management", "Visualization", "Learning"] },
    { id: 3, title: "Smart Meeting Scheduler with Context", description: "Intelligent scheduling system that considers project context, participant expertise, and optimal timing for productive meetings.", researchArea: "Productivity", status: "inbox", impact: "medium", effort: "low", hypothesis: "Context-aware scheduling can improve meeting productivity and reduce conflicts", tags: ["Productivity", "Scheduling", "AI"] },
    { id: 4, title: "Blockchain-Based Supply Chain Tracker", description: "Create a transparent supply chain tracking system using blockchain technology to ensure product authenticity and traceability.", researchArea: "Blockchain", status: "planning", impact: "high", effort: "high", hypothesis: "Blockchain can improve supply chain transparency and reduce fraud", tags: ["Blockchain", "Supply Chain", "Security"] },
    { id: 5, title: "Emotion-Aware Music Recommender", description: "Develop a music recommendation system that considers user's emotional state and context to suggest appropriate tracks.", researchArea: "Machine Learning", status: "validating", impact: "medium", effort: "medium", hypothesis: "Context-aware music recommendations can improve user satisfaction and emotional wellbeing", tags: ["ML", "Music", "Emotion Recognition"] },
    { id: 6, title: "Sustainable Energy Optimizer", description: "Build an AI-powered system to optimize energy consumption in buildings using IoT sensors and weather predictions.", researchArea: "IoT", status: "in-progress", impact: "high", effort: "medium", hypothesis: "Smart energy optimization can reduce consumption by 30% in commercial buildings", tags: ["IoT", "Energy", "Sustainability"] },
    { id: 7, title: "AR Learning Assistant", description: "Create an augmented reality platform for interactive learning experiences in STEM subjects.", researchArea: "Education Technology", status: "inbox", impact: "high", effort: "high", hypothesis: "AR-based learning can improve student engagement and understanding of complex concepts", tags: ["AR", "Education", "STEM"] },
    { id: 8, title: "Health Data Privacy Framework", description: "Develop a secure framework for sharing medical data while maintaining patient privacy using homomorphic encryption.", researchArea: "Healthcare IT", status: "planning", impact: "high", effort: "high", hypothesis: "Privacy-preserving data sharing can accelerate medical research without compromising patient confidentiality", tags: ["Privacy", "Healthcare", "Security"] },
    { id: 9, title: "Natural Language Database Query", description: "Build a system that converts natural language questions into database queries for non-technical users.", researchArea: "Natural Language Processing", status: "validating", impact: "medium", effort: "medium", hypothesis: "Natural language interfaces can democratize data access in organizations", tags: ["NLP", "Database", "AI"] },
    { id: 10, title: "Decentralized Identity Platform", description: "Create a self-sovereign identity system using blockchain for secure and portable digital identities.", researchArea: "Blockchain", status: "in-progress", impact: "high", effort: "high", hypothesis: "Decentralized identity management can reduce identity theft and improve privacy", tags: ["Blockchain", "Identity", "Security"] }
  ];

  findAll(): Idea[] {
    return this.ideas;
  }

  create(idea: Omit<Idea, 'id'>): Idea {
    const newIdea = { ...idea, id: Date.now() };
    this.ideas.push(newIdea);
    return newIdea;
  }

  update(id: number, updatedIdea: Partial<Idea>): Idea {
    const ideaIndex = this.ideas.findIndex((idea) => idea.id === id);
    if (ideaIndex > -1) {
      this.ideas[ideaIndex] = { ...this.ideas[ideaIndex], ...updatedIdea };
      return this.ideas[ideaIndex];
    }
    return null;
  }

  remove(id: number): void {
    const ideaIndex = this.ideas.findIndex((idea) => idea.id === id);
    if (ideaIndex > -1) {
      this.ideas.splice(ideaIndex, 1);
    }
  }
}
