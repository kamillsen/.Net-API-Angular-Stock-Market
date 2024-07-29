import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app } from '../../server';
import { StockComponent } from './stock/stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StockComponent, StockListComponent,StockChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stock-app';
stockDetails: any;
}
