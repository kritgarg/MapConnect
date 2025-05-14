import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            className="font-poppins"
            sx={{
              fontSize: { xs: '6rem', sm: '8rem' },
              color: 'primary.main',
              mb: 2,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            className="font-poppins"
            gutterBottom
            sx={{ mb: 3 }}
          >
            Page Not Found
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: '80%' }}
          >
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </Typography>
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            size="large"
          >
            Back to Home
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}

export default NotFound; 