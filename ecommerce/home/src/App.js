import React from 'react';
import { Grid } from 'semantic-ui-react';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.amazeSearchRef = React.createRef();
    this.state = { searchText: ''};
    this.searchClicked = this.searchClicked.bind(this);
  }

  searchClicked(event) {
    console.log(`search clicked--${event.target}`);
    this.setState({searchText: event.detail.searchText});
  }

  componentDidMount() {
    this.amazeSearchRef.current.addEventListener('search', this.searchClicked);
  }

  render() {
    return (
      <div>
        <Grid columns={1}>
          <Grid.Row><amaze-search ref={this.amazeSearchRef} title="mySearch"></amaze-search> </Grid.Row>
          <Grid.Row>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={12} className={styles.productsContainer}><amaze-products searchtext={this.state.searchText}></amaze-products></Grid.Column>
                <Grid.Column width={4}><amaze-recommendations searchtext={this.state.searchText}></amaze-recommendations></Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
