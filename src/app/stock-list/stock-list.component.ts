import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service'; // Servis yolunuzu buraya ekleyin
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor,CommonModule],
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockDetails: any[] = [];
  searchCode: string = '';

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  
  }

  searchStock(): void {
    if (this.searchCode) {
      this.stockService.getStockDetails(this.searchCode).subscribe(data => {
        this.stockDetails = data;
      });
    } else {
      this.stockDetails = [];
      
    }
  }
}
