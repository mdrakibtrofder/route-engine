export class CreateScheduleDto {
  time: string;
  title: string;
  type: 'Deep Work' | 'Meetings' | 'Learning' | 'Admin';
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}
