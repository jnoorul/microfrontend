import React from 'react';
import './index.css';

// class ProductsWrapper extends HTMLElement {
//     constructor() {
//         super();
//         const shadowRoot = this.attachShadow({mode: 'open'});
//
//         const styleTag = document.createElement('link');
//         styleTag.href = 'http://localhost:4002/static/css/app.css';
//         styleTag.rel = 'stylesheet';
//
//         const scriptTag = document.createElement('script');
//         scriptTag.src = 'http://localhost:4002/static/js/bundle.js';
//
//         shadowRoot.appendChild(scriptTag);
//         shadowRoot.appendChild(styleTag);
//     }
// }
//
// customElements.define('amaze-products', ProductsWrapper);

function registerAppAsWebComponent(jsBundleUrl, styleUrl, componentName) {
    customElements.define(componentName, class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'});

            const styleTag = document.createElement('link');
            styleTag.href = styleUrl;
            styleTag.rel = 'stylesheet';

            const scriptTag = document.createElement('script');
            scriptTag.src = jsBundleUrl;

            shadowRoot.appendChild(scriptTag);
            shadowRoot.appendChild(styleTag);
        }
    });
}

const microApps = [
    {jsBundleUrl: 'http://localhost:4002/static/js/bundle.js', styleSheetUrl: 'http://localhost:4002/static/css/app.css', webComponentName: 'amaze-products'}
];

microApps.forEach(app => registerAppAsWebComponent(app.jsBundleUrl, app.styleSheetUrl, app.webComponentName));

