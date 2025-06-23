import { createBrowserRouter, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Home } from './screens/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={ router } />
)
