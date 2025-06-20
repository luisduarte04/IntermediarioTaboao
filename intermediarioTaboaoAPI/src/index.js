import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js'; 

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// TESTAR CONEXÃO COM BANCO 
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao MySQL com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com MySQL:', error.message);
  }
}

// Chama o teste
testConnection();

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});