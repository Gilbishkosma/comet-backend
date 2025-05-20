import { BaseApiClient } from '../base.js';
import type { ApiResponse, NotificationSettings } from '../../types/index.js';

export class NotificationsApi extends BaseApiClient {
  async updateNotificationSettings(
    settings: NotificationSettings
  ): Promise<ApiResponse<NotificationSettings>> {
    return this.request<NotificationSettings>('/notifications/v1/settings', {
      method: 'PATCH',
      body: JSON.stringify(settings),
    });
  }
}
