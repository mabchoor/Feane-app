import { Box, Container, Typography, IconButton, Link, useTheme } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Book Table', path: '/book-table' },
    { name: 'Feedback', path: '/feedback' },
  ];

  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com' },
    { icon: <Twitter />, url: 'https://twitter.com' },
    { icon: <Instagram />, url: 'https://instagram.com' },
    { icon: <LinkedIn />, url: 'https://linkedin.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 8, md: 10 },
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={false} sx={{ 
        width: '100%',
        px: { xs: 2, sm: 3, md: 4 },
        mx: 0,
      }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: 6, md: 8 },
        }}>
          {/* Restaurant Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main', fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
              FEANE
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Experience the finest dining with our carefully crafted menu and exceptional service.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main', fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateX(5px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main', fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                123 Restaurant Street
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                City, State 12345
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                Phone: (123) 456-7890
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                Email: info@feane.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
            © {new Date().getFullYear()} Feane Restaurant. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 