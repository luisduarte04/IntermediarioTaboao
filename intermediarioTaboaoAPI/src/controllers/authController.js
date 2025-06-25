import bcrypt from 'bcrypt';
import db from '../../models/index.js';

const { Cadastro } = db;

const cadastro = async (req, res) => {
  try {
    
    //  receber dados do front 
    const { nome, email, nascimento, senha } = req.body;
    
    
    if (!nome || !email || !nascimento || !senha) {
      console.log('Dados incompletos');
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Todos os campos são obrigatórios!'
      });
    }

    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    if (!validarEmail(email)) {
      console.log('Email inválido');
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Formato de email inválido!'
      });
    }
    
    console.log('Verificando se email já existe...');
    const emailExiste = await Cadastro.findOne({
      where: { email: email }
    });
    
    if (emailExiste) {
      console.log('Email já cadastrado');
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Este email já está cadastrado!'
      });
    }
    
    console.log('Criptografando senha...');
    const saltRounds = 10; 
    const senhaHash = await bcrypt.hash(senha, saltRounds);
    


    const novoUsuario = await Cadastro.create({
      nome: nome,
      email: email,
      nascimento: nascimento,
      senha: senhaHash 
    });
    
    console.log(`Usuário criado `);
    

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
    console.error(' Erro no cadastro:', error.message);
    

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Email já está em uso!'
      });
    }

    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno do servidor'
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    
    console.log(`Tentativa de login para: ${email}`);
    
    if (!email || !senha) {
      console.log('Dados incompletos para login');
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Email e senha são obrigatórios!'
      });
    }
    
    console.log('Procurando usuário no banco...');
    const usuario = await Cadastro.findOne({
      where: { email: email }
    });
    
    // VERIFICAR SE USUÁRIO EXISTE
    if (!usuario) {
      console.log('Usuário não encontrado');
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Email ou senha incorretos!' 
      });
    }
    
    console.log(`Usuário encontrado: ${usuario.nome}`);
     
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    
    if (!senhaCorreta) {
      console.log('Senha incorreta');
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Email ou senha incorretos!' 
      });
    }
    
    console.log('Senha verificada com sucesso');
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Login realizado com sucesso!',
      usuario: {
        id: usuario.id_cadastro,
        nome: usuario.nome,
        email: usuario.email,
        nascimento: usuario.nascimento
      }
    });
    
    console.log(`Login bem-sucedido para: ${usuario.nome}`);
    
  } catch (error) {
    console.error('Erro no login:', error.message);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno do servidor'
    });
  }
};

export default {
  cadastro,
  login
};
//
