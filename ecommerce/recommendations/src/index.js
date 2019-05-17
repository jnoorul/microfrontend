import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class Recommendations extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        const appRoot = document.createElement('div');
        const styleTag = document.createElement('link');
        styleTag.href = 'http://localhost:4003/static/css/app.css';
        styleTag.rel = 'stylesheet';

        shadowRoot.appendChild(appRoot);
        shadowRoot.appendChild(styleTag);

        ReactDOM.render(<App />, appRoot);
    }
}

customElements.define('amaze-recommendations', Recommendations);
