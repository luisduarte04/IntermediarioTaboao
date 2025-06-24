import { Card, Stack, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', email: '', nascimento: '', senha: '' });
  const [mensagem, setMensagem] = useState('');


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  
  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const resp = await axios.post('http://localhost:3000/auth/cadastro', form);
      if (resp.data.sucesso) {
        setMensagem('Usuário cadastrado com sucesso!');
        setForm({ nome: '', email: '', nascimento: '', senha: '' });
      } else {
        setMensagem(resp.data.mensagem || 'Erro ao cadastrar');
      }
    } catch (err) {
      setMensagem(err.response?.data?.mensagem || 'Erro ao cadastrar');
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffaff' }}>
      <Card sx={{ width: 400, padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <img src="/images.jpg" alt="Logo" style={{ width: '100px', height: 'auto', alignSelf: 'center' }} />
            <Typography variant="h5" align="center">Cadastro</Typography>
            <TextField label="Nome Completo" name="nome" value={form.nome} onChange={handleChange} variant="outlined" fullWidth />
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} variant="outlined" fullWidth />
            <TextField label="Data de Nascimento" name="nascimento" type="date" value={form.nascimento} onChange={handleChange} variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
            <TextField label="Senha" name="senha" type="password" value={form.senha} onChange={handleChange} variant="outlined" fullWidth />
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#f8240f', '&:hover': { backgroundColor: '#a01208' } }} fullWidth>Cadastrar</Button>
            <Typography  align="center"  component={Link} to="/">Tela de Login</Typography>
            {mensagem && <Typography align="center" color={mensagem.includes('sucesso') ? 'green' : 'error'}>{mensagem}</Typography>}
          </Stack>
        </form>
      </Card>
    </div>
  );
}