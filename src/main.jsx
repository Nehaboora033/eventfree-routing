import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Events from './pages/Events.jsx'
import Feed from './pages/Feed.jsx'
import Home from './pages/Home.jsx'
import Username from './pages/Username.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'feed',
        element: <Feed />
      },
      {
        path: 'username',
        element: <Username />
      },
    ]
  }
])








ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)