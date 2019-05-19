import './index.css';
import { renderApp } from "./App";

class Products extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const appRoot = document.createElement('div');
        const styleTag = document.createElement('link');
        styleTag.href = 'http://localhost:4002/static/css/app.css';
        styleTag.rel = 'stylesheet';

        shadowRoot.appendChild(appRoot);
        shadowRoot.appendChild(styleTag);

        renderApp(appRoot);
    }
}

customElements.define('amaze-products', Products);