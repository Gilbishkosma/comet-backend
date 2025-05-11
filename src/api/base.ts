import type {
  CometConfig,
  ApiResponse,
  ErrorResponse,
} from '../types/index.js';

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
      apikey: this.apiKey,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = (await response.json()) as ErrorResponse | T;
      if (!response.ok) {
        const error = (data as ErrorResponse)?.error;
        throw new Error(
          error?.message || error?.devMessage || 'An error occurred'
        );
      }

      return {
        data: data as T,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  }
}
