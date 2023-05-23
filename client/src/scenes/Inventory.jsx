import React from 'react'
import { Add } from '@mui/icons-material';
import {useList} from '@pankod/refine-core';
import { Box, Stack, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {

  const navigate=useNavigate();
  const theme=useTheme();

  return (
    <Box className='mx-5 my-5'>
      <Stack direction='row' 
      justifyContent='space-between'
      alignItems='center'>
        <Typography fontSize={20} 
        fontWeight={700} >INVENTORY</Typography>
        <Button 
          variant='contained'
          onClick={()=>navigate('/create-product')}
         ><Add/> Add Product</Button>
      </Stack>
    </Box>
  )
}

export default Inventory