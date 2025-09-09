import { Component } from '@angular/core';
import { ChatMessage } from '../../model/chat-message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  imports: [CommonModule,FormsModule],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {
  chatMessages = ChatMessage.chatmessages;
  backgroundUrl ='site_background.jpg';
  messageWaitingToSend = "";
  connectedUser: string = "guest"
  public SendChat(){
    ChatMessage.SendChat(this.messageWaitingToSend,this.connectedUser);

    this.messageWaitingToSend = "";
  }
  

}
