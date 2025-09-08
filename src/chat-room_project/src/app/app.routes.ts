import { Routes } from '@angular/router';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';

export const routes: Routes = [
    {path: '',component: ChatRoomComponent},
    {path: 'home',component: ChatRoomComponent},
    {path: 'userpanel', component: UserPanelComponent},
    {path: 'adminpanel', component: AdminPanelComponent}
];
