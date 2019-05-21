import React from 'react';
import ReactDOM from 'react-dom';
import styled, {StyleSheetManager} from 'styled-components';


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
                <StyledH1 css={StyledH1}>Welcome to Products!</StyledH1>
                <StyledH1> Products paragraph </StyledH1>
            </div>
        );
    }
}


// class ProductApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.styleDiv = null;
//
//         this.state = {styleDivLoaded: false};
//
//         this.setStyleDivRef = element => {
//             this.styleDiv = element;
//             if(!this.state.styleDivLoaded) {
//                 this.setState({styleDivLoaded: true});
//             }
//         };
//
//     }
//
//     render() {
//         return (
//             <div>
//                 <style ref={this.setStyleDivRef}> </style>
//                 {
//                     this.state.styleDivLoaded &&
//                     <StyleSheetManager target={this.styleDiv}>
//                         <div className="App">
//                             <StyledH1>Welcome to Products!</StyledH1>
//                         </div>
//                     </StyleSheetManager>
//                 }
//             </div>
//         );
//     }
// }


export const renderApp = (appRoot, styleRoot) => {
    ReactDOM.render(<StyleSheetManager target={styleRoot}><App/></StyleSheetManager>, appRoot);
};
