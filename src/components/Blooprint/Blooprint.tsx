import React, { useContext } from 'react';
import AppContext from '../../data/AppContext';
import Column from '../../components/Column';
import { BlooprintWrapper, Columns } from './Blooprint.style';

const Blooprint: React.FC = () => {
  const { title, sets } = useContext(AppContext) as IApplicationData;

  const updateCardContent = (setId: number, cardId: number, updatedContent: string) => {
    console.log('from main component', setId, cardId);

    const currentSet = sets.find((set) => set.id === setId);
    const card = currentSet?.cards.find((card) => card.id === cardId);

    if (card) {
      card.content = updatedContent;
    }
  };

  return (
    <BlooprintWrapper>
      <h2>{title}</h2>
      <Columns>
        {sets.map((set) => {
          const { id } = set;
          return <Column key={id} set={set} updateCardContent={updateCardContent} />;
        })}
      </Columns>
    </BlooprintWrapper>
  );
};

export default Blooprint;
