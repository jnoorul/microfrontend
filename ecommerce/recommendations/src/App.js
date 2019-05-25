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
    const searchText = this.props.searchText || 'iphone';
    const searchResults = await getRecommendations(searchText);
    this.setState({products: searchResults});
  }

  async componentDidUpdate(prevProps) {
    if( this.props.searchText !== prevProps.searchText) {
      const searchResults = await getRecommendations(this.props.searchText);
      this.setState({products: searchResults});
    }
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
