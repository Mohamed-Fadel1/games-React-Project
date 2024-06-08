import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import brandImage from "../../Assets/logo-sm.png"
import { Avatar } from '@mui/material';

export default function AppBarr() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor :"lightblue"}} >
        <Toolbar>
  <img src={brandImage} style={{width :"50px"}} alt="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color :"black" }}>
          GAMEOVER

          </Typography>
          <Typography mr={2} color={"black"} variant="h6">mohamed fadel</Typography>
          <Avatar  alt="mohamed fadel" src="https:/mui.com/static/images/avatar/2.jpg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
