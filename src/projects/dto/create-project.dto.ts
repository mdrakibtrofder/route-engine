export class CreateProjectDto {
  title: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'archived';
  startDate: string;
  endDate: string;
  repositoryUrl: string;
  liveUrl: string;
}
