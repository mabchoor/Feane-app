import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Restaurant, EmojiEvents, Group, Favorite, Architecture, LocalDining } from '@mui/icons-material';
import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  specialty: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  year: string;
}

const About = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Chef Antoine",
      role: "Executive Chef",
      image: "https://i.pravatar.cc/300?img=1",
      description: "With over 25 years of experience in French cuisine, Chef Antoine brings passion and innovation to every dish. His journey began in Paris, where he trained under renowned chefs before bringing his expertise to our restaurant.",
      specialty: "French Cuisine"
    },
    {
      id: 2,
      name: "Marie Laurent",
      role: "Interior Designer",
      image: "https://i.pravatar.cc/300?img=2",
      description: "Marie's vision has transformed our space into an elegant dining experience. Her background in luxury hospitality design brings sophistication and comfort to every corner of our restaurant.",
      specialty: "Interior Design"
    },
    {
      id: 3,
      name: "Sophie Chen",
      role: "Pastry Chef",
      image: "https://i.pravatar.cc/300?img=3",
      description: "Specializing in French pastries and desserts, Sophie adds the perfect sweet touch to our menu. Her creations are both visually stunning and delicious.",
      specialty: "Pastry Arts"
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Best Restaurant Design 2023",
      description: "Awarded by Interior Design Magazine",
      icon: <Architecture sx={{ fontSize: 40 }} />,
      year: "2023"
    },
    {
      id: 2,
      title: "Michelin Star",
      description: "Recognized for culinary excellence",
      icon: <LocalDining sx={{ fontSize: 40 }} />,
      year: "2022"
    },
    {
      id: 3,
      title: "Most Innovative Menu",
      description: "Awarded by Gourmet Magazine",
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      year: "2023"
    }
  ];

  const scrollableBoxStyles = {
    display: 'flex',
    gap: 3,
    overflowX: 'auto',
    pb: 2,
    px: 1,
    width: '100%',
    '&::-webkit-scrollbar': {
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '4px',
      '&:hover': {
        background: '#555',
      },
    },
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100vw',
          minHeight: { xs: '40vh', md: '50vh' },
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?luxury-restaurant)',
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
            variant="h1"
            sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 2
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Where Culinary Art Meets Design Excellence
          </Typography>
        </Box>
      </Box>

      {/* Story Section */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'primary.main',
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700
          }}
        >
          Our Journey
        </Typography>
        <Box sx={{
          ...scrollableBoxStyles,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 320,
          maxWidth: '100vw',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '280px', flex: '0 0 auto', marginRight: 12 }}
          >
            <Card sx={{ width: '100%', maxWidth: 280, minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="120"
                image="https://source.unsplash.com/random/800x600/?chef-cooking"
                alt="Chef in Kitchen"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main', fontWeight: 600 }}>
                  A Legacy of Excellence
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Founded in 2010, our restaurant has been a beacon of culinary innovation and design excellence.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ width: '280px', flex: '0 0 auto', marginRight: 12 }}
          >
            <Card sx={{ width: '100%', maxWidth: 280, minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="120"
                image="https://source.unsplash.com/random/800x600/?restaurant-interior"
                alt="Restaurant Interior"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main', fontWeight: 600 }}>
                  Design Innovation
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Our space combines luxury with comfort, creating an unforgettable dining atmosphere.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: '280px', flex: '0 0 auto', marginRight: 12 }}
          >
            <Card sx={{ width: '100%', maxWidth: 280, minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="120"
                image="https://source.unsplash.com/random/800x600/?fine-dining"
                alt="Fine Dining"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main', fontWeight: 600 }}>
                  Culinary Excellence
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Every dish tells a story, crafted with passion and precision by our expert team.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>

      {/* Team Section */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'primary.main',
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700
          }}
        >
          Meet Our Creative Team
        </Typography>
        <Box sx={{ ...scrollableBoxStyles, justifyContent: 'center', alignItems: 'center', maxWidth: '100vw' }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ width: '280px', flex: '0 0 auto', marginRight: 12 }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: 280,
                  minWidth: 0,
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
                  height="120"
                  image={member.image}
                  alt={member.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Box sx={{ mb: 1.5 }}>
                    <Chip
                      label={member.role}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      label={member.specialty}
                      color="secondary"
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Achievements Section */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'primary.main',
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700
          }}
        >
          Our Recognition
        </Typography>
        <Box sx={{ ...scrollableBoxStyles, justifyContent: 'center', alignItems: 'center', maxWidth: '100vw' }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ minWidth: '280px', flex: '0 0 auto' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {achievement.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {achievement.description}
                </Typography>
                <Chip
                  label={achievement.year}
                  color="secondary"
                  size="small"
                />
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About; 