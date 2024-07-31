import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StockService } from '../stock.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-stock-chart',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HighchartsChartModule ],
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Stock Prices'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      title: {
        text: 'Last Price'
      }
    },
    series: [{
      type: 'line',
      data: []
    }]
  };
  apiUrlStock = 'https://localhost:7218/api/Stock';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStockDetails('AKBANK').subscribe(data => {
      const chartData = data.map(item => [
        new Date(item.date).getTime(), item.lastPrice
      ]);
      this.chartOptions.series = [{
        type: 'line',
        data: chartData
      }];
      Highcharts.chart('container', this.chartOptions);
    });
  }

  getStockDetails(code: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlStock}/GetStockDetails/${"adel"}`).pipe(
      map(response => response.map(item => ({
        date: new Date(item.date).getTime(),
        lastPrice: item.lastPrice
      })))
    );
  }
}