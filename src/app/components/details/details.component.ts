import { Component, Input, OnInit } from '@angular/core';
import { CoinDetails } from 'src/app/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() data!: CoinDetails;
  @Input() currency!: string;

  constructor() {}

  ngOnInit(): void {}
}
