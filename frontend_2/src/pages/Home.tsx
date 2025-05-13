import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Grid,
  useTheme,
  useMediaQuery,
  TextField,
  InputAdornment,
  Avatar,
  Rating,
  Chip
} from '@mui/material';
import {
  Restaurant,
  LocalDining as LocalDiningIcon,
  EmojiFoodBeverage,
  AccessTime,
  Search as SearchIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const featuredItems = [
  {
    title: 'Burger Classique',
    description: 'Un burger juteux avec fromage et légumes frais',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: '12€',
  },
  {
    title: 'Frites Maison',
    description: 'Frites croustillantes au fromage fondu',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: '6€',
  },
  {
    title: 'Pizza Gourmande',
    description: 'Pizza artisanale avec sauce tomate et mozzarella',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    price: '14€',
  },
];

const features = [
  {
    icon: <Restaurant sx={{ fontSize: 40 }} />,
    title: 'Cuisine Fraîche',
    description: 'Ingrédients locaux et de saison',
  },
  {
    icon: <LocalDiningIcon sx={{ fontSize: 40 }} />,
    title: 'Service Premium',
    description: 'Une expérience gastronomique unique',
  },
  {
    icon: <EmojiFoodBeverage sx={{ fontSize: 40 }} />,
    title: 'Boissons Sélectionnées',
    description: 'Vins et cocktails d\'exception',
  },
  {
    icon: <AccessTime sx={{ fontSize: 40 }} />,
    title: 'Ouvert 7/7',
    description: 'De 11h à 23h',
  },
];

interface Feedback {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  image: string;
  verified: boolean;
}

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const [feedbacks] = useState<Feedback[]>([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing experience! The food was delicious and the service was exceptional.",
      date: "2024-03-15",
      image: "https://i.pravatar.cc/150?img=1",
      verified: true
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Great atmosphere and wonderful staff. Will definitely come back!",
      date: "2024-03-14",
      image: "https://i.pravatar.cc/150?img=2",
      verified: true
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 5,
      comment: "Best restaurant in town! The menu is diverse and everything tastes amazing.",
      date: "2024-03-13",
      image: "https://i.pravatar.cc/150?img=3",
      verified: true
    }
  ]);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100vw',
          minHeight: { xs: '60vh', md: '70vh' },
          backgroundImage: 'url(https://www.fod.ma/assets/img/restaurants/casa/02.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 6, md: 8 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 2
            }}
          >
            Welcome to FEANE
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              mb: 4
            }}
          >
            Experience fine dining, exquisite flavors, and a memorable atmosphere.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              fontWeight: 700,
              borderRadius: 8,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: 3,
              textTransform: 'none',
              mt: 2
            }}
            onClick={() => navigate('/booktable')}
          >
            Reserve Table
          </Button>
        </Box>
      </Box>
      {/* White gradient fade below hero section */}
      <Box
        sx={{
          width: '100vw',
          height: 80,
          mt: -8,
          position: 'relative',
          zIndex: 10,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.01) 0%, #fff 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Featured Items */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 8 },
            color: 'primary.main',
          }}
        >
          Nos Spécialités
        </Typography>
        <Grid container spacing={4}>
          {featuredItems.map((item, index) => (
            <Grid component="div" item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
                    <Typography variant="h5" sx={{ mb: 1, color: 'primary.main' }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: 'secondary.main', fontWeight: 700 }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid component="div" item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 2,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'secondary.main', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Feedbacks Section */}
      <Box sx={{ 
        width: '100%',
        py: { xs: 6, md: 8 },
        bgcolor: 'background.default'
      }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            What Our Customers Say
          </Typography>

          <Grid container spacing={4}>
            {feedbacks.map((feedback, index) => (
              <Grid item xs={12} md={4} key={feedback.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar 
                          src={feedback.image} 
                          sx={{ 
                            width: 60, 
                            height: 60,
                            mr: 2,
                            border: '2px solid',
                            borderColor: 'primary.main'
                          }} 
                        />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {feedback.name}
                            {feedback.verified && (
                              <Chip 
                                label="Verified" 
                                size="small" 
                                color="primary"
                                sx={{ ml: 1, height: 20 }}
                              />
                            )}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(feedback.date).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating 
                        value={feedback.rating} 
                        readOnly 
                        sx={{ mb: 2 }}
                      />
                      <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        {feedback.comment}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate('/feedbacks')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 3,
                },
                transition: 'all 0.3s ease',
              }}
            >
              View All Reviews
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 