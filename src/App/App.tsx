import React from 'react';
import AppContext from '../data/AppContext';
import Theme from '../theme/Theme';
import Blooprint from '../components/Blooprint';

const applicationData = {
  title: 'Example blooprint',
  sets: [
    {
      title: 'Customer tasks',
      id: 1,
      cards: [
        {
          id: 1,
          content: '',
        },
        {
          id: 2,
          content: 'Tell supplier I am moving out of the property',
        },
        {
          id: 3,
          content: '',
        },
        {
          id: 4,
          content: '',
        },
        {
          id: 5,
          content: 'Receive welcome comm via post or email',
        },
      ],
    },
    {
      title: 'Front stage staff tasks',
      id: 2,
      cards: [
        {
          id: 1,
          content: '',
        },
        {
          id: 2,
          content: 'Call centre agent collects move out date and personal information',
        },
        {
          id: 3,
          content: '',
        },
        {
          id: 4,
          content: '',
        },
        {
          id: 5,
          content: 'Receive welcome comm via post or email',
        },
      ],
    },
    {
      title: 'Back stage staff tasks',
      id: 3,
      cards: [
        {
          id: 1,
          content: '',
        },
        {
          id: 2,
          content: '',
        },
        {
          id: 3,
          content: '',
        },
        {
          id: 4,
          content: '',
        },
        {
          id: 5,
          content: 'If the person calls, the agent is able to explain technobabble',
        },
      ],
    },
  ],
};

const App: React.FC = () => {
  return (
    <main>
      <AppContext.Provider value={applicationData}>
        <Theme>
          <h1>Blooprint</h1>
          <Blooprint />
        </Theme>
      </AppContext.Provider>
    </main>
  );
};

export default App;
