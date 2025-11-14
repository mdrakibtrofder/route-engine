export type Book = {
  id: number;
  title: string;
  author: string;
  progress: number;
  shelf: BookShelf;
  startDate?: string;
  endDate?: string;
  rating: number | null;
  notes: string;
  quotes: string[];
};

export type BookShelf = 'reading' | 'completed' | 'wishlist';
