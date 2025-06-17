import { Box, Card, Grid, Stack, TextField, Button, Typography } from '@mui/material'
import React from 'react'

export default function Login() {
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 400, padding: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h5" align="center">Login</Typography>
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Senha" type="password" variant="outlined" fullWidth />
          <Button variant="contained" color="primary" fullWidth>Entrar</Button>
        </Stack>
      </Card>
    </Box>
    
  )
}
