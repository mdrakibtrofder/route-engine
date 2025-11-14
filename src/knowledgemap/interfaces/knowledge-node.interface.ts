export interface KnowledgeNode {
  id: number;
  title: string;
  type: 'concept' | 'skill' | 'tool' | 'project' | 'person' | 'resource';
  description: string;
  relatedNodes: string[];
  category: string;
}
