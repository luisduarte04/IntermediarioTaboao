import { Box, Card, Stack, TextField, Button, Typography } from '@mui/material'
import {Link} from 'react-router-dom';
import React from 'react'




export default function Reset() {
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: '#fffaff'}}>
            
      <Card sx={{ width: 400, padding: 3 }}>
        <Stack spacing={2}>
          <img src="/images.jpg" alt="Logo"  style={{width: '100px', height: 'auto', alignSelf: "center"}} />
          <Typography variant="h6" align='center' padding={3}>RESETAR SENHA</Typography>
          <Typography  align='center' padding={1}>Digite seu email para receber um link de redefinição de senha:</Typography>
          <TextField label="email" align='center' >Digite seu email para receber um link de redefinição de senha</TextField>
          <Typography  align="center" component={Link} to="/">Voltar a tela de Login</Typography>
          <Button variant="contained" sx={{ backgroundColor: '#f8240f', '&:hover': { backgroundColor: '#a01208' } }} fullWidth>Enviar Email</Button>
        </Stack>
      </Card>
    </Box>
    

  )
}
