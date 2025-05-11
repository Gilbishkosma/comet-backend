export interface CometConfig {
  appId: string;
  region: string;
  apiKey: string;
}

export interface ApiResponse<T> {
  data: T[];
  meta?: Record<string, unknown>;
  error?: ErrorResponse | undefined;
  status: number;
}

export interface CometApiResponse<T> {
  data: T[];
  meta: Record<string, unknown>;
  error?: ErrorResponse;
}

export interface ErrorResponse {
  error: {
    message: string;
    devMessage: string;
    source: string;
    code: string;
  };
}

export interface User {
  uid: string;
  name: string;
  avatar?: string;
  role?: string;
  statusMessage?: string;
  metadata?: Record<string, unknown>;
  tags?: string[];
  withAuthToken?: Boolean;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  type: 'text' | 'image' | 'file';
  createdAt: string;
  updatedAt: string;
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage?: Message;
  createdAt: string;
  updatedAt: string;
}

export interface Group {
  id: string;
  name: string;
  type: 'public' | 'private' | 'password';
  members: string[];
  createdAt: string;
  updatedAt: string;
}
