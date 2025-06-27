import { Card, Stack, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:3000/auth/login', form);
      if (resp.data.sucesso) {
        localStorage.setItem('access_token', resp.data.access_token);
        setMensagem('Login realizado com sucesso!');
        setTimeout(() => navigate('/Dashboard'), 1000);
      } else {
        setMensagem(resp.data.mensagem || 'Erro ao fazer login');
      }
    } catch (err) {
      setMensagem(err.response?.data?.mensagem || 'Erro ao fazer login');
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffaff' }}>
      <Card sx={{ width: 400, padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <img src="/images.jpg" alt="Logo" style={{ width: '100px', height: 'auto', alignSelf: 'center' }} />
            <Typography variant="h5" align="center">Login</Typography>
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} variant="outlined" fullWidth />
            <TextField label="Senha" name="senha" type="password" value={form.senha} onChange={handleChange} variant="outlined" fullWidth />
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#f8240f', '&:hover': { backgroundColor: '#a01208' } }} fullWidth>Entrar</Button>
            {mensagem && <Typography align="center" color={mensagem.includes('sucesso') ? 'green' : 'error'}>{mensagem}</Typography>}
            <Typography align="center" component={Link} to="/Reset">Esqueci minha senha</Typography>
            <Typography align="center" component={Link} to="/Cadastro">Cadastro</Typography>
          </Stack>
        </form>
      </Card>
    </div>
  );
}
