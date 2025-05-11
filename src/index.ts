import { CometConfig } from './types';
import { UsersApi } from './api/users';
import { MessagesApi } from './api/messages';
import { GroupsApi } from './api/groups';

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

export * from './types';
export * from './api/groups'; 