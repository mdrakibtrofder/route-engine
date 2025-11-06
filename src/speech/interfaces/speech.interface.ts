export interface Speech {
  id: number;
  title: string;
  script: string;
  categories: string[];
  deliveries: {
    date: string;
    duration: string;
  }[];
}
