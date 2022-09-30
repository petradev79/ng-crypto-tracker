import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
} from '@angular/core';

import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { CoinChart } from 'src/app/models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() chartData!: CoinChart;
  @Input() days!: number;
  @Output() upadateDays = new EventEmitter<number>();

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',
      },
    ],
    labels: [],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1,
      },
    },

    plugins: {
      legend: { display: true },
    },
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart!: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    setTimeout(() => {
      this.myLineChart.chart?.update();
    }, 200);
    this.lineChartData.datasets[0].data = this.chartData.prices.map(
      (a: any) => {
        return a[1];
      }
    );
    this.lineChartData.labels = this.chartData.prices.map((a: any) => {
      let date = new Date(a[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
          : `${date.getHours()}: ${date.getMinutes()} AM`;
      return this.days === 1 ? time : date.toLocaleDateString();
    });
  }

  onUpdateDays(days: number) {
    this.upadateDays.emit(days);
  }
}
