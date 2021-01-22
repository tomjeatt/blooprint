import React, { useState } from 'react';
import { CardWrapper } from './Card.style';

interface IProps {
  content: string;
}

const Card: React.FC<IProps> = ({ content }: IProps) => {
  const [cardText, setCardText] = useState<string>(content);
  const [isEditable, setIsEditable] = useState<boolean>(true);

  const makeEditable = () => {
    setIsEditable(false);
  };

  const addClickHandler = () => {
    console.log('add');
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;

    setCardText(value);
  };

  return (
    <CardWrapper>
      <textarea value={cardText} onChange={textChangeHandler} readOnly={isEditable} />
      <button onClick={makeEditable}>Edit</button>
      <button onClick={addClickHandler}>Add</button>
    </CardWrapper>
  );
};

export default Card;
