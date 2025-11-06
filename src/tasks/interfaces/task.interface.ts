export interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'completed';
  dueDate: string; // ISO string format e.g., "2024-01-15"
  project: string;
}
