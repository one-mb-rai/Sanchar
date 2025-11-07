import { Component } from '@angular/core';
import { ChatList } from './chat-list/chat-list';
import { ChatWindow } from './chat-window/chat-window';

@Component({
  selector: 'app-root',
  imports: [ChatList, ChatWindow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
