import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ContextProvider } from './context/ContextProvider';

const root = ReactDOM.createRoot(
     <ContextProvider>  
        <App /> 
    </ContextProvider> ,
    document.getElementById('root'));
root.render(<App />)


