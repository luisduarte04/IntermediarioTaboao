import { Box, Card, Stack, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Reset() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:3000/auth/reset', { email });
      if (resp.data.sucesso) {
        setMensagem('Email de redefinição enviado!');
      } else {
        setMensagem(resp.data.mensagem || 'Erro ao enviar email');
      }
    } catch (err: any) {
      setMensagem(err.response?.data?.mensagem || 'Erro ao enviar email');
    }
  }

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffaff' }}>
      <Card sx={{ width: 400, padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <img src="/images.jpg" alt="Logo" style={{ width: '100px', height: 'auto', alignSelf: 'center' }} />
            <Typography variant="h6" align='center' padding={3}>RESETAR SENHA</Typography>
            <Typography align='center' padding={1}>Digite seu email para receber um link de redefinição de senha:</Typography>
            <TextField label="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" fullWidth />
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#f8240f', '&:hover': { backgroundColor: '#a01208' } }} fullWidth>Enviar Email</Button>
            {mensagem && <Typography align="center" color={mensagem.includes('enviado') ? 'green' : 'error'}>{mensagem}</Typography>}
            <Typography align="center" component={Link} to="/">Voltar a tela de Login</Typography>
          </Stack>
        </form>
      </Card>
    </Box>
  );
}
