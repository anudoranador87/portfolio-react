import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from "./context/alertContext"; // <--- IMPORTA TU PROVIDER
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AlertProvider> 
        <App />
      </AlertProvider>
    </ChakraProvider>
  </React.StrictMode>
);