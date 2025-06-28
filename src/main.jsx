import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Events from './pages/events.jsx'
import Feed from './pages/Feed.jsx'
import More from './components/common/more.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <App /> */}
    {/* <Events /> */}

    <Feed />
  
  </BrowserRouter>

)