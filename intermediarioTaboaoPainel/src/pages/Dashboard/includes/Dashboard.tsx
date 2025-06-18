import { DialogContent } from '@mui/material'
import { Grid, Stack } from '@mui/system'
import React from 'react'

export default function Dashboard() {
  return (
    <DialogContent>
      <Grid>
        <Stack spacing={2} sx={{ padding: 2, justifyContent: 'center', alignItems: 'center' }}>
          <h1>Dashboard</h1>
          <p>Tela do Dashboard</p>
          <p>Olá Mundo</p>
        </Stack>
      </Grid>
    </DialogContent>
  )
}