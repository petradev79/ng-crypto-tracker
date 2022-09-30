import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedCurrency: string = 'USD';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  sendCurrency(event: string) {
    this.currencyService.setCurrency(event);
  }
}
