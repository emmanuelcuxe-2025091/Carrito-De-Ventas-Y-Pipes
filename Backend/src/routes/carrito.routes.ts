import { Router } from 'express';
import { CarritoController } from '../controllers/carrito.controller';

const router = Router();
const controller = new CarritoController();

router.get('/', controller.listar.bind(controller));

export default router;