import React from 'react';
import Summary from './Summary';

export default function Recommendations({products}) {
  return(
      products.map(product => <Summary summary={product}/>)
  );
}