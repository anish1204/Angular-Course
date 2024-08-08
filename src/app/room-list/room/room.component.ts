import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  roomno=Math.ceil(Math.random() + Math.random());

@Input() item:{roomName:any,activeDevices:number,usersPresent:number}={roomName:'',activeDevices:0,usersPresent:0};
}
