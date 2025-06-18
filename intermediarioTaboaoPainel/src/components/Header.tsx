import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => (
  <AppBar position="static" color="default" elevation={1}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Dashboard
      </Typography>
      <IconButton><NotificationsIcon /></IconButton>
      <Avatar alt="User" src="/avatar.jpg" />
    </Toolbar>
  </AppBar>
);

export default Header;