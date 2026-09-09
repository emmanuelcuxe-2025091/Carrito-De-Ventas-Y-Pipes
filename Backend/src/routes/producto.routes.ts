import { Router } from 'express';
import { ProductoController } from '../controllers/producto.controller';

const router = Router();
const controller = new ProductoController();

router.get('/', controller.listar.bind(controller));

export default router;