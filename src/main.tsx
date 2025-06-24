import { createBrowserRouter, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Home } from './screens/Home.tsx'
import { Videos } from './screens/Videos.tsx'
import { Marketplace } from './screens/Marketplace.tsx'
import { Games } from './screens/Games.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/videos',
    Component: Videos
  },
  {
    path: '/marketplace',
    Component: Marketplace
  },
  {
    path: '/games',
    Component: Games
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={ router } />
)
