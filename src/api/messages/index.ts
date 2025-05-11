import { BaseApiClient } from '../base.js';
import type { Message, ApiResponse } from '../../types/index.js';

export class MessagesApi extends BaseApiClient {
  async sendMessage(
    messageData: Partial<Message>
  ): Promise<ApiResponse<Message>> {
    return this.request<Message>('/messages', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  }

  async getMessages(params: {
    chatId?: string;
    userId?: string;
    limit?: number;
    page?: number;
  }): Promise<ApiResponse<Message[]>> {
    const queryParams = new URLSearchParams();
    if (params.chatId) queryParams.append('chatId', params.chatId);
    if (params.userId) queryParams.append('userId', params.userId);
    if (params.limit) queryParams.append('limit', params.limit.toString());
    if (params.page) queryParams.append('page', params.page.toString());

    return this.request<Message[]>(`/messages?${queryParams.toString()}`);
  }

  async deleteMessage(messageId: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/messages/${messageId}`, {
      method: 'DELETE',
    });
  }

  async editMessage(
    messageId: string,
    content: string
  ): Promise<ApiResponse<Message>> {
    return this.request<Message>(`/messages/${messageId}`, {
      method: 'PUT',
      body: JSON.stringify({ content }),
    });
  }
}
