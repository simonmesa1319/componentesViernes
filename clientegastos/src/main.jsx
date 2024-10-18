import { createRoot } from 'react-dom/client'
import { Routes } from './Routes/Routes'
import { BrowserRouter } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"



createRoot(document.getElementById('root')).render(
  <>
  
    <FormularioGasto></FormularioGasto>
    <Routes></Routes>
    <BrowserRouter></BrowserRouter>
  
  </>,
)
