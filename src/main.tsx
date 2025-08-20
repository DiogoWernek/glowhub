import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
    <ToastContainer />
  </StrictMode>,
)
