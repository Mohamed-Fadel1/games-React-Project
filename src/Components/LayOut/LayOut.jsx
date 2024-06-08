import React, { useState } from 'react'
import ResponsiveDrawer from '../Drawerr/Drawerr'
import { Outlet } from 'react-router-dom'
import { Box, createTheme , ThemeProvider, CssBaseline } from '@mui/material';
import {grey, purple, teal } from '@mui/material/colors';




export default function LayOut() {

  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );



  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
      mainBody : grey[300] ,
      mainWord :  grey[300] ,
      mainNav :  purple[500] ,
      mainNavHover : purple[400]
          }
        : {
            // palette values for dark mode
            mainWord : "white" ,
            mainNav :  teal[600] ,
            mainNavHover : teal[800]
          }),
    },
  });



  const drawerWidth = 240;
  return (
    <>

    
<Box sx={{ bgcolor: darkTheme.palette.mainBody, minHeight: '100vh' ,  }}>


<ThemeProvider theme={darkTheme}>
<CssBaseline/>
    <ResponsiveDrawer drawerWidth = {drawerWidth} setMyMode = {setMyMode}/>
 

    <Box
          sx={{
            ml: {sm : `${drawerWidth}px`},
        
          }}
        >
          <Outlet />
        </Box>

    </ThemeProvider>

</Box>
    </>
  )
}
