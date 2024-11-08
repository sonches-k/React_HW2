import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';        
import './styles/layout.css';      
import './styles/components.css';  
import './styles/theme.css';       
import './App.css';                
import App from './App';           


const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement); 


root.render(
  <StrictMode>
    <App /> {}
  </StrictMode>
);