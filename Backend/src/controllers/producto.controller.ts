import { Request, Response } from 'express';
import { ProductoService } from '../services/producto.service';

const service = new ProductoService();

export class ProductoController {
  listar(req: Request, res: Response): void {
    res.json(service.obtenerProductos());
  }
}