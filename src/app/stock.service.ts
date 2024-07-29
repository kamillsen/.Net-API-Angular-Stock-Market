import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'https://localhost:7218/api/Hisse'; // C# API'nizin URL'sini buraya ekleyin
  private apiUrlStock ='https://localhost:7218/api/Stock';
  constructor(private http: HttpClient) {}

  fetchStockData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

    getStockDetails(code: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrlStock}/GetStockDetails/${code}`);
    }
}
