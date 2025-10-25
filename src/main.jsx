import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import VisitorForm from './VisitorForm'  // ✅ import your visitor page

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisitorForm />   {/* ✅ this loads your visitor form first */}
  </React.StrictMode>
)
