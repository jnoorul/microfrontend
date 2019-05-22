import React from 'react';
import styles from './App.module.css';
import { Search } from 'semantic-ui-react';

function App() {
  return (
    <div className={styles.header}>
      <Search className={styles.searchBox}
          input={{ icon: 'search', iconPosition: 'left' }}
      />
    </div>
  );
}

export default App;
