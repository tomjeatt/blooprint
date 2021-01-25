import React from 'react';
import Card from '../../components/Card';
import { ColumnWrapper } from './Column.style';

interface IProps {
  set: ISet;
}

const Column: React.FC<IProps> = ({ set: { id, title, cards } }: IProps) => {
  return (
    <ColumnWrapper>
      <h2>{title}</h2>
      {cards.map((card) => {
        const { id, content } = card;
        return <Card key={id} id={id} parentId={id} content={content} />;
      })}
    </ColumnWrapper>
  );
};

export default Column;
