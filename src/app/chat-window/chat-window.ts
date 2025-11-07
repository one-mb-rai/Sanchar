import { Component, inject, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat } from '../chat';
import { MessageInput } from '../message-input/message-input';

@Component({
  selector: 'app-chat-window',
  imports: [CommonModule, MessageInput],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer?: ElementRef;
  chatService = inject(Chat);
  private shouldScrollToBottom = false;

  get selectedChat() {
    return this.chatService.getSelectedChat();
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = 
          this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch(err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  formatMessageTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }

  onMessageSent() {
    this.shouldScrollToBottom = true;
  }
}
