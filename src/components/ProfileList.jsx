import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Stack,
} from '@mui/material';
import {
  LocationOn,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import useProfileStore from '../store/profileStore';

function ProfileList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const profiles = useProfileStore((state) => state.profiles);

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <Box sx={{ maxWidth: '100%', py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 5 }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            mb: 1,
            fontFamily: 'Poppins'
          }}
        >
          User Profiles
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Browse and discover professionals in our network
        </Typography>

        {/* Search Bar */}
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          maxWidth: '100%',
        }}>
          <TextField
            fullWidth
            placeholder="Search by name or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                borderRadius: '8px',
              }
            }}
          />
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              minWidth: 130,
              borderRadius: '8px',
              borderColor: 'divider',
              color: 'text.primary',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            Location
          </Button>
        </Box>
      </Box>

      {/* Profile Cards Grid */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: 3,
      }}>
        {filteredProfiles.map((profile) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              sx={{
                p: 3,
                borderRadius: '16px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                position: 'relative',
                overflow: 'visible',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  borderRadius: '16px 16px 0 0',
                  backgroundColor: (theme) => {
                    const colors = ['#7ED6C1', '#FBC531', '#FF6B6B', '#4A90E2', '#7ED6C1', '#FBC531'];
                    return colors[profile.id % colors.length];
                  },
                },
              }}
            >
              {/* Profile Header */}
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Box
                  component="img"
                  src={profile.photo}
                  alt={profile.name}
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid white',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {profile.name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {profile.description}
                  </Typography>
                </Box>
              </Box>

              {/* Location */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ 
                  fontSize: 18, 
                  color: (theme) => {
                    const colors = ['#7ED6C1', '#FBC531', '#FF6B6B', '#4A90E2', '#7ED6C1', '#FBC531'];
                    return colors[profile.id % colors.length];
                  },
                }} />
                <Typography variant="body2" color="text.secondary">
                  {profile.location}
                </Typography>
              </Box>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" sx={{ 
                minHeight: 60,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {profile.role}
              </Typography>

              {/* Skills */}
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                {profile.skills.map((skill, index) => (
                  <Typography
                    key={index}
                    variant="caption"
                    sx={{
                      py: 0.5,
                      px: 1.5,
                      borderRadius: '100px',
                      backgroundColor: index === profile.skills.length - 1 ? 'rgba(0, 0, 0, 0.08)' : 'rgba(74, 144, 226, 0.1)',
                      color: index === profile.skills.length - 1 ? 'text.secondary' : 'primary.main',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </Stack>

              {/* Actions */}
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mt: 'auto',
                pt: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}>
                <Button
                  sx={{
                    flex: 1,
                    color: (theme) => {
                      const colors = ['#7ED6C1', '#FBC531', '#FF6B6B', '#4A90E2', '#7ED6C1', '#FBC531'];
                      return colors[profile.id % colors.length];
                    },
                  }}
                  startIcon={<LocationOn />}
                >
                  View Location
                </Button>
                <Button
                  sx={{
                    flex: 1,
                    color: (theme) => {
                      const colors = ['#7ED6C1', '#FBC531', '#FF6B6B', '#4A90E2', '#7ED6C1', '#FBC531'];
                      return colors[profile.id % colors.length];
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate(`/profile/${profile.id}`)}
                >
                  Full Profile
                </Button>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default ProfileList; 