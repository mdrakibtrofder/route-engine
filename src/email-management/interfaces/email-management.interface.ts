export interface Service {
  id: string;
  name: string;
  apiKey: string;
  subscriptions: string[];
  llmModelAccess: string[];
}

export interface EmailData {
  email: string;
  services: Service[];
}

export interface EmailCategory {
  personal: EmailData[];
  education: EmailData[];
  office: EmailData[];
  organizational: EmailData[];
}
