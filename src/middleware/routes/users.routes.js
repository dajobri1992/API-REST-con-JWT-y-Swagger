import { Router } from 'express';
import prisma from '../lib/prisma.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = Router();

// Obtener todos los usuarios (Ruta protegida)
router.get('/', authenticateToken, async (req, res) => {
  try {
    // Si no tienes DB conectada aún, puedes comentar esto y mandar un array vacío
    const users = await prisma.user.findMany(); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
