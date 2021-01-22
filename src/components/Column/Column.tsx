import React from 'react';
import Card from '../../components/Card';

interface IProps {
  cards: Array<ICard>;
  title: string;
}

const Column: React.FC<IProps> = ({ title, cards }: IProps) => {
  return (
    <>
      <h2>{title}</h2>
      {cards.map((card) => {
        const { id, content } = card;
        return <Card key={id} content={content} />;
      })}
      ;
    </>
  );
};

export default Column;
