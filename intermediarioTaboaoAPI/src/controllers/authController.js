// src/controllers/authController.js
import bcrypt from 'bcrypt';
import db from '../models/index.js';

const { Cadastro } = db;

// 📝 CADASTRO DE USUÁRIO
const cadastro = async (req, res) => {
  try {
    console.log('📝 Iniciando cadastro de usuário...');
    
    // 1. RECEBER OS DADOS DO FRONTEND
    const { nome, email, nascimento, senha } = req.body;
    
    console.log(`📨 Dados recebidos: ${nome}, ${email}`);
    
    // 2. VALIDAÇÕES BÁSICAS
    if (!nome || !email || !nascimento || !senha) {
      console.log('❌ Dados incompletos');
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Todos os campos são obrigatórios!'
      });
    }
    
    // 3. VERIFICAR SE O EMAIL JÁ EXISTS
    console.log('🔍 Verificando se email já existe...');
    const emailExiste = await Cadastro.findOne({
      where: { email: email }
    });
    
    if (emailExiste) {
      console.log('❌ Email já cadastrado');
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Este email já está cadastrado!'
      });
    }
    
    // 4. CRIPTOGRAFAR A SENHA
    console.log('🔐 Criptografando senha...');
    const saltRounds = 10; // Nível de segurança
    const senhaHash = await bcrypt.hash(senha, saltRounds);
    
    // 5. SALVAR NO BANCO DE DADOS
    console.log('💾 Salvando usuário no banco...');
    const novoUsuario = await Cadastro.create({
      nome: nome,
      email: email,
      nascimento: nascimento,
      senha: senhaHash // Senha criptografada!
    });
    
    console.log(`✅ Usuário criado com ID: ${novoUsuario.id_cadastro}`);
    
    // 6. RETORNAR RESPOSTA DE SUCESSO
    // IMPORTANTE: Não retornar a senha!
    res.status(201).json({
      sucesso: true,
      mensagem: 'Usuário cadastrado com sucesso!',
      usuario: {
        id: novoUsuario.id_cadastro,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        nascimento: novoUsuario.nascimento
        // senha NÃO incluída por segurança!
      }
    });
    
  } catch (error) {
    console.error('❌ Erro no cadastro:', error.message);
    
    // Verificar tipo de erro
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Email já está em uso!'
      });
    }
    
    // Erro genérico do servidor
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno do servidor'
    });
  }
};

// 🔐 LOGIN DE USUÁRIO
const login = async (req, res) => {
  try {
    console.log('🔐 Iniciando login de usuário...');
    
    // 1. RECEBER OS DADOS DO FRONTEND
    const { email, senha } = req.body;
    
    console.log(`📨 Tentativa de login para: ${email}`);
    
    // 2. VALIDAÇÕES BÁSICAS
    if (!email || !senha) {
      console.log('❌ Dados incompletos para login');
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Email e senha são obrigatórios!'
      });
    }
    
    // 3. BUSCAR USUÁRIO NO BANCO PELO EMAIL
    console.log('🔍 Procurando usuário no banco...');
    const usuario = await Cadastro.findOne({
      where: { email: email }
    });
    
    // 4. VERIFICAR SE USUÁRIO EXISTE
    if (!usuario) {
      console.log('❌ Usuário não encontrado');
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Email ou senha incorretos!' // Não especificar qual está errado por segurança
      });
    }
    
    console.log(`✅ Usuário encontrado: ${usuario.nome}`);
    
    // 5. COMPARAR SENHA DIGITADA COM HASH SALVO
    console.log('🔍 Verificando senha...');
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    
    if (!senhaCorreta) {
      console.log('❌ Senha incorreta');
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Email ou senha incorretos!' // Mesma mensagem por segurança
      });
    }
    
    console.log('✅ Senha verificada com sucesso');
    
    // 6. RETORNAR SUCESSO COM DADOS DO USUÁRIO
    res.status(200).json({
      sucesso: true,
      mensagem: 'Login realizado com sucesso!',
      usuario: {
        id: usuario.id_cadastro,
        nome: usuario.nome,
        email: usuario.email,
        nascimento: usuario.nascimento
        // senha NÃO incluída por segurança!
      }
    });
    
    console.log(`✅ Login bem-sucedido para: ${usuario.nome}`);
    
  } catch (error) {
    console.error('❌ Erro no login:', error.message);
    
    // Erro genérico do servidor
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno do servidor'
    });
  }
};

// EXPORTAR AS FUNÇÕES
export default {
  cadastro,
  login
};