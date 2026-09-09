import { Router } from 'express';
import { CarritoController } from '../controllers/carrito.controller';
import { validarAgregarProducto, validarCantidad } from '../validators/carrito.validator';

const router = Router();
const controller = new CarritoController();

router.get('/', controller.listar.bind(controller));
router.post('/', validarAgregarProducto, controller.agregar.bind(controller));
router.put('/:id', validarCantidad, controller.actualizarCantidad.bind(controller));
router.delete('/:id', controller.eliminar.bind(controller));
router.delete('/', controller.vaciar.bind(controller));

export default router;