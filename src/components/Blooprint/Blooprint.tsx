import React, { useContext } from 'react';
import AppContext from '../../data/AppContext';
import Column from '../../components/Column';
import { BlooprintWrapper, Columns } from './Blooprint.style';

const Blooprint: React.FC = () => {
  const { title, sets } = useContext(AppContext) as IApplicationData;

  return (
    <BlooprintWrapper>
      <h2>{title}</h2>
      <Columns>
        {sets.map((set) => {
          const { id } = set;
          return <Column key={id} set={set} />;
        })}
      </Columns>
    </BlooprintWrapper>
  );
};

export default Blooprint;
