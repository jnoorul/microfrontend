import React from 'react';
import { Grid } from 'semantic-ui-react';
import styles from './App.module.css';


function App() {
  return (
    <div>
        <Grid columns={1}>
            <Grid.Row><amaze-search class={styles.search}></amaze-search> </Grid.Row>
            <Grid.Row>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column><amaze-products></amaze-products></Grid.Column>
                        <Grid.Column><amaze-recommendations></amaze-recommendations></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Row>
        </Grid>
    </div>
  );
}

export default App;
