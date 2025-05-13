import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Rating,
  Stack,
} from '@mui/material';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              color: '#2D3142',
            }}
          >
            Share Your Experience
          </Typography>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              bgcolor: 'white',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  required
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange('name')}
                  fullWidth
                />
                <TextField
                  required
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  fullWidth
                />
                <Box>
                  <Typography component="legend">Rating</Typography>
                  <Rating
                    name="rating"
                    value={formData.rating}
                    onChange={(event, newValue) => {
                      setFormData({ ...formData, rating: newValue || 0 });
                    }}
                    size="large"
                  />
                </Box>
                <TextField
                  required
                  label="Your Feedback"
                  multiline
                  rows={4}
                  value={formData.comment}
                  onChange={handleChange('comment')}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#FF6B35',
                    '&:hover': { bgcolor: '#CC4F1A' },
                    py: 1.5,
                  }}
                >
                  Submit Feedback
                </Button>
              </Stack>
            </form>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Feedback; 