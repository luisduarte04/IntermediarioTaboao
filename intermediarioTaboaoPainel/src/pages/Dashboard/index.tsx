import React from 'react'
//import Dashboard from './includes/Dashboard'
import Sidebar from 'components/Sidebar'  
import Header from 'components/Header'
import Footer from 'components/Footer'  
import { Typography } from '@mui/material';

export default function index() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Typography variant="h4" component="h1" gutterBottom>
          MENU DASHBOARD
        </Typography>
        <Typography variant="body1" gutterBottom>
          Iniciando Dashboard para teste
        </Typography>
      </div>
    <div>
      <Footer /> 
    </div>
    </div>
  )
}
