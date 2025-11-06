export class CreateResourceDto {
  type: 'files' | 'bookmarks' | 'notes' | 'snippets';
  title: string;
  name?: string;
  url?: string;
  content?: string;
  language?: string;
  lines?: number;
  size?: string;
  tags: string[];
}
