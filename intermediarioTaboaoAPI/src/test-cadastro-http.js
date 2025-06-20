// src/test-cadastro-http.js
async function testarCadastroHTTP() {
  try {
    console.log('🧪 TESTANDO CADASTRO VIA HTTP');
    console.log('=====================================');
    
    // Dados para cadastro
    const dadosUsuario = {
      nome: 'Maria Santos',
      email: 'maria.santos@email.com',
      nascimento: '1995-08-20',
      senha: 'minhasenha123'
    };
    
    console.log('📨 Enviando dados:', dadosUsuario);
    console.log('\n🔄 Fazendo requisição POST...\n');
    
    // Fazer requisição HTTP
    const response = await fetch('http://localhost:3000/auth/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosUsuario)
    });
    
    // Verificar status da resposta
    console.log(`📊 Status da resposta: ${response.status}`);
    
    // Ler a resposta
    const resultado = await response.json();
    
    // Mostrar resultado
    if (response.ok) {
      console.log('✅ CADASTRO REALIZADO COM SUCESSO!');
      console.log('📤 Resposta do servidor:');
      console.log(JSON.stringify(resultado, null, 2));
    } else {
      console.log('❌ ERRO NO CADASTRO:');
      console.log('📤 Resposta do servidor:');
      console.log(JSON.stringify(resultado, null, 2));
    }
    
  } catch (error) {
    console.error('❌ Erro na requisição:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Dica: Verifique se o servidor está rodando na porta 3000');
    }
  }
}

// Executar o teste
testarCadastroHTTP();