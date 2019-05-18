import React from 'react';
import './index.css';

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
    {
        jsBundleUrl: 'http://localhost:4001/static/js/bundle.js',
        styleSheetUrl: 'http://localhost:4001/static/css/app.css',
        webComponentName: 'amaze-search'
    },
    {
        jsBundleUrl: 'http://localhost:4002/static/js/bundle.js',
        styleSheetUrl: 'http://localhost:4002/static/css/app.css',
        webComponentName: 'amaze-products'
    },
    {
        jsBundleUrl: 'http://localhost:4003/static/js/bundle.js',
        styleSheetUrl: 'http://localhost:4003/static/css/app.css',
        webComponentName: 'amaze-recommendations'
    }
];

microApps.forEach(app => registerAppAsWebComponent(app.jsBundleUrl, app.styleSheetUrl, app.webComponentName));

