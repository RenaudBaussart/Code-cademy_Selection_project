import { Component } from '@angular/core';
import { ChatMessage } from '../../model/chat-message';
import { CommonModule } from '@angular/common';
import { ConnectionDropdownPanelComponent } from '../connection-dropdown-panel/connection-dropdown-panel.component';

@Component({
  selector: 'app-chat-room',
  imports: [CommonModule,ConnectionDropdownPanelComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {
  chatMessages = ChatMessage.chatmessages;
  backgroundUrl ='site_background.jpg';
  
  

}
