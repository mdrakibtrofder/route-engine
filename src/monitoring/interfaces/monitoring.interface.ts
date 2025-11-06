export interface ActiveSubscription {
  email: string;
  serviceName: string;
  subscriptions: string[];
}

export interface ApiKey {
  email: string;
  serviceName: string;
  apiKey: string;
}

export interface MonitoringData {
  activeSubscriptions: ActiveSubscription[];
  apiKeys: ApiKey[];
}
