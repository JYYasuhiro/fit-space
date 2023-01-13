import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import '../styles/navbar.css'
export default function Navbar() {

  return (
    <div className='navbar__container'>
      {/* <Box sx={{ height: '100px' }}>
        <AppBar position="static" maxwidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fit Space
            <FitnessCenterIcon sx ={{margin: 2}}/>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box> */}
      <p className='title'>Fit-space</p>
    </div>
    

  )
}