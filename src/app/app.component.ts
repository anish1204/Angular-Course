import { Component, Input, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DevicesComponent } from './devices/devices.component';
import { DevicelistComponent } from "./devicelist/devicelist.component";
import { RoomListComponent } from './room-list/room-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, DevicesComponent, DevicelistComponent,RoomListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App1';
  data = 10;
}
