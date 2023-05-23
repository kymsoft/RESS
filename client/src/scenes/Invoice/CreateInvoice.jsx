import React from 'react'
import {
  Box, 
  Typography
} from "@mui/material"
import Container  from "react-bootstrap/Container";
import InvoiceForm from '../../component/invoiceComponent/InvoiceForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css"
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

const CreateInvoice = () => {

  const navigate=useNavigate();
  return (
    <>
    <IconButton onClick={()=>navigate('/invoice')} sx={{marginLeft: "25px"}}>
       <BiArrowBack/>
    </IconButton>
    <div className='App d-flex flex-column align-items-center justify-content-center w-100' sx={{
      background: "none",
      boxShadow: "none",
   }}>
    
      <Container>
        <InvoiceForm/>
      </Container>

    </div>
    </>
  )
}

export default CreateInvoice