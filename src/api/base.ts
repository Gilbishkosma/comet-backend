import { CometConfig, ApiResponse } from '../types';

export class BaseApiClient {
  protected baseUrl: string;
  protected apiKey: string;

  constructor(config: CometConfig) {
    this.baseUrl = `https://${config.appId}.api-${config.region}.cometchat.io/v3`;
    this.apiKey = config.apiKey;
  }

  protected async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  }
} 