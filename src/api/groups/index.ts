import { BaseApiClient } from '../base.js';
import type { ApiResponse, Group } from '../../types/index.js';

export class GroupsApi extends BaseApiClient {
  async createGroup(groupData: {
    name: string;
    type: Group['type'];
    members?: string[];
    password?: string;
  }): Promise<ApiResponse<Group>> {
    return this.request<Group>('/groups', {
      method: 'POST',
      body: JSON.stringify(groupData),
    });
  }

  async getGroup(groupId: string): Promise<ApiResponse<Group>> {
    return this.request<Group>(`/groups/${groupId}`);
  }

  async updateGroup(
    groupId: string,
    groupData: Partial<Omit<Group, 'id' | 'createdAt' | 'updatedAt'>>
  ): Promise<ApiResponse<Group>> {
    return this.request<Group>(`/groups/${groupId}`, {
      method: 'PUT',
      body: JSON.stringify(groupData),
    });
  }

  async deleteGroup(groupId: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/groups/${groupId}`, {
      method: 'DELETE',
    });
  }

  async addMembers(
    groupId: string,
    members: string[]
  ): Promise<ApiResponse<Group>> {
    return this.request<Group>(`/groups/${groupId}/members`, {
      method: 'POST',
      body: JSON.stringify({ members }),
    });
  }

  async removeMembers(
    groupId: string,
    members: string[]
  ): Promise<ApiResponse<Group>> {
    return this.request<Group>(`/groups/${groupId}/members`, {
      method: 'DELETE',
      body: JSON.stringify({ members }),
    });
  }

  async getGroups(params?: {
    limit?: number;
    page?: number;
  }): Promise<ApiResponse<Group[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.page) queryParams.append('page', params.page.toString());

    return this.request<Group[]>(`/groups?${queryParams.toString()}`);
  }
}
