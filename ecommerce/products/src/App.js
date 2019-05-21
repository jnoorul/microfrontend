import React from 'react';
import ReactDOM from 'react-dom';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import styled from '@emotion/styled';

const StyledP = styled.p`
    color: yellow;
`;

const StyledH1 = styled.h1`
    color: yellow;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ show: !this.state.show});
    }

    render() {
        return (
            <div id="App">
                <button onClick={this.toggle}>show/hide</button>
                {this.state.show && <p> {this.state.show} </p>}
                <StyledH1>Welcome to Products!</StyledH1>
                <StyledP> Products paragraph </StyledP>
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
