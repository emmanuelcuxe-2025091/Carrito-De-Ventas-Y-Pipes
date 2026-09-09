import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemCarrito } from '../models/item-carrito.model';
import { Producto } from '../models/producto.model';

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

  agregarProducto(producto: Producto): void {
    this.http.post<ItemCarrito[]>(this.apiUrl, { id: producto.id })
      .subscribe(items => this.carritoSubject.next(items));
  }

  cambiarCantidad(id: number, cantidad: number): void {
    this.http.put<ItemCarrito[]>(`${this.apiUrl}/${id}`, { cantidad })
      .subscribe(items => this.carritoSubject.next(items));
  }

  eliminarProducto(id: number): void {
    this.http.delete<ItemCarrito[]>(`${this.apiUrl}/${id}`)
      .subscribe(items => this.carritoSubject.next(items));
  }

  vaciarCarrito(): void {
    this.http.delete<ItemCarrito[]>(this.apiUrl)
      .subscribe(items => this.carritoSubject.next(items));
  }
}