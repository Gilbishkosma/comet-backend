import type {
  CometConfig,
  ApiResponse,
  ErrorResponse,
  CometApiResponse,
} from "../types/index.js";

export class BaseApiClient {
  protected baseUrl: string;
  protected apiKey: string;

  constructor(config: CometConfig) {
    this.baseUrl = `https://${config.appId}.api-${config.region}.cometchat.io/v3`;
    this.apiKey = config.apiKey;
  }

  protected async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      apikey: this.apiKey,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const responseData = await response.json();
      return {
        data: (responseData as CometApiResponse<T>)?.data,
        meta: (responseData as CometApiResponse<T>)?.meta,
        error: (responseData as CometApiResponse<T>)?.error,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  }
}
