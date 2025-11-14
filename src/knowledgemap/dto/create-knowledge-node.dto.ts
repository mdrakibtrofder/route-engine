export class CreateKnowledgeNodeDto {
  title: string;
  type: 'concept' | 'skill' | 'tool' | 'project' | 'person' | 'resource';
  description: string;
  relatedNodes: string[];
  category: string;
}
