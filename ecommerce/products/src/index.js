import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StyleSheetManager } from 'styled-components';

//TODO: remove hard coding of web component id below. need to find a better way.
const root = document.getElementById('products');

const appRoot = root.shadowRoot.appendChild(document.createElement('div'));
const styleRoot = root.shadowRoot.appendChild(document.createElement('div'));

ReactDOM.render(<StyleSheetManager target={styleRoot}>
    <App />
</StyleSheetManager>, appRoot);

