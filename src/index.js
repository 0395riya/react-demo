import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './Context/ContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
const root = ReactDOM.createRoot(document.getElementById("root") );

root.render(
    <React.StrictMode>
    <HelmetProvider>
    
     <ContextProvider>
       <App />    
    </ContextProvider>
   
  </HelmetProvider>

   
</React.StrictMode>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
