import React from 'react';
import { CardWrapper } from './Card.style';

const Card: React.FC = () => {
  const editClickHandler = () => {
    console.log('edit');
  };

  const addClickHandler = () => {
    console.log('add');
  };

  return (
    <CardWrapper>
      <p>Card</p>
      <button onClick={editClickHandler}>Edit</button>
      <button onClick={addClickHandler}>Add</button>
    </CardWrapper>
  );
};

export default Card;
