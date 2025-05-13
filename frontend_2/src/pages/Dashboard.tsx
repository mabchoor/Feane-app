import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Stack,
} from '@mui/material';
import {
  Restaurant,
  People,
  AttachMoney,
  Star,
} from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    {
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      title: 'Total Orders',
      value: '1,234',
    },
    {
      icon: <People sx={{ fontSize: 40 }} />,
      title: 'Customers',
      value: '856',
    },
    {
      icon: <AttachMoney sx={{ fontSize: 40 }} />,
      title: 'Revenue',
      value: '$45,678',
    },
    {
      icon: <Star sx={{ fontSize: 40 }} />,
      title: 'Rating',
      value: '4.8',
    },
  ];

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
            Dashboard
          </Typography>

          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: 'white',
                    }}
                  >
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Box sx={{ color: '#FF6B35' }}>
                        {stat.icon}
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {stat.title}
                      </Typography>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Dashboard; 