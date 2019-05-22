import React from 'react';
import { Grid } from 'semantic-ui-react';
import styles from './App.module.css';

function App() {
  return (
    <div>
        <Grid columns={1}>
            <Grid.Row><amaze-search></amaze-search> </Grid.Row>
            <Grid.Row>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={12} className={styles.productsContainer}><amaze-products></amaze-products></Grid.Column>
                        <Grid.Column width={4}><amaze-recommendations></amaze-recommendations></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Row>
        </Grid>
    </div>
  );
}

export default App;
