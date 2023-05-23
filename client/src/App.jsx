import React from 'react'
import {CssBaseline, ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from './theme';
import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import Layout from "./scenes/Layout"
import Dashboard from './scenes/Dashboard';
import Invoice from './scenes/Invoice/Invoice';
import CreateInvoice from './scenes/Invoice/CreateInvoice';
import SavedInvoice from './scenes/SavedInvoice';
import SalesRecords from './scenes/SalesRecords';
import Inventory from './scenes/Inventory';
import NewProduct from './scenes/NewProduct';


const App = () => {

  const mode = useSelector((state)=>state.global.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)), [mode]);
  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace />}  />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/invoice" element={<Invoice/>} />
              <Route path="/create-invoice" element={<CreateInvoice/>} />
              <Route path="/saved-invoice" element={<SavedInvoice/> } />
              <Route path="/sales-record" element={<SalesRecords/> } />
              <Route path="/inventory" element={<Inventory/>}/>
              <Route path='/create-product' element={<NewProduct/> } />

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App