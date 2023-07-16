import { Component } from '@angular/core';
import { ConvertApiService } from 'src/app/services/convert-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  histories: string[] = [];

  constructor(public convertApi: ConvertApiService) {

  }

  ngOnInit() {
    this.histories = this.convertApi.histories;
  }
}
