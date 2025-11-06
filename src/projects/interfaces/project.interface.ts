export type Project = {
  id: number;
  title: string;
  status: "planning" | "active" | "on-hold" | "completed" | "archived";
  startDate: string;
  endDate: string;
  progress: number;
  repositoryUrl: string;
  liveUrl: string;
  linkedTasks: number;
  linkedResources: number;
};
