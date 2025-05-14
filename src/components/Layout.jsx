import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  People as PeopleIcon,
  Dashboard as DashboardIcon,
  Help as HelpIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  AdminPanelSettings as AdminIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const drawerWidth = 240;

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Profiles', icon: <PeopleIcon />, path: '/' },
    { text: 'Admin Dashboard', icon: <DashboardIcon />, path: '/admin' },
  ];

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" component="div" className="font-poppins">
          MapApp
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                className: 'font-inter',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src="/logo.png" // Add your logo image
              alt="ProfileHub"
              sx={{ height: 32 }}
            />
          </Box>

          {/* Navigation */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                color: location.pathname === '/' ? 'primary.main' : 'text.secondary',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/profiles"
              startIcon={<PersonIcon />}
              sx={{
                color: location.pathname === '/profiles' ? 'primary.main' : 'text.secondary',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Profiles
            </Button>
            <Button
              component={Link}
              to="/admin"
              startIcon={<AdminIcon />}
              sx={{
                color: location.pathname === '/admin' ? 'primary.main' : 'text.secondary',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Admin
            </Button>
          </Box>

          {/* Help Icon */}
          <Box>
            <Button
              startIcon={<HelpIcon />}
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Need help?
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px',
          bgcolor: 'background.default',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </Box>
    </Box>
  );
}

export default Layout; 