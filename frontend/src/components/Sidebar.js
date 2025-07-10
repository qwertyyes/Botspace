import React from 'react';
import { Drawer, List, ListItem, ListItemButton, Tooltip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 80;

const navItems = [
  { icon: '/icons/dashboard.png', path: '/dashboard', label: 'Dashboard' },
  { icon: '/icons/home.png', path: '/home', label: 'Home' },
  { icon: '/icons/user.png', path: '/users', label: 'Users' },
  { icon: '/icons/library.png', path: '/missions', label: 'Missions' },
  { icon: '/icons/message.png', path: '/messages', label: 'Messages' },
  { icon: '/icons/send.png', path: '/explore', label: 'Explore' },
  { icon: '/icons/settings.png', path: '/settings', label: 'Settings' },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#f4f6f8', // light gray
          pt: 2,
        },
      }}
    >
      {/* Company Logo */}
      <Box sx={{ mb: 4 }}>
        <Tooltip title="Company">
          <img
            src="/logo.jpg"
            alt="Company Logo"
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              cursor: 'pointer',
            }}
            onClick={() => navigate('/home')}
          />
        </Tooltip>
      </Box>

      {/* Navigation Items */}
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ justifyContent: 'center' }}>
            <Tooltip title={item.label} placement="right">
              <ListItemButton onClick={() => navigate(item.path)} sx={{ minWidth: 'auto' }}>
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: 24, height: 24 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
