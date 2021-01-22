import React, { useContext } from 'react';
import AppContext from '../../data/AppContext';
import Column from '../../components/Column';

const Blooprint: React.FC = () => {
  const { title, sets } = useContext(AppContext) as IApplicationData;

  return (
    <>
      <h2>{title}</h2>
      {sets.map((set) => {
        const { id, title, cards } = set;
        return <Column key={id} title={title} cards={cards} />;
      })}
      ;
    </>
  );
};

export default Blooprint;
