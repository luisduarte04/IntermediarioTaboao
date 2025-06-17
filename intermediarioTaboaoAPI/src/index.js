import express from 'express';
import router from '../node_modules/router/index.js'; 

const app = express();

app.use('/', router); 

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
