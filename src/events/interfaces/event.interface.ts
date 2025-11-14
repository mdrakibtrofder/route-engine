export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  type: 'meeting' | 'learning' | 'work' | 'personal';
  location: string;
  attendees: number;
};
