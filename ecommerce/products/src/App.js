import React from 'react';
import ReactDOM from 'react-dom';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import ProductLists from "./ProductLists";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [{
          "name": "Generic Pencil Stylus For Apple iPad Pro 9.7/Pro 10.5/Pro 11/Pro 12.9/ipad 6th",
          "modelNumber": "",
          "price": "17.95",
          "currency": "USD",
          "originalPrice": "",
          "image": "http://thumbs3.ebaystatic.com/pict/392207295898404000000001_1.jpg",
          "sourceLink": "http://www.ebay.com.sg/itm/Generic-Pencil-Stylus-Apple-iPad-Pro-9-7-Pro-10-5-Pro-11-Pro-12-9-ipad-6th-/392207295898?var=661143286953"
        },
          {
            "name": "Generic Pencil Stylus For Apple iPad Pro 9.7/Pro 10.5/Pro 11/Pro 12.9/ipad 6th",
            "modelNumber": "",
            "price": "17.95",
            "currency": "USD",
            "originalPrice": "",
            "image": "http://thumbs3.ebaystatic.com/pict/392207295898404000000002_1.jpg",
            "sourceLink": "http://www.ebay.com.sg/itm/Generic-Pencil-Stylus-Apple-iPad-Pro-9-7-Pro-10-5-Pro-11-Pro-12-9-ipad-6th-/392207295898?var=661143286954"
          },
          {
            "name": "Generic Pencil Stylus For Apple iPad Pro 9.7/Pro 10.5/Pro 11/Pro 12.9/ipad 6th",
            "modelNumber": "",
            "price": "17.95",
            "currency": "USD",
            "originalPrice": "",
            "image": "http://thumbs1.ebaystatic.com/pict/04040_0.jpg",
            "sourceLink": "http://www.ebay.com.sg/itm/Generic-Pencil-Stylus-Apple-iPad-Pro-9-7-Pro-10-5-Pro-11-Pro-12-9-ipad-6th-/392207295898?var=0"
          },
        ]};
    }

    render() {
        return (
            <div id="App">
                <ProductLists products={this.state.products}/>
            </div>
        );
    }
}

export const renderApp = (appRoot, styleRoot) => {
    const myCache = createCache({
        container: styleRoot,
    });
    ReactDOM.render(<CacheProvider value={myCache}><App/></CacheProvider>, appRoot);
};
