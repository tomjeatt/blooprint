import React, { useContext } from 'react';
import AppContext from '../../data/AppContext';
import Column from '../../components/Column';
import { BlooprintWrapper } from './Blooprint.style';

const Blooprint: React.FC = () => {
  const { title, sets } = useContext(AppContext) as IApplicationData;

  return (
    <BlooprintWrapper>
      <h2>{title}</h2>
      {sets.map((set) => {
        const { id, title, cards } = set;
        return <Column key={id} title={title} cards={cards} />;
      })}
    </BlooprintWrapper>
  );
};

export default Blooprint;
