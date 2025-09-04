import { Component } from '@angular/core';
import { ChatMessage } from '../../model/chat-message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-room',
  imports: [CommonModule],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {
  //to make test
  chatMessages:Array<ChatMessage> = [ new ChatMessage(1, 'Alice', 'Bonjour à tous !'),
    new ChatMessage(2, 'Bob', 'Salut Alice !'),
    new ChatMessage(null, 'Charlie', 'Bienvenue sur le chat.')];


  //end of test
}
