import Button from './Components/Buttons/Button.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
      <React.SrictMode>
      <BrowserRouter>
      <App/>
     </BrowserRouter>
     </React.SrictMode>
)
