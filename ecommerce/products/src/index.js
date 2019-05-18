import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StyleSheetManager } from 'styled-components';

class Products extends HTMLElement {
    constructor() {
        super();
        // const shadowRoot = this.attachShadow({mode: 'open'});

        const appRoot = document.createElement('div');
        const styleRoot = document.createElement('div');

        this.appendChild(appRoot);
        this.appendChild(styleRoot);

        ReactDOM.render(<StyleSheetManager target={styleRoot}>
            <App />
        </StyleSheetManager>, appRoot);
    }
}

customElements.define('amaze-products', Products);


