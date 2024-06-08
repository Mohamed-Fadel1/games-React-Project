import { useTheme } from '@emotion/react';
import React from 'react'
import { RiseLoader } from 'react-spinners';




export default function Loading() {

const theme = useTheme()

  return (
    <div style={{marginLeft :"240px"}} className={`d-flex justify-content-center align-items-center vh-100 position-fixed top-0 start-0 end-0 bottom-0`}>

<RiseLoader
  color= { theme.palette.mainNav }
  size={25}
/>
    </div>
  );
}
