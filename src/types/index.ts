export interface CometConfig {
  appId: string;
  region: string;
  apiKey: string;
}

export interface ApiResponse<T> {
  data: T[];
  meta?: Record<string, unknown>;
  error?: ErrorResponse | undefined;
  status: number;
}

export interface CometApiResponse<T> {
  data: T[];
  meta: Record<string, unknown>;
  error?: ErrorResponse;
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
  uid: string;
  name: string;
  avatar?: string;
  role?: string;
  statusMessage?: string;
  metadata?: Record<string, unknown>;
  tags?: string[];
  withAuthToken?: Boolean;
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

export interface AppNotificationSettings {
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

export interface OneOnOnePreferences {
  oneOnOneMessages?: 1 | 2 | 3;
  oneOnOneReplies?: 1 | 2 | 3;
  oneOnOneReactions?: 1 | 2 | 3;
}

export interface MutePreferences {
  dnd?: 1 | 2;
}

export interface GroupPreferences {
  groupMessages?: 1 | 2 | 3;
  groupReplies?: 1 | 2 | 3;
  groupReactions?: 1 | 2 | 3;
  groupMemberLeft?: 1 | 2;
  groupMemberAdded?: 1 | 2;
  groupMemberJoined?: 1 | 2;
  groupMemberKicked?: 1 | 2;
  groupMemberBanned?: 1 | 2;
  groupMemberUnbanned?: 1 | 2;
  groupMemberScopeChanged?: 1 | 2;
}

export interface UserNotificationSettings {
  groupPreferences?: GroupPreferences;
  oneOnOnePreferences?: OneOnOnePreferences;
  mutePreferences?: MutePreferences;
  schedule?: Record<string, any>;
  usePrivacyTemplate?: boolean;
}
