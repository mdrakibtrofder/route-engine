export interface Affair {
  id: number;
  title: string;
  details: string;
  source: string;
  link: string;
  summary: string;
  type: 'Political' | 'Economic' | 'Social' | 'Technological';
}
