export class CreateBookDto {
  title: string;
  author: string;
  shelf: 'reading' | 'completed' | 'wishlist';
  startDate?: string;
  notes: string;
}
