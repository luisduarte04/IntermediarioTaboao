// src/index.js
import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import authRoutes from './routes/authRoutes.js';  

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

// CONECTAR AS ROTAS DE AUTENTICAÇÃO
app.use('/auth', authRoutes);  

// TESTAR CONEXÃO COM BANCO 
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao MySQL com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com MySQL:', error.message);
  }
}
testConnection();
 


// Rota de teste (manter para verificar se o servidor funciona)
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});



app.get('/routes', (req, res) => {
  res.json({
    message: 'Rotas disponíveis:',
    routes: [
      'GET  / - Teste da API',
      'GET  /routes - Esta listagem',
      'POST /auth/cadastro - Cadastrar usuário'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Cadastro disponível em: http://localhost:${PORT}/auth/cadastro`);
});