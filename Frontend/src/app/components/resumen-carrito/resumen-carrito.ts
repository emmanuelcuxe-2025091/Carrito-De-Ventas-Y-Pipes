import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoService } from '../../services/carrito.service';
import { ItemCarrito } from '../../models/item-carrito.model';

@Component({
  selector: 'app-resumen-carrito',
  templateUrl: './resumen-carrito.component.html'
})
export class ResumenCarritoComponent implements OnInit {
  carrito$!: Observable<ItemCarrito[]>;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carrito$ = this.carritoService.carrito$;
  }
}