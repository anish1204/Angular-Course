import { Component } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [RoomComponent,NgFor],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {
  rooms=[
    {roomName:"Bedroom",activeDevices:1,usersPresent:5},
    {roomName:"Hall",activeDevices:1,usersPresent:8},
    {roomName:"Drwaing Room",activeDevices:12,usersPresent:6},
    {roomName:"Kitchen",activeDevices:10,usersPresent:4}
  ]
}
