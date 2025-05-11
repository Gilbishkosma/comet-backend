export interface CometConfig {
  appId: string;
  region: string;
  apiKey: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
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
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status?: 'online' | 'offline';
  lastActive?: string;
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
