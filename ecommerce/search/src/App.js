import React from 'react';
import { Search } from 'semantic-ui-react';
import styles from './App.module.css';
import { getKeywords } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: '', results: [], isLoading: false};
    this.onKeywordChange = this.onKeywordChange.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.searchContainerRef = React.createRef();
  }

  handleResultSelect(e, { result }) {
    this.setState({ keyword: result.title });
    const searchEvent = new CustomEvent('search',{ detail: {searchText: result.title}, bubbles: true, composed: true});
    this.searchContainerRef.current.dispatchEvent(searchEvent);
  }

  async onKeywordChange(event, {value}) {
    this.setState({keyword: value, isLoading: true});
    const keywords = await getKeywords(value);
    setTimeout(this.setState({results: keywords, isLoading: false}), 300);
  }
  render() {
    return (
      <div ref={this.searchContainerRef} className={styles.header}>
        <Search
          value={this.state.keyword}
          results={this.state.results}
          loading={this.state.isLoading}
          onSearchChange={this.onKeywordChange}
          onResultSelect={this.handleResultSelect}
          className={styles.searchBox}
          placeholder="Search by product name"
          input={{ icon: 'search', iconPosition: 'left', fluid: true }}
        />
      </div>
    );
  }
}

export default App;
