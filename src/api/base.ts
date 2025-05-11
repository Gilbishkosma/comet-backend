import type {
  CometConfig,
  ApiResponse,
  ErrorResponse,
  CometApiResponse,
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

      const responseData = (await response.json()) as
        | ErrorResponse
        | CometApiResponse<T>;
      if (!response.ok) {
        const error = (responseData as ErrorResponse)?.error;
        throw new Error(
          error?.message || error?.devMessage || 'An error occurred'
        );
      }

      return {
        data: (responseData as CometApiResponse<T>).data,
        meta: (responseData as CometApiResponse<T>).meta,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  }
}
