import React from 'react';
import { Search } from 'semantic-ui-react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.header}>
      <Search className={styles.searchBox} placeholder="Search by product name"
          input={{ icon: 'search', iconPosition: 'left', fluid: true }}
      />
    </div>
  );
}

export default App;
