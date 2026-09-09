import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'subtotal' })
export class SubtotalPipe implements PipeTransform {
  transform(precio: number, cantidad: number): number {
    if (precio == null || cantidad == null) return 0;
    return precio * cantidad;
  }
}