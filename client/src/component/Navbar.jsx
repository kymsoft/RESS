import React from 'react'
import {LightModeOutlined, DarkModeOutlined, Menu, Search, SettingsOutlined, ArrowDropDownOutlined} from "@mui/icons-material"
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';
import {useTheme} from '@mui/material/styles'
import { AppBar, Box, IconButton, InputBase, Toolbar } from '@mui/material';

const Navbar = ({
   isSidebarOpen,
   setIsSidebarOpen,
}) => {

   const dispatch = useDispatch();
   const theme = useTheme();
  return (
    <AppBar
      sx={{
         position: "static",
         background: "none",
         boxShadow: "none",
      }}
    >
      <Toolbar sx={{justifyContent: "space-between"}}>
         <Box style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
            <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
               <Menu/>
            </IconButton>
            <Box style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            >
               <InputBase placeholder='Search...'/>
               <IconButton>
                  <Search/>
               </IconButton>
            </Box>
         </Box>

         <Box style={{display:"flex", justifyContent: "space-between", alignItems: "center"}} gap="1.5rem" >
            <IconButton onClick={()=>dispatch(setMode())}>
               {theme.palette.mode === 'dark' ? (
                  <DarkModeOutlined sx={{fontSize: "25px"}}/>
               ) : (
                  <LightModeOutlined sx={{fontSize: "25px"}} />
               )}
            </IconButton>
            <IconButton>
               <SettingsOutlined sx={{fontSize: "25px"}} />
            </IconButton>
         </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar