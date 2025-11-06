export class CreateEmailDto {
  email: string;
  category: 'personal' | 'education' | 'office' | 'organizational';
}

export class CreateServiceDto {
  name: string;
  apiKey: string;
  subscriptions: string[];
  llmModelAccess: string[];
}
