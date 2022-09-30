import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoinChart, CoinDetails } from 'src/app/models';

import { CurrencyService } from '../../services/currency.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss'],
})
export class CoinDetailComponent implements OnInit {
  coinData!: CoinDetails;
  coinId!: string;
  currency: string = 'USD';
  days: number = 30;
  chartData!: CoinChart;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.coinId = val['id'];
    });
    this.onGetCurrencyById();
    this.onGetGrpahicalCurrencyData();
    this.currencyService.getCurrency().subscribe((val) => {
      this.currency = val;
      this.onGetGrpahicalCurrencyData();
      this.onGetCurrencyById();
    });
  }

  onGetCurrencyById() {
    this.httpService.getCurrencyById(this.coinId).subscribe((res) => {
      this.coinData = res;
    });
  }

  onGetUpdatedDays(days: number) {
    this.days = days;
    this.onGetGrpahicalCurrencyData();
  }

  onGetGrpahicalCurrencyData() {
    this.httpService
      .getGrpahicalCurrencyData(this.coinId, this.currency, this.days)
      .subscribe((res) => {
        this.chartData = res;
      });
  }
}
