import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 


import './styles/base.css';       
import './styles/layout.css';      
import './styles/components.css';  
import './styles/theme.css';       
import './App.css';                


const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement); 


root.render(
    <React.StrictMode>
        <App /> {}
    </React.StrictMode>
);