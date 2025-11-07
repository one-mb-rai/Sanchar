import { Injectable, signal } from '@angular/core';
import { Chat as ChatModel, Message } from './models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class Chat {
  private chats = signal<ChatModel[]>([
    {
      id: 1,
      name: 'Alice Johnson',
      avatar: '👩',
      lastMessage: 'Hey! How are you doing?',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
      unreadCount: 2,
      messages: [
        {
          id: 1,
          text: 'Hi there!',
          timestamp: new Date(Date.now() - 1000 * 60 * 10),
          sender: 'other',
          status: 'read'
        },
        {
          id: 2,
          text: 'Hello! How are you?',
          timestamp: new Date(Date.now() - 1000 * 60 * 8),
          sender: 'me',
          status: 'read'
        },
        {
          id: 3,
          text: 'Hey! How are you doing?',
          timestamp: new Date(Date.now() - 1000 * 60 * 5),
          sender: 'other',
          status: 'delivered'
        }
      ]
    },
    {
      id: 2,
      name: 'Bob Smith',
      avatar: '👨',
      lastMessage: 'See you tomorrow!',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 30),
      unreadCount: 0,
      messages: [
        {
          id: 1,
          text: 'Are we still meeting tomorrow?',
          timestamp: new Date(Date.now() - 1000 * 60 * 35),
          sender: 'other',
          status: 'read'
        },
        {
          id: 2,
          text: 'Yes, at 3 PM!',
          timestamp: new Date(Date.now() - 1000 * 60 * 32),
          sender: 'me',
          status: 'read'
        },
        {
          id: 3,
          text: 'See you tomorrow!',
          timestamp: new Date(Date.now() - 1000 * 60 * 30),
          sender: 'other',
          status: 'read'
        }
      ]
    },
    {
      id: 3,
      name: 'Carol White',
      avatar: '👧',
      lastMessage: 'Thanks for your help!',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
      unreadCount: 0,
      messages: [
        {
          id: 1,
          text: 'Can you help me with this?',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
          sender: 'other',
          status: 'read'
        },
        {
          id: 2,
          text: 'Sure! What do you need?',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2.5),
          sender: 'me',
          status: 'read'
        },
        {
          id: 3,
          text: 'Thanks for your help!',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
          sender: 'other',
          status: 'read'
        }
      ]
    },
    {
      id: 4,
      name: 'David Brown',
      avatar: '🧑',
      lastMessage: 'Let me know when you\'re free',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
      unreadCount: 1,
      messages: [
        {
          id: 1,
          text: 'Let me know when you\'re free',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
          sender: 'other',
          status: 'delivered'
        }
      ]
    }
  ]);

  private selectedChatId = signal<number | null>(null);

  getChats() {
    return this.chats();
  }

  getSelectedChat() {
    const chatId = this.selectedChatId();
    if (chatId === null) return null;
    return this.chats().find(chat => chat.id === chatId) || null;
  }

  selectChat(chatId: number) {
    this.selectedChatId.set(chatId);
    // Mark messages as read
    const chats = this.chats();
    const chatIndex = chats.findIndex(c => c.id === chatId);
    if (chatIndex !== -1) {
      const updatedChats = [...chats];
      updatedChats[chatIndex] = {
        ...updatedChats[chatIndex],
        unreadCount: 0
      };
      this.chats.set(updatedChats);
    }
  }

  sendMessage(text: string) {
    const chatId = this.selectedChatId();
    if (chatId === null || !text.trim()) return;

    const chats = this.chats();
    const chatIndex = chats.findIndex(c => c.id === chatId);
    if (chatIndex !== -1) {
      const newMessage: Message = {
        id: chats[chatIndex].messages.length + 1,
        text: text.trim(),
        timestamp: new Date(),
        sender: 'me',
        status: 'sent'
      };

      const updatedChats = [...chats];
      updatedChats[chatIndex] = {
        ...updatedChats[chatIndex],
        messages: [...updatedChats[chatIndex].messages, newMessage],
        lastMessage: text.trim(),
        lastMessageTime: new Date()
      };
      this.chats.set(updatedChats);
    }
  }
}
