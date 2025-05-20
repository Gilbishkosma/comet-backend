import { BaseApiClient } from '../base.js';
import type { ApiResponse } from '../../types/index.js';

export interface NotificationSettings {
  preferences?: {
    bypassPreferencesForMentions?: boolean;
    group?: Record<string, any>;
    oneOnOne?: Record<string, any>;
    mute?: Record<string, any>;
    email?: Record<string, any>;
    sms?: Record<string, any>;
  };
  sound?: Record<string, any>;
  templates?: Record<string, any>;
}

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
