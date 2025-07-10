// components/PhoneContainer.jsx
import React from 'react';
import { Box } from '@mui/material';

const PhoneContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: '300px',            // Wider phone width
        height: '500px',           // Optional: taller phone
        borderRadius: '30px',
        border: '6px solid #333',
        backgroundColor: '#fff',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
        marginBottom:'200px'
      }}
    >
      {children}
    </Box>
  );
};

export default PhoneContainer;
