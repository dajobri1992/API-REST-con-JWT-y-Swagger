import { Router } from 'express';
const router = Router();

router.post('/login', (req, res) => {
  res.json({ message: "Login exitoso", token: "token-falso-de-prueba" });
});

export default router;
