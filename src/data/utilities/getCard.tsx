import { useContext } from 'react';
import AppContext from '../../data/AppContext';

export const getCard = (setId: number, id: number): ICard | null | undefined => {
  const data = useContext(AppContext) as IApplicationData;
  const set = data.sets.find((set) => set.id === setId);

  return set ? set.cards.find((card) => card.id === id) : null;
};
