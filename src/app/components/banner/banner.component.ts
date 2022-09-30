import { Component, Input, OnInit } from '@angular/core';

import { Coin } from 'src/app/models';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() data!: Coin[];

  constructor() {}

  ngOnInit(): void {}
}
