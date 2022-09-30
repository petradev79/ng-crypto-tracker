import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';
import { Coin } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCurrency(currency: string) {
    return this.http.get<any>(
      `${env.BASE_URL}/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`
    );
  }
  getTrendingCurrency(currency: string): Observable<Coin[]> {
    return this.http.get<Coin[]>(
      `${env.BASE_URL}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
  }
  // getGrpahicalCurrencyData(coinId: string, currency: string, days: number) {
  //   return this.http.get<any>(
  //     `${env.BASE_URL}/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
  //   );
  // }
  // getCurrencyById(coinId: string) {
  //   return this.http.get<any>(`${env.BASE_URL}/${coinId}`);
  // }
}
