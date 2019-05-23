import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

class Recommendations extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        const appRoot = document.createElement('div');
        const styleTag = document.createElement('link');
        styleTag.href = 'http://localhost:4000/recommendations/static/css/app.css';
        styleTag.rel = 'stylesheet';

        shadowRoot.appendChild(appRoot);
        shadowRoot.appendChild(styleTag);

        ReactDOM.render(<App />, appRoot);
    }
}

customElements.define('amaze-recommendations', Recommendations);