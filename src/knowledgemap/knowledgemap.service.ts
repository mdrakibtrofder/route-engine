import { Injectable } from '@nestjs/common';
import { KnowledgeNode } from './interfaces/knowledge-node.interface';

@Injectable()
export class KnowledgeMapService {
  private readonly nodes: KnowledgeNode[] = [
    { id: 1, title: "React", type: "skill", description: "JavaScript library for building user interfaces", relatedNodes: ["JavaScript", "Frontend Development"], category: "Programming" },
    { id: 2, title: "NestJS", type: "tool", description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.", relatedNodes: ["Node.js", "Backend Development"], category: "Programming" },
    { id: 3, title: "Microservices", type: "concept", description: "Architectural style that structures an application as a collection of loosely coupled services", relatedNodes: ["System Design", "Distributed Systems"], category: "Architecture" },
    { id: 4, title: "Docker", type: "tool", description: "Platform for developing, shipping, and running applications in containers", relatedNodes: ["DevOps", "Containerization"], category: "DevOps" },
    { id: 5, title: "Machine Learning", type: "concept", description: "Field of study that gives computers the ability to learn without being explicitly programmed", relatedNodes: ["AI", "Data Science"], category: "AI/ML" },
  ];

  findAll(): KnowledgeNode[] {
    return this.nodes;
  }

  create(node: Omit<KnowledgeNode, 'id'>): KnowledgeNode {
    const newNode = { ...node, id: Date.now() };
    this.nodes.push(newNode);
    return newNode;
  }

  update(id: number, updatedNode: Partial<KnowledgeNode>): KnowledgeNode {
    const nodeIndex = this.nodes.findIndex((node) => node.id === id);
    if (nodeIndex > -1) {
      this.nodes[nodeIndex] = { ...this.nodes[nodeIndex], ...updatedNode };
      return this.nodes[nodeIndex];
    }
    return null;
  }

  remove(id: number): void {
    const nodeIndex = this.nodes.findIndex((node) => node.id === id);
    if (nodeIndex > -1) {
      this.nodes.splice(nodeIndex, 1);
    }
  }
}
