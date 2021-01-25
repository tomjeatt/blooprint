import { useContext } from 'react';
import AppContext from '../../data/AppContext';

export const getSet = (setId: number): ISet | null | undefined => {
  const data = useContext(AppContext) as IApplicationData;
  const set = data.sets.find((set) => set.id === setId);

  return set ? set : null;
};
