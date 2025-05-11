# Comet Backend SDK

A TypeScript SDK for interacting with the Comet Chat Backend APIs.

## Installation

```bash
npm install comet-backend
```

## Usage

You can import the SDK in two ways:

```typescript
// Using named import
import { CometBackend } from 'comet-backend';

// OR using default import
import CometBackend from 'comet-backend';

// Initialize the SDK
const comet = new CometBackend({
  appId: 'your-app-id',
  region: 'us', // or 'eu', 'in', etc.
  apiKey: 'your-api-key',
});

// User operations
const user = await comet.users.createUser({
  name: 'John Doe',
  email: 'john@example.com',
});

// Message operations
const message = await comet.messages.sendMessage({
  senderId: 'user1',
  receiverId: 'user2',
  content: 'Hello!',
  type: 'text',
});

// Group operations
const group = await comet.groups.createGroup({
  name: 'My Group',
  type: 'public',
  members: ['user1', 'user2'],
});
```

## Features

- TypeScript support with full type definitions
- Modular API structure
- User management
- Message handling
- Group management
- Error handling
- Promise-based API

## API Reference

### Users API

```typescript
// Create a user
comet.users.createUser(userData);

// Get a user
comet.users.getUser(userId);

// Update a user
comet.users.updateUser(userId, userData);

// Delete a user
comet.users.deleteUser(userId);

// List users
comet.users.getUsers({ limit: 10, page: 1 });
```

### Messages API

```typescript
// Send a message
comet.messages.sendMessage(messageData);

// Get messages
comet.messages.getMessages({ chatId: 'chat1', limit: 20 });

// Delete a message
comet.messages.deleteMessage(messageId);

// Edit a message
comet.messages.editMessage(messageId, newContent);
```

### Groups API

```typescript
// Create a group
comet.groups.createGroup(groupData);

// Get a group
comet.groups.getGroup(groupId);

// Update a group
comet.groups.updateGroup(groupId, groupData);

// Delete a group
comet.groups.deleteGroup(groupId);

// Add members to a group
comet.groups.addMembers(groupId, ['user1', 'user2']);

// Remove members from a group
comet.groups.removeMembers(groupId, ['user1']);

// List groups
comet.groups.getGroups({ limit: 10, page: 1 });
```

## Error Handling

The SDK throws errors when API requests fail. You can catch these errors using try-catch blocks:

```typescript
try {
  const user = await comet.users.createUser(userData);
} catch (error) {
  console.error('Failed to create user:', error.message);
}
```

## License

MIT
