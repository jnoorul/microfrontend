import React from 'react';
import './index.css';

class ProductsWrapper extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});


        const styleTag = document.createElement('link');
        styleTag.href = 'http://localhost:4002/static/css/app.css';
        styleTag.rel = 'stylesheet';

        const scriptTag = document.createElement('script');
        scriptTag.src = 'http://localhost:4002/static/js/bundle.js';

        shadowRoot.appendChild(scriptTag);
        shadowRoot.appendChild(styleTag);
        shadowRoot.appendChild(document.createElement('amaze-products'));
    }
}

customElements.define('amaze-products-wrapper', ProductsWrapper);