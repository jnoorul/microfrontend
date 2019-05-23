import React from 'react';
import {Image, Grid, Header} from 'semantic-ui-react';
import styles from './Summary.module.css';

export default function Summary({summary}) {
  return (
    <div className={styles.summaryContainer}>
      <Grid>
        <Grid.Row>
          <div className={styles.imageContainer}>
            <Image
              src={summary.image}
              as='a'
              size='tiny'
              verticalAlign="middle"
              centered
              fluid
              href='http://google.com'
              target='_blank'
            />
          </div>
          <div className={styles.detailsContainer}>
            <Header size="tiny">{summary.name}</Header>
            <Header as="h6">{`${summary.currency} ${summary.price}`}</Header>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  );
}