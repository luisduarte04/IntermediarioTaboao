import React from 'react'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Box } from '@mui/material'
import Dashboard from './includes/Dashboard'

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header onMenuClick={handleDrawerOpen} />
      <Box display="flex" flex={1}>
        <Sidebar open={open} onClose={handleDrawerClose} width={200} />
        <Box display="flex" flex={1} justifyContent="center" alignItems="flex-start" p={2} >
          <Dashboard />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index