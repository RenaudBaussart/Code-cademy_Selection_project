import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { CommonModule } from '@angular/common';
import { UserDropdownPanelComponent } from './pages/user-dropdown-panel/user-dropdown-panel.component';
import { ConnectionDropdownPanelComponent } from './pages/connection-dropdown-panel/connection-dropdown-panel.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatRoomComponent, CommonModule , UserDropdownPanelComponent , ConnectionDropdownPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-room_project';
  constructor(private router: Router){}

  isDropdownOpen: boolean = false;

  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen + '')
  }
    public goToUserpanel(){
      this.router.navigate(['/userpanel']);
  }
  public goToAdminpanel(){
    this.router.navigate(['/adminpanel']);
  }
  public goTohome(){
    this.router.navigate(['/home'])
  }

}
