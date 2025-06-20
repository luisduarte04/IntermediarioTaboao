// src/test-db.js
import db from './models/index.js';

const { Cadastro, Resetar } = db;

async function testarBanco() {
  try {
    console.log('🔄 Iniciando teste do banco de dados...\n');
    
    // 1. TESTAR CONEXÃO
    await db.sequelize.authenticate();
    console.log('✅ Conexão com MySQL estabelecida!\n');
    
    // 2. VERIFICAR TABELA CADASTRO
    console.log('📊 VERIFICANDO TABELA CADASTRO:');
    console.log('=====================================');
    
    const totalUsuarios = await Cadastro.count();
    console.log(`📈 Total de usuários cadastrados: ${totalUsuarios}`);
    
    if (totalUsuarios > 0) {
      console.log('\n👥 Usuários encontrados:');
      const usuarios = await Cadastro.findAll({
        attributes: ['id_cadastro', 'nome', 'email', 'nascimento'], // Não mostrar senha
        limit: 5 // Máximo 5 registros
      });
      
      usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. ID: ${usuario.id_cadastro} | Nome: ${usuario.nome} | Email: ${usuario.email} | Nascimento: ${usuario.nascimento}`);
      });
    } else {
      console.log('❌ Nenhum usuário encontrado na tabela Cadastro');
    }
    
    // 3. VERIFICAR TABELA RESETAR
    console.log('\n\n📊 VERIFICANDO TABELA RESETAR:');
    console.log('=====================================');
    
    const totalResets = await Resetar.count();
    console.log(`📈 Total de tokens de reset: ${totalResets}`);
    
    if (totalResets > 0) {
      console.log('\n🔑 Tokens encontrados:');
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
      console.log('❌ Nenhum token de reset encontrado');
    }
    
    // 4. VERIFICAR RELACIONAMENTOS
    console.log('\n\n🔗 TESTANDO RELACIONAMENTOS:');
    console.log('=====================================');
    
    if (totalUsuarios > 0) {
      const usuarioComResets = await Cadastro.findOne({
        include: [{
          model: Resetar,
          as: 'resets'
        }]
      });
      
      if (usuarioComResets) {
        console.log(`✅ Relacionamento funcionando! Usuário "${usuarioComResets.nome}" tem ${usuarioComResets.resets.length} token(s) de reset`);
      } else {
        console.log('⚠️  Relacionamento configurado, mas nenhum usuário com tokens encontrado');
      }
    }
    
    console.log('\n🎉 Teste concluído com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro durante o teste:', error.message);
    console.error('Detalhes:', error);
  } finally {
    // Fechar conexão
    await db.sequelize.close();
    console.log('\n🔐 Conexão com banco fechada');
  }
}

// Executar o teste
testarBanco();