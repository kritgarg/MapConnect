import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Avatar,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  LocationOn,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import useProfileStore from '../store/profileStore';

const emptyProfile = {
  name: '',
  description: '',
  location: '',
  coordinates: [0, 0],
  photo: '',
  role: '',
  skills: [],
};

function AdminDashboard() {
  const { profiles, addProfile, updateProfile, deleteProfile } = useProfileStore();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [editingProfile, setEditingProfile] = useState(emptyProfile);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleOpenDialog = (profile = null) => {
    setSelectedProfile(profile);
    setEditingProfile(profile || emptyProfile);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProfile(null);
    setEditingProfile(emptyProfile);
  };

  const handleSave = () => {
    const skillsArray = editingProfile.skills || [];
    const profileToSave = {
      ...editingProfile,
      skills: Array.isArray(skillsArray) ? skillsArray : skillsArray.split(',').map(s => s.trim()),
    };

    if (selectedProfile) {
      updateProfile(profileToSave);
      setSnackbar({
        open: true,
        message: 'Profile updated successfully',
        severity: 'success',
      });
    } else {
      addProfile(profileToSave);
      setSnackbar({
        open: true,
        message: 'Profile created successfully',
        severity: 'success',
      });
    }
    handleCloseDialog();
  };

  const handleDelete = (profile) => {
    deleteProfile(profile.id);
    setSnackbar({
      open: true,
      message: 'Profile deleted successfully',
      severity: 'success',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" className="font-poppins" gutterBottom>
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
          sx={{ mb: 3 }}
        >
          Add New Profile
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Location</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <AnimatePresence>
              {profiles.map((profile) => (
                <motion.tr
                  key={profile.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  <TableCell>
                    <Avatar src={profile.photo} alt={profile.name} />
                  </TableCell>
                  <TableCell>{profile.name}</TableCell>
                  <TableCell>{profile.description}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ fontSize: 20, mr: 1, color: 'coral' }} />
                      {profile.location}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="primary"
                      onClick={() => handleOpenDialog(profile)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(profile)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </motion.tr>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle className="font-poppins">
          {selectedProfile ? 'Edit Profile' : 'Add New Profile'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={editingProfile.name}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={editingProfile.description}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Role"
              name="role"
              value={editingProfile.role || ''}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={2}
            />
            <TextField
              label="Location"
              name="location"
              value={editingProfile.location}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Photo URL"
              name="photo"
              value={editingProfile.photo}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Skills (comma-separated)"
              name="skills"
              value={Array.isArray(editingProfile.skills) ? editingProfile.skills.join(', ') : editingProfile.skills || ''}
              onChange={handleInputChange}
              fullWidth
              helperText="Enter skills separated by commas"
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Longitude"
                type="number"
                value={editingProfile.coordinates ? editingProfile.coordinates[0] : ''}
                onChange={(e) => setEditingProfile(prev => ({
                  ...prev,
                  coordinates: [parseFloat(e.target.value), prev.coordinates ? prev.coordinates[1] : 0],
                }))}
                fullWidth
              />
              <TextField
                label="Latitude"
                type="number"
                value={editingProfile.coordinates ? editingProfile.coordinates[1] : ''}
                onChange={(e) => setEditingProfile(prev => ({
                  ...prev,
                  coordinates: [prev.coordinates ? prev.coordinates[0] : 0, parseFloat(e.target.value)],
                }))}
                fullWidth
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={!editingProfile.name || !editingProfile.location}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </motion.div>
  );
}

export default AdminDashboard; 