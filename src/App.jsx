import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/poppins';
import '@fontsource/inter';
import './index.css';

// Import components (to be created)
import Layout from './components/Layout';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import AdminDashboard from './components/AdminDashboard';
import DeveloperProfile from './components/DeveloperProfile';
import NotFound from './components/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // soft-blue
    },
    secondary: {
      main: '#7ED6C1', // mint-green
    },
    error: {
      main: '#FF6B6B', // coral
    },
    warning: {
      main: '#FBC531', // warm-yellow
    },
    background: {
      default: '#F5F6FA', // light-gray
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Poppins, sans-serif',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
    },
    h4: {
      fontFamily: 'Poppins, sans-serif',
    },
    h5: {
      fontFamily: 'Poppins, sans-serif',
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProfileList />} />
            <Route path="profile/:id" element={<ProfileDetails />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="profiles" element={<DeveloperProfile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
