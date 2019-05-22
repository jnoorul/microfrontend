import React from 'react';
import ReactDOM from 'react-dom';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import styled from '@emotion/styled';

const StyledH1 = styled.h1`
    color: yellow;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true};
    }

    render() {
        return (
            <div id="App">
                <StyledH1>Welcome to Products!</StyledH1>
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
