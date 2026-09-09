import { ItemCarrito } from '../models/carrito.model';

let carrito: ItemCarrito[] = [];

export class CarritoRepository {
  findAll(): ItemCarrito[] {
    return carrito;
  }

  findById(id: number): ItemCarrito | undefined {
    return carrito.find(item => item.id === id);
  }

  agregarOIncrementar(item: ItemCarrito): ItemCarrito[] {
    const existente = carrito.find(i => i.id === item.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push(item);
    }
    return carrito;
  }

  actualizarCantidad(id: number, cantidad: number): ItemCarrito[] {
    const item = carrito.find(i => i.id === id);
    if (item) {
      item.cantidad = cantidad;
    }
    return carrito;
  }

  eliminar(id: number): ItemCarrito[] {
    carrito = carrito.filter(i => i.id !== id);
    return carrito;
  }

  vaciar(): ItemCarrito[] {
    carrito = [];
    return carrito;
  }
}