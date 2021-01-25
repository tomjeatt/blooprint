import React from 'react';
import Card from '../../components/Card';
import { ColumnWrapper } from './Column.style';

interface IProps {
  set: ISet;
  updateCardContent: (setId: number, cardId: number, updatedContent: string) => void;
}

const Column: React.FC<IProps> = ({ set: { id: setId, title, cards }, updateCardContent }: IProps) => {
  return (
    <ColumnWrapper>
      <h2>{title}</h2>
      {cards.map((card) => {
        const { id, content } = card;
        return <Card key={id} id={id} setId={setId} content={content} updateCardContent={updateCardContent} />;
      })}
    </ColumnWrapper>
  );
};

export default Column;
