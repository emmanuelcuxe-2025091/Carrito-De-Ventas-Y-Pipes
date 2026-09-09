import { ProductoRepository } from '../repositories/producto.repository';
import { Producto } from '../models/producto.model';

export class ProductoService {
  private repo = new ProductoRepository();

  obtenerProductos(): Producto[] {
    return this.repo.findAll();
  }
}