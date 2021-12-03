import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {App} from './App';

const Global = createGlobalStyle`
  body{
    margin: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  }
`
ReactDOM.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
