import express from 'express';
import router from '../node_modules/router/index.js'; // ou só 'router' se estiver corretamente instalado

const app = express();

app.use('/', router); // define as rotas

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
