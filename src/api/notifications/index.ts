import { BaseApiClient } from "../base.js";
import type {
  ApiResponse,
  AppNotificationSettings,
  UserNotificationSettings,
} from "../../types/index.js";

export class NotificationsApi extends BaseApiClient {
  async updateAppSettings(
    settings: AppNotificationSettings,
  ): Promise<ApiResponse<AppNotificationSettings>> {
    return this.request<AppNotificationSettings>("/notifications/v1/settings", {
      method: "PATCH",
      body: JSON.stringify(settings),
    });
  }

  async updateUserPreferences(
    userId: string,
    settings: UserNotificationSettings,
  ): Promise<ApiResponse<UserNotificationSettings>> {
    return this.request<UserNotificationSettings>(
      `/notifications/v1/preferences?uid=${userId}`,
      {
        method: "PATCH",
        body: JSON.stringify(settings),
      },
    );
  }
}
