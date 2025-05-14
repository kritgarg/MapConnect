import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Paper, Typography } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom marker icon with profile photo
const createCustomIcon = (photoUrl) => {
  return L.divIcon({
    html: `<div style="
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      transition: transform 0.2s;
      background-color: white;
    ">
      <img src="${photoUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;">
    </div>`,
    className: 'custom-marker',
    iconSize: [46, 46],
    iconAnchor: [23, 46],
    popupAnchor: [0, -46],
  });
};

function MapView({ location, coordinates, name, photo }) {
  const mapRef = useRef(null);
  const [position, setPosition] = useState([coordinates[1], coordinates[0]]);
  const customIcon = createCustomIcon(photo);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([coordinates[1], coordinates[0]], 12);
    }
  }, [coordinates]);

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        height: 300, 
        overflow: 'hidden', 
        position: 'relative',
        borderRadius: 2,
      }}
    >
      <MapContainer
        center={position}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
        ref={mapRef}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={position}
          icon={customIcon}
        >
          <Popup>
            <Box sx={{ p: 1 }}>
              <Typography variant="subtitle2" fontWeight="bold">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Box>
          </Popup>
        </Marker>
      </MapContainer>
    </Paper>
  );
}

export default MapView; 