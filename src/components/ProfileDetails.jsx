import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Language,
  LinkedIn,
  Twitter,
  Instagram,
  ArrowBack,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import MapView from './MapView';
import useProfileStore from '../store/profileStore';

function ProfileDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const profiles = useProfileStore((state) => state.profiles);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the profile with the matching ID
    const foundProfile = profiles.find((p) => p.id === parseInt(id));
    setProfile(foundProfile);
    setLoading(false);
  }, [id, profiles]);

  if (loading) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography>Loading profile...</Typography>
      </Box>
    );
  }

  if (!profile) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography>Profile not found</Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          startIcon={<ArrowBack />}
          sx={{ mt: 2 }}
        >
          Back to Profiles
        </Button>
      </Box>
    );
  }

  // Social media profiles - using mock data since it's not in the store
  const social = {
    linkedin: profile.name.toLowerCase().replace(' ', ''),
    twitter: `@${profile.name.toLowerCase().replace(' ', '')}`,
    instagram: `@${profile.name.toLowerCase().split(' ')[0]}`,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Button
          variant="outlined"
          onClick={() => navigate('/')}
          startIcon={<ArrowBack />}
          sx={{ mb: 3 }}
        >
          Back to Profiles
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={profile.photo}
                alt={profile.name}
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" component="h1" className="font-poppins" gutterBottom>
                  {profile.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {profile.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <LocationOn sx={{ color: 'coral', mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {profile.location}
                  </Typography>
                </Box>
              </Box>
            </Card>

            <Paper sx={{ mt: 3, p: 3 }}>
              <Typography variant="h6" className="font-poppins" gutterBottom>
                Contact Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={`${profile.name.toLowerCase().replace(' ', '.')}@example.com`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="+1 (555) 123-4567" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Language color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={`www.${profile.name.toLowerCase().replace(' ', '')}.com`} />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" className="font-poppins" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" paragraph>
                {profile.role}
              </Typography>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" className="font-poppins" gutterBottom>
                Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {profile.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" className="font-poppins" gutterBottom>
                Social Media
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<LinkedIn />}
                    href={`https://linkedin.com/in/${social.linkedin}`}
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<Twitter />}
                    href={`https://twitter.com/${social.twitter}`}
                    target="_blank"
                  >
                    Twitter
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<Instagram />}
                    href={`https://instagram.com/${social.instagram}`}
                    target="_blank"
                  >
                    Instagram
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            <Paper sx={{ mt: 3 }}>
              <Typography variant="h6" className="font-poppins" gutterBottom sx={{ p: 3, pb: 0 }}>
                Location
              </Typography>
              <MapView
                location={profile.location}
                coordinates={profile.coordinates}
                name={profile.name}
                photo={profile.photo}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}

export default ProfileDetails; 