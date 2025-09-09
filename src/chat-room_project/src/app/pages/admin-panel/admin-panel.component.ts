import { Component } from '@angular/core';
import { ChatMessage } from '../../model/chat-message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-panel',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  
  chatMessages = ChatMessage.chatmessages;
  backgroundUrl ='panel_background.jpg';
  messageWaitingToSend = "";
  connectedUser: string = "Admin"

  public RemoveChat(chatId:number){
    ChatMessage.RemoveChat(chatId);
    this.chatMessages = ChatMessage.chatmessages;
  }

  public SendChat(){
    ChatMessage.SendChat(this.messageWaitingToSend,this.connectedUser);

    this.messageWaitingToSend = "";
  }
}
