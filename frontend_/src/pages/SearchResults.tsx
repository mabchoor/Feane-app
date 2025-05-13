import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Rating, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  popular: boolean;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Simulated search results - replace with actual API call
    const mockResults: MenuItem[] = [
      {
        id: 1,
        name: "Classic Burger",
        description: "Juicy beef patty with fresh vegetables",
        price: 12.99,
        image: "https://source.unsplash.com/random/300x200/?burger",
        category: "Main Course",
        rating: 4.5,
        popular: true
      },
      {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing",
        price: 8.99,
        image: "https://source.unsplash.com/random/300x200/?salad",
        category: "Starters",
        rating: 4.2,
        popular: false
      },
      // Add more mock results as needed
    ];

    // Filter results based on search query
    const filteredResults = mockResults.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  }, [query]);

  return (
    <Box sx={{ 
      width: '100%',
      py: { xs: 4, md: 6 },
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
          Search Results for "{query}"
        </Typography>

        {results.length === 0 ? (
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              color: 'text.secondary'
            }}
          >
            No results found for your search.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {results.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
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
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {item.name}
                        </Typography>
                        {item.popular && (
                          <Chip 
                            label="Popular" 
                            color="primary"
                            size="small"
                          />
                        )}
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.category}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Rating value={item.rating} readOnly size="small" />
                        <Typography variant="h6" color="primary.main">
                          ${item.price.toFixed(2)}
                        </Typography>
                      </Box>
                      <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Add to Order
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default SearchResults; 