import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat } from '../chat';

@Component({
  selector: 'app-chat-list',
  imports: [CommonModule],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  chatService = inject(Chat);

  get chats() {
    return this.chatService.getChats();
  }

  get selectedChat() {
    return this.chatService.getSelectedChat();
  }

  selectChat(chatId: number) {
    this.chatService.selectChat(chatId);
  }

  formatTime(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return date.toLocaleDateString();
    } else if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return 'Just now';
    }
  }
}
