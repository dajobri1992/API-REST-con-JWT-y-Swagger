import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './auth.routes.js';
import userRoutes from './users.routes.js';
import { validateApiKey } from '../middleware/apikey.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(express.json());
app.use(validateApiKey); // Aplica validación de API Key a todas las rutas de la foto

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

