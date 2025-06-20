// src/test-controller.js
import authController from './controllers/authController.js';

// Simular uma requisição HTTP
const mockReq = {
  body: {
    nome: 'João Silva',
    email: 'joao.teste@email.com',
    nascimento: '1990-05-15',
    senha: '123456789'
  }
};

// Simular uma resposta HTTP
const mockRes = {
  status: function(code) {
    this.statusCode = code;
    console.log(`📊 Status Code: ${code}`);
    return this;
  },
  json: function(data) {
    this.data = data;
    console.log('📤 Resposta enviada:');
    console.log(JSON.stringify(data, null, 2));
    return this;
  }
};

async function testarCadastro() {
  try {
    console.log('🧪 TESTANDO FUNÇÃO DE CADASTRO');
    console.log('=====================================');
    console.log('📨 Dados de teste:', mockReq.body);
    console.log('\n🔄 Executando função de cadastro...\n');
    
    // Executar a função de cadastro
    await authController.cadastro(mockReq, mockRes);
    
    console.log('\n✅ Teste concluído!');
    console.log(`📊 Status final: ${mockRes.statusCode}`);
    
  } catch (error) {
    console.error('❌ Erro durante o teste:', error.message);
  } finally {
    // Fechar conexão do banco
    const { default: db } = await import('./models/index.js');
    await db.sequelize.close();
    console.log('\n🔐 Conexão fechada');
  }
}

// Executar o teste
testarCadastro();