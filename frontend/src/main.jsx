import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import lessons from '../comprehensive_rust.json'
import './main.css'


window.localStorage.setItem('lessons', JSON.stringify(lessons))

createRoot(document.getElementById('root')).render(
  <App />
)
