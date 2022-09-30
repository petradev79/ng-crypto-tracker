import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

import { CurrencyService } from '../../services/currency.service';
import { Coin } from 'src/app/models';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
  currency: string = 'USD';
  trendingData: Coin[] = [];
  data: Coin[] = [];

  constructor(
    private httpService: HttpService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.onGetTrendingCurrencies();
    this.onGetAllCurrencies();
    this.currencyService.getCurrency().subscribe((val) => {
      this.currency = val;
      this.onGetAllCurrencies();
      this.onGetTrendingCurrencies();
    });
  }

  onGetTrendingCurrencies() {
    this.httpService.getTrendingCurrencies(this.currency).subscribe((res) => {
      this.trendingData = res;
    });
  }

  onGetAllCurrencies() {
    this.httpService.getAllCurrencies(this.currency).subscribe((res) => {
      this.data = res;
    });
  }
}
