import { Card, Stack, TextField, Button, Typography} from '@mui/material'
import {Link} from 'react-router-dom';
import React from 'react'

export default function Login() {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffaff' }}>
      <Card sx={{ width: 400, padding: 3 }}>
        <Stack spacing={2}>
          <img src="/images.jpg" alt="Logo"  style={{width: '100px', height: 'auto', alignSelf: "center"}} />
          <Typography variant="h5" align="center">Login</Typography>
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Senha" type="password" variant="outlined" fullWidth />
          <Button variant="contained" component={Link} to="/Dashboard" sx={{ backgroundColor: '#f8240f', '&:hover': { backgroundColor: '#a01208' } }} fullWidth>Entrar</Button>
          <Typography align="center" component={Link} to="/Reset"  >Esqueci minha senha</Typography>
        </Stack>
      </Card>
    </div>
    
  )
}
