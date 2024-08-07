import { Component } from '@angular/core';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent {
    product={
      deviceName: "TV",
      deviceStatus: false,
      deviceType:"Basic"
    }
    onNameChange(event:any){
     this.product.deviceName ='Mark';
      console.log(event.target.value); 
    }
    onButtonChange()
    {
      this.product.deviceStatus = !this.product.deviceStatus;
    }
}
