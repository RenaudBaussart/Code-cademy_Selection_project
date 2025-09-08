import { Component } from '@angular/core';
import { ChatMessage } from '../../model/chat-message';

@Component({
  selector: 'app-admin-panel',
  imports: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  chatMessages = ChatMessage.chatmessages;
  backgroundUrl ='panel_background.jpg';
}
