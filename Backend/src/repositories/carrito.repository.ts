import { ItemCarrito } from '../models/carrito.model';

let carrito: ItemCarrito[] = [];

export class CarritoRepository {
  findAll(): ItemCarrito[] {
    return carrito;
  }

  findById(id: number): ItemCarrito | undefined {
    return carrito.find(item => item.id === id);
  }

  save(items: ItemCarrito[]): void {
    carrito = items;
  }
}