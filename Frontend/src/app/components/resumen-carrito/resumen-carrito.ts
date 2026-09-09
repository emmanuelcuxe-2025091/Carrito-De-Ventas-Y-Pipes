import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CarritoService } from '../../services/carrito.service';
import { ItemCarrito } from '../../models/item-carrito.model';

@Component({
  selector: 'app-resumen-carrito',
  templateUrl: './resumen-carrito.component.html'
})
export class ResumenCarritoComponent implements OnInit {
  carrito$!: Observable<ItemCarrito[]>;
  total$!: Observable<number>;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carrito$ = this.carritoService.carrito$;
    this.total$ = this.carrito$.pipe(
      map(items => items.reduce((acc, item) => acc + item.precio * item.cantidad, 0))
    );
  }

  onCambiarCantidad(id: number, event: Event): void {
    const valor = Number((event.target as HTMLInputElement).value);
    this.carritoService.cambiarCantidad(id, valor);
  }

  onEliminar(id: number): void {
    this.carritoService.eliminarProducto(id);
  }
}