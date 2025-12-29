# Comet Chat Backend SDK

```
    🔰 I am working on this library, not all the methods are available right now as WIP.
    Feel free to create an issue, i will add a method on the same day if its urgent.
    Thanks. 🔰
```

A TypeScript SDK for interacting with [Comet Chat](https://www.cometchat.com/)'s backend APIs.

## Installation

```bash
npm install comet-backend
```

## Usage

```typescript
import { CometBackend } from 'comet-backend';

const comet = new CometBackend({
  appId: 'YOUR_APP_ID',
  region: 'YOUR_REGION',
  apiKey: 'YOUR_API_KEY'
});

// Create a user
const response = await comet.users.createUser({
  uid: 'user123',
  name: 'John Doe'
});

// Response structure
{
  data: T[];           // Array of data items
  meta?: {            // Optional metadata
    [key: string]: unknown;
  };
  error?: {           // Optional error information
    message: string;
    devMessage: string;
    source: string;
    code: string;
  };
  status: number;     // HTTP status code
}
```

## Features

- User Management

  - Create users
  - Get user details
  - Update users
  - Delete users
  - List users

- Message Management

  - Send messages
  - Get message history
  - Delete messages

- Group Management
  - Create groups
  - Get group details
  - Update groups
  - Delete groups
  - List groups

## API Reference

### Users API

```typescript
// Create a user
comet.users.createUser({
  uid: string;
  name: string;
  avatar?: string;
  role?: string;
  statusMessage?: string;
  metadata?: Record<string, unknown>;
  tags?: string[];
  withAuthToken?: boolean;
});

// Get user details
comet.users.getUser(userId: string);

// Update user
comet.users.updateUser(userId: string, userData: Partial<User>);

// Delete user
comet.users.deleteUser(userId: string);

// List users
comet.users.getUsers(params?: {
  limit?: number;
  page?: number;
});
```

### Messages API

```typescript
// Send a message
comet.messages.sendMessage({
  receiver: string;
  receiverType: 'user' | 'group';
  category: 'message'| 'custom';
  type: 'text' | 'image' | 'file' | 'audio' | 'video';
  data: {
    text?: string;
    url?: string;
    file?: string;
    metadata?: Record<string, any>;
    [key: string]: any;
  };
  muid?: string;
  quotedMessageId?: string;
  tags?: string[];
  multipleReceivers?: {
    uids?: string[];
    guids?: string[];
  };
});

// Get message history
comet.messages.getMessages(params?: {
  limit?: number;
  page?: number;
});
```

### Groups API

```typescript
// Create a group
comet.groups.createGroup({
  name: string;
  type: 'public' | 'private' | 'password';
  members: string[];
});

// Get group details
comet.groups.getGroup(groupId: string);

// Update group
comet.groups.updateGroup(groupId: string, groupData: Partial<Group>);

// Delete group
comet.groups.deleteGroup(groupId: string);

// List groups
comet.groups.getGroups(params?: {
  limit?: number;
  page?: number;
});
```

## License

MIT
