import React from 'react';
import Theme from '../theme/Theme';
import Column from '../components/Column';

const App: React.FC = () => {
  return (
    <main>
      <Theme>
        <h1>Blooprint</h1>
        <Column />
      </Theme>
    </main>
  );
};

export default App;
