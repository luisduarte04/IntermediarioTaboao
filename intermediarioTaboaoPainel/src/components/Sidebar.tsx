import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Insights";
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer open={false} variant="persistent" anchor="left">
      <Toolbar />
      <List>
        <ListItem button   component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText  primary="Dashboard"  />
        </ListItem>
        <ListItem button  component={Link} to="/analytics">
          <ListItemIcon><AnalyticsIcon /></ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;