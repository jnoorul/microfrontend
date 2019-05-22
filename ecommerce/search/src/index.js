import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

class Search extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const appRoot = document.createElement('div');

        const styleTag = document.createElement('link');
        styleTag.href = 'http://localhost:4001/static/css/app.css';
        styleTag.rel = 'stylesheet';

        shadowRoot.appendChild(styleTag);
        shadowRoot.appendChild(appRoot);
        ReactDOM.render(<App />, appRoot);
    }
}

customElements.define('amaze-search', Search);


