import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor, NgIf, NgStyle } from '@angular/common';
@Component({
  selector: 'app-devicelist',
  standalone: true,
  imports: [SearchComponent,NgFor,NgIf,NgStyle],
  templateUrl: './devicelist.component.html',
  styleUrl: './devicelist.component.scss'
})
export class DevicelistComponent {
    data = [
      {
        "brand": "LENOVO",
        "name": "",
        "device": "AD681H",
        "model": "Smartfren Andromax AD681H"
      },
      {
        "brand": "NIKE",
        "name": "",
        "device": "FJL21",
        "model": "FJL21"
      },
      {
        "brand": "LENOVO",
        "name": "",
        "device": "hws7721g",
        "model": "MediaPad 7 Youth 2"
      },
      {
        "brand": "NIKE",
        "name": "1&1 Puck",
        "device": "diw362_1u1",
        "model": "DIW362P 1U1"
      },
      {
        "brand": "LENOVO",
        "name": "1&1 TV Box",
        "device": "diw387_1u1",
        "model": "DIW387 1U1"
      },
      {
        "brand": "NIKE",
        "name": "DIW387-1&1",
        "device": "diw387_1u1",
        "model": "DIW387 1U1"
      }
    ]
}
