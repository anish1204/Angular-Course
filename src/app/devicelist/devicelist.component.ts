import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-devicelist',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './devicelist.component.html',
  styleUrl: './devicelist.component.scss'
})
export class DevicelistComponent {

}
