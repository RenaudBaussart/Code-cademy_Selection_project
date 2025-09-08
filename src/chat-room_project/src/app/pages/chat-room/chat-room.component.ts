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
  backgroundUrl ='site_background.jpg';
  isDropdownOpen:boolean = false;

  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen + '')
  }
  //to make test
  chatMessages:Array<ChatMessage> = [ new ChatMessage(1, 'Alice', 'Bonjour à tous !'),
    new ChatMessage(2, 'Bob', 'Salut Alice !'),
    new ChatMessage(null, 'Charlie', 'Bienvenue sur le chat.')];


  //end of test
}
