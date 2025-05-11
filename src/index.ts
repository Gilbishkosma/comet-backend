import type { CometConfig } from './types/index.js';
import { UsersApi } from './api/users/index.js';
import { MessagesApi } from './api/messages/index.js';
import { GroupsApi } from './api/groups/index.js';

export class CometBackend {
  public users: UsersApi;
  public messages: MessagesApi;
  public groups: GroupsApi;

  constructor(config: CometConfig) {
    this.users = new UsersApi(config);
    this.messages = new MessagesApi(config);
    this.groups = new GroupsApi(config);
  }
}

// Export types
export * from './types/index.js';
