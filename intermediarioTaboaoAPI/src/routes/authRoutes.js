// src/routes/authRoutes.js
import { Router } from 'express';
import authController from '../controllers/authController.js';

// Criar o roteador
const router = Router();

// 📝 ROTA DE CADASTRO
// POST /auth/cadastro
router.post('/cadastro', authController.cadastro);

// 🔐 ROTA DE LOGIN
router.post('/login', authController.login);

// 🔄 ROTA DE RESET DE SENHA (vamos criar depois)
// router.post('/reset-senha', authController.resetSenha);

console.log('✅ Rotas de autenticação carregadas');

export default router;