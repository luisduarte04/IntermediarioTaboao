// src/test-db.js
import db from './models/index.js';

const { Cadastro, Resetar } = db;

async function testarBanco() {
  try {
    console.log('Iniciando teste do banco de dados...\n');
    
    await db.sequelize.authenticate();
    console.log('Conexão com MySQL estabelecida!\n');
    
    
    const totalUsuarios = await Cadastro.count();
    console.log(`Total de usuários cadastrados: ${totalUsuarios}`);
    
    if (totalUsuarios > 0) {
      console.log('\n Usuários encontrados:');
      const usuarios = await Cadastro.findAll({
        attributes: ['id_cadastro', 'nome', 'email', 'nascimento'], 
        limit: 5 
      });
      
      usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. ID: ${usuario.id_cadastro} | Nome: ${usuario.nome} | Email: ${usuario.email} | Nascimento: ${usuario.nascimento}`);
      });
    } else {
      console.log('Nenhum usuário encontrado na tabela Cadastro');
    }
    

    
    const totalResets = await Resetar.count();
    console.log(`Total de tokens de reset: ${totalResets}`);
    
    if (totalResets > 0) {
      console.log('\nTokens encontrados:');
      const resets = await Resetar.findAll({
        limit: 5,
        include: [{
          model: Cadastro,
          as: 'usuario',
          attributes: ['nome', 'email']
        }]
      });
      
      resets.forEach((reset, index) => {
        console.log(`${index + 1}. ID: ${reset.id_reset} | Usuário: ${reset.usuario.nome} | Usado: ${reset.usado ? 'Sim' : 'Não'} | Criado: ${reset.criado_em}`);
      });
    } else {
      console.log('Nenhum token de reset encontrado');
    }
    
    if (totalUsuarios > 0) {
      const usuarioComResets = await Cadastro.findOne({
        include: [{
          model: Resetar,
          as: 'resets'
        }]
      });
      
      if (usuarioComResets) {
        console.log(`Relacionamento funcionando, Usuário "${usuarioComResets.nome}" tem ${usuarioComResets.resets.length} token(s) de reset`);
      } else {
        console.log('Relacionamento configurado, mas nenhum usuário com tokens encontrado');
      }
    }
    
    console.log('Teste concluído com sucesso!');
    
  } catch (error) {
    console.error('Erro durante o teste:', error.message);
    console.error('Detalhes:', error);
  } finally {
    await db.sequelize.close();
    console.log('Conexão com banco fechada');
  }
}
testarBanco();