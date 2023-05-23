import { Add } from '@mui/icons-material';
import {useList} from '@pankod/refine-core';
import { Box, Stack, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {

  const navigate=useNavigate();
  const theme=useTheme();

  return (
    <Box className='mx-5 my-5'>
      <Stack direction='row' 
      justifyContent='space-between'
      alignItems='center'>
        <Typography fontSize={20} 
        fontWeight={700} >INVOICE</Typography>
        <Button 
          variant='contained'
          onClick={()=>navigate('/create-invoice')}
         ><Add/> Create Invoice</Button>
      </Stack>
    </Box>
  )
}

export default Invoice