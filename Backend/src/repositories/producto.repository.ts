import { Producto } from '../models/producto.model';

// Simula la fuente de datos (reemplazar por ORM/BD si aplica)
const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 150 },
  { id: 2, nombre: 'Mouse', precio: 75 },
  { id: 3, nombre: 'Monitor', precio: 900 }
];

export class ProductoRepository {
  findAll(): Producto[] {
    return productos;
  }

  findById(id: number): Producto | undefined {
    return productos.find(p => p.id === id);
  }
}