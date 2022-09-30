import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';
import { Coin, CoinDetails } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllCurrencies(currency: string) {
    return this.http.get<any>(
      `${env.BASE_URL}/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`
    );
  }

  getTrendingCurrencies(currency: string): Observable<Coin[]> {
    return this.http.get<Coin[]>(
      `${env.BASE_URL}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
  }

  getCurrencyById(coinId: string): Observable<CoinDetails> {
    return this.http.get<CoinDetails>(`${env.BASE_URL}/${coinId}`);
  }

  getGrpahicalCurrencyData(coinId: string, currency: string, days: number) {
    return this.http.get<any>(
      `${env.BASE_URL}/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
    );
  }
}
