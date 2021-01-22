import React from 'react';
import Card from '../../components/Card';
import { ColumnWrapper } from './Column.style';

interface IProps {
  cards: Array<ICard>;
  title: string;
}

const Column: React.FC<IProps> = ({ title, cards }: IProps) => {
  return (
    <ColumnWrapper>
      <h2>{title}</h2>
      {cards.map((card) => {
        const { id, content } = card;
        return <Card key={id} content={content} />;
      })}
      ;
    </ColumnWrapper>
  );
};

export default Column;
