import React from 'react';
import styled from '@emotion/styled';
import { Image, Grid, Header } from 'semantic-ui-react';

const SummaryContainer = styled.div`
  border-bottom: solid 1px #ddd;
`;

const ImageContainer = styled.div`
  padding: 1rem;
`;

const DetailsContainer = styled.div`
  padding: 1rem;
`;

export default function Summary({summary}) {
  return(
    <SummaryContainer>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <ImageContainer>
            <Image
              src={summary.image}
              as='a'
              size='small'
              verticalAlign="middle"
              fluid
              href='http://google.com'
              target='_blank'
            />
            </ImageContainer>
          </Grid.Column>
          <Grid.Column width={13}>
            <DetailsContainer>
              <Header size="medium">{summary.name}</Header>
              <Header size="tiny">{`${summary.currency} ${summary.price}`}</Header>
            </DetailsContainer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </SummaryContainer>
  );
}