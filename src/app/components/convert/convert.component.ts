import { Component } from '@angular/core';
import { ConvertApiService } from 'src/app/services/convert-api.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {

  from!: string;
  to!: string;
  amount!: number;
  currencies: string[] = ["USD", "ILS","AUD","CAD","CHF","CNY","GBP"];
  result!: any;

  constructor(public convertApiService: ConvertApiService) { }

  convert() {
    this.convertApiService.getData(this.from, this.to, this.amount).subscribe((res: any) => {
      this.result = res.result;
      if (this.result){
        this.convertApiService.histories.push(`From:${this.amount} ${this.from} To: ${this.to} result: ${this.result}`)
      }   
      
    })
  }
}
