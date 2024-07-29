import { Component } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [],
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'] // styleUrl -> styleUrls
})
export class StockComponent {
  constructor(private stockService: StockService) {}

  onFetchStockData() {
    this.stockService.fetchStockData().subscribe({
      next: (response) => {
        console.log('Veriler başarıyla alındı:', response);
      },
      error: (error) => {
        console.error('Veri alma hatası:', error);
      },
      complete: () => {
        console.log('Veri alma işlemi tamamlandı.');
      }
    });
  }
}
