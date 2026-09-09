import { CarritoRepository } from '../repositories/carrito.repository';
import { ProductoRepository } from '../repositories/producto.repository';
import { ItemCarrito } from '../models/carrito.model';

export class CarritoService {
  private carritoRepo = new CarritoRepository();
  private productoRepo = new ProductoRepository();

  obtenerCarrito(): ItemCarrito[] {
    return this.carritoRepo.findAll();
  }
}