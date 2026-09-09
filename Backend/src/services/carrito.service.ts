import { CarritoRepository } from '../repositories/carrito.repository';
import { ProductoRepository } from '../repositories/producto.repository';
import { ItemCarrito } from '../models/carrito.model';

export class CarritoService {
  private carritoRepo = new CarritoRepository();
  private productoRepo = new ProductoRepository();

  obtenerCarrito(): ItemCarrito[] {
    return this.carritoRepo.findAll();
  }

  agregarProducto(idProducto: number): ItemCarrito[] {
    const producto = this.productoRepo.findById(idProducto);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    const nuevoItem: ItemCarrito = { ...producto, cantidad: 1 };
    return this.carritoRepo.agregarOIncrementar(nuevoItem);
  }

  cambiarCantidad(id: number, cantidad: number): ItemCarrito[] {
    const item = this.carritoRepo.findById(id);
    if (!item) {
      throw new Error('Item no encontrado en el carrito');
    }
    return this.carritoRepo.actualizarCantidad(id, cantidad);
  }

  eliminarProducto(id: number): ItemCarrito[] {
    return this.carritoRepo.eliminar(id);
  }

  vaciarCarrito(): ItemCarrito[] {
    return this.carritoRepo.vaciar();
  }
}