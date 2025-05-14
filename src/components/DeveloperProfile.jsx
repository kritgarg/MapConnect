import { Box, Container, Typography, Paper, Avatar, Chip, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email, Language } from '@mui/icons-material';
import { motion } from 'framer-motion';
import krit from '../assets/krit.png'; 

function DeveloperProfile() {
  const developer = {
    name: "Krit Garg",
    role: "Full Stack Developer",
    photo: {krit}, 
    bio: "Passionate full-stack developer with expertise in React, Node.js, and modern web technologies. Created this profile mapping application to demonstrate the integration of React, Material-UI, and Leaflet maps.",
    location: "San Francisco, CA",
    skills: [
      "React",
      "TypeScript",
      "Material-UI",
      "Leaflet",
   
    ],
    links: {
      github: "https://github.com/kritgarg", 
      linkedin: "https://linkedin.com/in/krit--garg", 
      email: "mailto:kritg0160@gmail.com", 
      
    },
    projects: [
      {
        name: "Profile Map Application",
        description: "A modern React application for managing and viewing user profiles with interactive map integration.",
        technologies: ["React", "Material-UI", "Leaflet", "Zustand"]
      },
      
    ]
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ py: 6 }}>
          {/* Header Section */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #4A90E2 0%, #7ED6C1 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                <Avatar
                  src={developer.photo}
                  alt={developer.name}
                  sx={{
                    width: 120,
                    height: 120,
                    border: '4px solid white',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                />
                <Box>
                  <Typography variant="h3" component="h1" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                    {developer.name}
                  </Typography>
                  <Typography variant="h5" sx={{ opacity: 0.9, mt: 1 }}>
                    {developer.role}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ maxWidth: 800, fontSize: '1.1rem', lineHeight: 1.6 }}>
                {developer.bio}
              </Typography>
            </Box>
          </Paper>

          {/* Skills Section */}
          <Paper sx={{ p: 4, mb: 4, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontFamily: 'Poppins' }}>
              Skills & Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {developer.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    bgcolor: 'rgba(74, 144, 226, 0.1)',
                    color: '#4A90E2',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'rgba(74, 144, 226, 0.2)',
                    }
                  }}
                />
              ))}
            </Box>
          </Paper>

          {/* Projects Section */}
          <Paper sx={{ p: 4, mb: 4, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontFamily: 'Poppins' }}>
              Featured Projects
            </Typography>
            {developer.projects.map((project) => (
              <Box key={project.name} sx={{ mb: 4, '&:last-child': { mb: 0 } }}>
                <Typography variant="h6" sx={{ color: '#4A90E2', mb: 1 }}>
                  {project.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: 1 }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Paper>

          {/* Contact Section */}
          <Paper sx={{ p: 4, borderRadius: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 3, fontFamily: 'Poppins' }}>
              Connect with Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton
                component={Link}
                href={developer.links.github}
                target="_blank"
                sx={{ 
                  color: '#333',
                  '&:hover': { color: '#4A90E2' }
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component={Link}
                href={developer.links.linkedin}
                target="_blank"
                sx={{ 
                  color: '#333',
                  '&:hover': { color: '#4A90E2' }
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component={Link}
                href={developer.links.email}
                sx={{ 
                  color: '#333',
                  '&:hover': { color: '#4A90E2' }
                }}
              >
                <Email />
              </IconButton>
              <IconButton
                component={Link}
                href={developer.links.website}
                target="_blank"
                sx={{ 
                  color: '#333',
                  '&:hover': { color: '#4A90E2' }
                }}
              >
                <Language />
              </IconButton>
            </Box>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default DeveloperProfile; 