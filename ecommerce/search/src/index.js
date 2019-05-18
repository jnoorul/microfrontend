import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//TODO: remove hard coding of web component id below. need to find a better way.
const root = document.getElementById('search');

const appRoot = document.createElement('div');
root.shadowRoot.appendChild(appRoot);

ReactDOM.render(<App />, appRoot);


