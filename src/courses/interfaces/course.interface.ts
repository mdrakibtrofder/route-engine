export type Course = {
  id: number;
  title: string;
  provider: string;
  instructor: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'planned';
  certificateUrl: string | null;
};
