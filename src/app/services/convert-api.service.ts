import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertApiService {

  histories:string[]=[];

  constructor(public httpClient: HttpClient) { }

  getData(from: string, to: string, amount: number) {

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'apikey': `rMLCXjk4cMalHnmyMj1fLnKOBH30B5Aj`
      });

    const requestOptions = { headers: headers };

    return this.httpClient.get(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,requestOptions)
  }
}
