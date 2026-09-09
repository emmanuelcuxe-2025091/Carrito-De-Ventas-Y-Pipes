import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemCarrito } from '../models/item-carrito.model';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private apiUrl = 'http://localhost:3000/api/carrito';

  private carritoSubject = new BehaviorSubject<ItemCarrito[]>([]);
  carrito$: Observable<ItemCarrito[]> = this.carritoSubject.asObservable();

  constructor(private http: HttpClient) {
    this.cargarCarrito();
  }

  private cargarCarrito(): void {
    this.http.get<ItemCarrito[]>(this.apiUrl).subscribe(items => {
      this.carritoSubject.next(items);
    });
  }
}