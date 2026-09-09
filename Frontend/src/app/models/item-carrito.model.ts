import { Producto } from './producto.model';

export interface ItemCarrito extends Producto {
  cantidad: number;
}