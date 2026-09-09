import { Request, Response } from 'express';
import { CarritoService } from '../services/carrito.service';

const service = new CarritoService();

export class CarritoController {
  listar(req: Request, res: Response): void {
    res.json(service.obtenerCarrito());
  }
}