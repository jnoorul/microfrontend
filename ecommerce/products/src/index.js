import { renderApp } from "./App";

// window.SC_DISABLE_SPEEDY = true;

class Products extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const appRoot = document.createElement('div');
        shadowRoot.appendChild(appRoot);

        const styleTag = document.createElement('style');
        shadowRoot.appendChild(styleTag);


        renderApp(appRoot,styleTag);
    }
}

customElements.define('amaze-products', Products);