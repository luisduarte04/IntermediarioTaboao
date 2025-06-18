import * as React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
  width?: number;
}

export default function SidebarMenu({ open, onClose, width = 200 }: SidebarProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      PaperProps={{ sx: { width } }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/dashboard" onClick={onClose}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/analytics" onClick={onClose}>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </Drawer>
  );
}