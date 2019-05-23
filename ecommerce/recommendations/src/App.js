import React from 'react';
import './App.css';
import {Header} from 'semantic-ui-react';
import Recommendations from "./Recommedations";
import {getRecommendations} from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  async componentDidMount() {
    const searchResults = await getRecommendations('airpod');
    this.setState({products: searchResults});

  }

  render() {
    return (
      <div className="App">
        <Header size="medium">Featured recommendations</Header>
        <Recommendations products={this.state.products}/>
      </div>
    );
  }
}

export default App;
