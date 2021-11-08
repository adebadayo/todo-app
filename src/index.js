import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";


const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
