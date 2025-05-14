import { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { Box, Paper, Typography } from '@mui/material';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

function MapView({ location, coordinates, name, photo }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Paper sx={{ height: 300, overflow: 'hidden', position: 'relative' }}>
      <Map
        initialViewState={{
          longitude: coordinates[0],
          latitude: coordinates[1],
          zoom: 12
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="top-right" />
        
        <Marker
          longitude={coordinates[0]}
          latitude={coordinates[1]}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setShowPopup(true);
          }}
        >
          <Box
            component="img"
            src={photo}
            alt={name}
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '3px solid #fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              }
            }}
          />
        </Marker>

        {showPopup && (
          <Popup
            longitude={coordinates[0]}
            latitude={coordinates[1]}
            anchor="top"
            onClose={() => setShowPopup(false)}
            closeOnClick={false}
          >
            <Box sx={{ p: 1 }}>
              <Typography variant="subtitle2" fontWeight="bold">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Box>
          </Popup>
        )}
      </Map>
    </Paper>
  );
}

export default MapView; 