import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  MenuItem,
  Stack,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const timeSlots = [
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
    time: '',
    partySize: 2,
    specialRequests: '',
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
            Make a Reservation
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'white',
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
                    <TextField
                      required
                      label="Phone"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      fullWidth
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Date"
                        value={formData.date}
                        onChange={(newValue) => {
                          setFormData({ ...formData, date: newValue });
                        }}
                      />
                    </LocalizationProvider>
                    <TextField
                      required
                      select
                      label="Time"
                      value={formData.time}
                      onChange={handleChange('time')}
                      fullWidth
                    >
                      {timeSlots.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      required
                      select
                      label="Party Size"
                      value={formData.partySize}
                      onChange={handleChange('partySize')}
                      fullWidth
                    >
                      {partySizes.map((size) => (
                        <MenuItem key={size} value={size}>
                          {size} {size === 1 ? 'Person' : 'People'}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      label="Special Requests"
                      multiline
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleChange('specialRequests')}
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
                      Book Table
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%' }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'white',
                    height: '100%',
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    Restaurant Information
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body1">
                      <strong>Address:</strong> 123 Restaurant Street, City, Country
                    </Typography>
                    <Typography variant="body1">
                      <strong>Phone:</strong> (123) 456-7890
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> info@restaurant.com
                    </Typography>
                    <Typography variant="body1">
                      <strong>Hours:</strong>
                    </Typography>
                    <Typography variant="body1">
                      Monday - Friday: 11:00 AM - 10:00 PM
                    </Typography>
                    <Typography variant="body1">
                      Saturday - Sunday: 10:00 AM - 11:00 PM
                    </Typography>
                  </Stack>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Reservations; 