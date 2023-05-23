import React from 'react'
import './styles.css'
import {
   Box,
   Divider,
   Drawer, 
   IconButton,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Typography,
   useTheme
} from "@mui/material";

import {
   SettingsOutlined,
   ChevronLeft,
   ChevronRightOutlined,
   HomeOutlined,
   ReceiptLongOutlined,
} from "@mui/icons-material";

import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {HiMenuAlt3} from "react-icons/hi";
import {TbFileInvoice} from "react-icons/tb";
import {AiOutlineStock} from "react-icons/ai";
import {SiBookmeter} from "react-icons/si";
import {BsFillPlusCircleFill} from "react-icons/bs";
import {MdOutlineDashboard} from "react-icons/md";
import {GiOilDrum} from "react-icons/gi"


const navItems = [
   {
      text: "Dasboard",
      link: "/dashboard",
      icon: <MdOutlineDashboard/>
   },
   {
      text: "Sales",
      icon: null,
   },
   {
      text: "Invoice",
      link: "/invoice",
      icon: <ReceiptLongOutlined/>
   },
   {
      text: "Saved Invoice",
      link: "/saved-invoice",
      icon: <BsFillPlusCircleFill/>
   },
   {
      text: "Sales Record",
      link: "/sales-record",
      icon: <SiBookmeter/>
   },
   {
      text: "Stock Management",
      icon: null,
   },
   {
      text: "Inventory",
      link: "/inventory",
      icon: <AiOutlineStock/>
   },

]


const Sidebar = ({
   drawerWidth,
   isSidebarOpen,
   setIsSidebarOpen,
   isNonMobile,
}) => {
   const {pathname} = useLocation();
   const [active, setActive] = useState("");
   const navigate = useNavigate();
   const theme = useTheme();

   useEffect(()=>{
      setActive(pathname.substring(1));
   }, [pathname])

  return (
   <Box component="nav" >
   { isSidebarOpen && (
      <Drawer 
         open={isSidebarOpen}
         onClose={()=>setIsSidebarOpen(false)}
         variant="persistent"
         anchor="left"
         sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
               color: theme.palette.secondary[200],
               backgroundColor: theme.palette.background.alt,
               boxSizing: "border-box",
               borderWidth: isNonMobile ? 0 : "2px",
               width: drawerWidth
            } 
         }} >
            <Box width="100%">
               <Box m="1.5rem 2rem 2rem 3rem">
                  <Box style={{display:"flex", justifyContent: "space-between", alignItems: "center"}} color={theme.palette.secondary.main}>
                     <Box display="flex" alignItems='center' gap="0.5rem" >
                        <Typography variant='h3' fontWeight='bold' >
                           Riejom ES
                        </Typography>
                     </Box>
                     {
                        isNonMobile && (
                           <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                              <ChevronLeft/>
                           </IconButton>
                        )
                     }
                  </Box>
               </Box>
               <List>
                  { navItems.map(({text, icon, link}) => {
                     if (!icon) {
                        return(
                           <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"}}>
                              {text}
                           </Typography>
                        )
                     }
                     const lcText= text.toLowerCase();
                     

                     return(
                        <ListItem key={text} disablePadding>
                           <ListItemButton 
                             onClick={()=>{
                               
                                navigate(link);
                                setActive(lcText);
                               
                              }}
                              sx={{
                                 backgroundColor: active === lcText ? theme.palette.secondary[300] : "transparent",
                                 color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100]
                              }}
                           >
                              <ListItemIcon
                                sx={{ml: "2rem", 
                                color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],
                              }} className='listtext'
                               >
                                 {icon}
                               </ListItemIcon>
                               <ListItemText primary={text} className='listtext' />
                               {
                                 active === lcText && (
                                    <ChevronRightOutlined sx={{ml: "auto"}} />
                                 )
                               }
                           </ListItemButton>
                        </ListItem>
                     )
                  }
               )}
               </List>
            </Box>
         </Drawer>
   )}
 </Box>
  )
}

export default Sidebar