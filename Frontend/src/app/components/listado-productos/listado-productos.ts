import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.html'
})
export class ListadoProductosComponent implements OnInit {
  productosDisponibles: Producto[] = [];
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.http.get<Producto[]>(this.apiUrl).subscribe(productos => {
      this.productosDisponibles = productos;
    });
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
  }
}