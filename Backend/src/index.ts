import express from 'express';
import cors from 'cors';

import productoRoutes from './routes/producto.routes';
import carritoRoutes from './routes/carrito.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});