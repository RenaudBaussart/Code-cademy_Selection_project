import { Component } from '@angular/core';

@Component({
  selector: 'app-connection-dropdown-panel',
  imports: [],
  templateUrl: './connection-dropdown-panel.component.html',
  styleUrl: './connection-dropdown-panel.component.scss'
})
export class ConnectionDropdownPanelComponent {
  connectionTypePanelSelector:string = 'connection';
  

  public connectionTypeSelectInscription(){
    this.connectionTypePanelSelector = 'inscription'
  }
  public connectionTypeSelectConnection(){
    this.connectionTypePanelSelector = 'connection'
  }

}
