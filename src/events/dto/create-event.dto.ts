export class CreateEventDto {
  title: string;
  date: string;
  time: string;
  duration: string;
  type: 'meeting' | 'learning' | 'work' | 'personal';
  location: string;
}
