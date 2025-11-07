export interface Message {
  id: number;
  text: string;
  timestamp: Date;
  sender: 'me' | 'other';
  status?: 'sent' | 'delivered' | 'read';
}

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  messages: Message[];
}
