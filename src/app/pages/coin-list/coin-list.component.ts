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
  bannerData: Coin[] = [];
  data: Coin[] = [];

  constructor(
    private httpService: HttpService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.getBannerData();
    this.getAllData();
    this.currencyService.getCurrency().subscribe((val) => {
      this.currency = val;
      this.getAllData();
      this.getBannerData();
    });
  }

  getBannerData() {
    this.httpService.getTrendingCurrency(this.currency).subscribe((res) => {
      this.bannerData = res;
    });
  }

  getAllData() {
    this.httpService.getCurrency(this.currency).subscribe((res) => {
      this.data = res;
    });
  }
}
