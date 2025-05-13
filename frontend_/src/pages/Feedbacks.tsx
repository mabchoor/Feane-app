import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface Feedback {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  image: string;
  verified: boolean;
}

const Feedbacks = () => {
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
    },
    // Add more feedbacks as needed
  ]);

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
          Customer Reviews
        </Typography>

        <Grid container spacing={4}>
          {feedbacks.map((feedback, index) => (
            <Grid item xs={12} md={6} lg={4} key={feedback.id}>
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
      </Container>
    </Box>
  );
};

export default Feedbacks; 