import { Component, Input, OnInit } from '@angular/core';

import { CurrencyService } from 'src/app/services/currency.service';
import { Coin } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() coin!: Coin;
  currency!: string;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((val) => {
      this.currency = val;
    });
  }
}
