import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Chip,
  Stack,
  Grid,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import type { GridProps } from '@mui/material/Grid';
import {
  LocalPizza,
  LunchDining,
  Fastfood,
  LocalBar,
  Spa,
} from '@mui/icons-material';

// Define a type for menu items
interface MenuItem {
  name: string;
  description: string;
  image: string;
  price: number;
  popular?: boolean;
}

const categories = [
  { label: 'Burgers', icon: <Fastfood /> },
  { label: 'Pizzas', icon: <LocalPizza /> },
  { label: 'Sandwiches', icon: <LunchDining /> },
  { label: 'Sides', icon: <Fastfood /> },
  { label: 'Drinks', icon: <LocalBar /> },
  { label: 'Desserts', icon: <Spa /> },
];

const menuData: { [key: string]: MenuItem[] } = {
  Burgers: [
    {
      name: 'Burger Classique',
      description: 'Un burger juteux avec fromage et légumes frais',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 12.99,
      popular: true,
    },
    {
      name: 'Cheese Burger',
      description: 'Burger classique avec cheddar fondant',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 13.99,
    },
    {
      name: 'Double Burger',
      description: 'Deux steaks, double fromage, bacon',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 15.99,
      popular: true,
    },
  ],
  Pizzas: [
    {
      name: 'Margherita',
      description: 'Tomates fraîches, mozzarella, basilic',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 14.99,
    },
    {
      name: 'Pepperoni',
      description: 'Pepperoni classique, fromage extra',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 16.99,
      popular: true,
    },
  ],
  Sandwiches: [
    {
      name: 'Club Sandwich',
      description: 'Poulet, bacon, crudités, pain toasté',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 11.99,
    },
    {
      name: 'BLT',
      description: 'Bacon, laitue, tomate, pain grillé',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 10.99,
    },
  ],
  Sides: [
    {
      name: 'Frites Maison',
      description: 'Frites croustillantes, sel de mer',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 4.99,
    },
    {
      name: 'Onion Rings',
      description: "Rondelles d'oignon croustillantes",
      image: 'https://images.unsplash.com/photo-1626082927389-6cd4f504b4a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 5.99,
    },
  ],
  Drinks: [
    {
      name: 'Limonade Fraîche',
      description: 'Citron pressé, menthe, eau pétillante',
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 3.99,
    },
    {
      name: 'Milkshake Vanille',
      description: 'Milkshake crémeux à la vanille',
      image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 4.99,
    },
  ],
  Desserts: [
    {
      name: 'Gâteau Chocolat',
      description: 'Gâteau moelleux, ganache chocolat',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 6.99,
    },
    {
      name: 'Glace Vanille',
      description: 'Glace vanille, sauce chocolat',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 4.99,
    },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Burgers');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box 
      sx={{ 
        bgcolor: 'background.default', 
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Notre Menu
          </Typography>
        </motion.div>

        <Box 
          sx={{ 
            mb: { xs: 4, md: 6 },
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTabs-root': {
              minHeight: { xs: 48, md: 64 },
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '0.875rem', md: '1rem' },
              minHeight: { xs: 48, md: 64 },
              px: { xs: 2, sm: 3 },
              '&.Mui-selected': {
                color: 'secondary.main',
                fontWeight: 700,
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'secondary.main',
              height: 3,
            },
          }}
        >
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {categories.map((category) => (
              <Tab
                key={category.label}
                value={category.label}
                label={category.label}
                icon={category.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: { xs: 2, sm: 3, md: 4 },
            width: '100%'
          }}
        >
          {menuData[selectedCategory].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => `0 8px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
                  },
                }}
              >
                {item.popular && (
                  <Chip
                    label="Populaire"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'secondary.main',
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      zIndex: 1,
                      boxShadow: (theme) => `0 2px 8px ${alpha(theme.palette.secondary.main, 0.3)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: (theme) => `0 4px 12px ${alpha(theme.palette.secondary.main, 0.4)}`,
                        bgcolor: 'secondary.light',
                      },
                      '& .MuiChip-label': {
                        px: 2,
                        py: 0.5,
                      },
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="280"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    bgcolor: 'background.paper',
                    p: { xs: 2, sm: 3 },
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 1, 
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 2,
                      minHeight: { xs: '3em', sm: '4em' },
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Stack 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="center"
                    spacing={2}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: 'secondary.main', 
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      }}
                    >
                      {item.price}€
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                        fontWeight: 600,
                        px: { xs: 2, sm: 3 },
                        py: 1,
                        '&:hover': {
                          bgcolor: 'secondary.dark',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Commander
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Menu; 