import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import VisitorForm from './VisitorForm'   // ✅ make sure this line exists

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisitorForm />   {/* ✅ this should load first */}
  </React.StrictMode>
)
