import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onMenuClick: (event: React.MouseEvent) => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <IconButton color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <Avatar src="/avatar.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;