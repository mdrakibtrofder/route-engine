export class CreateWritingDto {
  title: string;
  platform: string;
  publishDate: string;
  status: 'idea' | 'drafting' | 'published' | 'archived';
  url: string;
  tags: string[];
  excerpt: string;
}
