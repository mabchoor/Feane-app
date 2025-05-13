import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'MENU', path: '/menu' },
  { name: 'ABOUT', path: '/about' },
  { name: 'BOOK TABLE', path: '/book-table' },
  { name: 'FEEDBACK', path: '/feedback' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center', 
        bgcolor: 'primary.main',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          my: 3, 
          color: 'secondary.main', 
          fontWeight: 700, 
          letterSpacing: 2,
          fontSize: 28,
        }}
      >
        FEANE
      </Typography>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={RouterLink} 
            to={item.path}
            sx={{
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: alpha(theme.palette.secondary.main, 0.1),
              },
            }}
          >
            <ListItemText 
              primary={item.name} 
              sx={{ 
                color: 'white', 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontWeight: location.pathname === item.path ? 700 : 500,
                },
              }} 
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ 
            bgcolor: 'error.main',
            color: 'white',
            fontWeight: 700,
            borderRadius: 2,
            py: 1.5,
            '&:hover': {
              bgcolor: 'error.dark',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Admin Login
        </Button>
      </Box>
    </Box>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}
      >
        <AppBar 
          position="fixed" 
          sx={{ 
            bgcolor: scrolled ? 'primary.main' : 'transparent',
            backdropFilter: scrolled ? 'blur(8px)' : 'none',
            boxShadow: scrolled ? 1 : 0,
            transition: 'all 0.3s ease',
          }}
        >
          <Toolbar 
            sx={{ 
              minHeight: { xs: 70, md: 80 },
              px: { xs: 2, md: 8 },
              transition: 'all 0.3s ease',
            }}
          >
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: scrolled ? 'secondary.main' : 'black',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: 28,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              FEANE
            </Typography>
            {isMobile ? (
              <IconButton 
                color="inherit" 
                aria-label="open drawer" 
                edge="start" 
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? 'white' : 'black',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.secondary.main, 0.1),
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={RouterLink}
                    to={item.path}
                    sx={{ 
                      color: scrolled ? 'white' : 'black',
                      fontWeight: location.pathname === item.path ? 700 : 500,
                      fontSize: 16,
                      letterSpacing: 1,
                      px: 2,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: location.pathname === item.path ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                        width: '80%',
                        height: 2,
                        bgcolor: scrolled ? 'secondary.main' : 'black',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  sx={{ 
                    bgcolor: 'error.main',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: 2,
                    ml: 2,
                    px: 3,
                    py: 1,
                    '&:hover': {
                      bgcolor: 'error.dark',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Admin Login
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              bgcolor: 'primary.main',
            },
          }}
        >
          {drawer}
        </Drawer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar; 