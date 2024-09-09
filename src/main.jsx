import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Head from './header.jsx'
import App from './App.jsx'
import Foot from './foot.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Head/>
    <App />
    <Foot />
  </BrowserRouter>,
)
