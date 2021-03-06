import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderList } from '../models/order-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderContainerService {

  constructor(private http: HttpClient) { }

  gerOrderList(page: number, rows: number):Observable<OrderList[]>{
    
    return this.http.get<OrderList[]>(`${environment.urlService}/order/GetPaginatedOrders/${page}/${rows}`);
  }
}
