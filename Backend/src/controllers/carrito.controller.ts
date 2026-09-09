import { Request, Response } from 'express';
import { CarritoService } from '../services/carrito.service';

const service = new CarritoService();

export class CarritoController {
  listar(req: Request, res: Response): void {
    res.json(service.obtenerCarrito());
  }

  agregar(req: Request, res: Response): void {
    try {
      const { id } = req.body;
      const carrito = service.agregarProducto(id);
      res.status(201).json(carrito);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  actualizarCantidad(req: Request, res: Response): void {
    try {
      const id = Number(req.params.id);
      const { cantidad } = req.body;
      const carrito = service.cambiarCantidad(id, cantidad);
      res.json(carrito);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  eliminar(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const carrito = service.eliminarProducto(id);
    res.json(carrito);
  }

  vaciar(req: Request, res: Response): void {
    const carrito = service.vaciarCarrito();
    res.json(carrito);
  }
}