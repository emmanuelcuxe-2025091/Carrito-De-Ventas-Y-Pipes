import { Request, Response, NextFunction } from 'express';

export function validarAgregarProducto(req: Request, res: Response, next: NextFunction): void {
  const { id } = req.body;
  if (typeof id !== 'number') {
    res.status(400).json({ error: 'El campo id es requerido y debe ser numérico' });
    return;
  }
  next();
}

export function validarCantidad(req: Request, res: Response, next: NextFunction): void {
  const { cantidad } = req.body;
  if (typeof cantidad !== 'number' || cantidad < 1) {
    res.status(400).json({ error: 'La cantidad debe ser un número mayor o igual a 1' });
    return;
  }
  next();
}