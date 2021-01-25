import React, { useState } from 'react';
import { CardWrapper } from './Card.style';

interface IProps {
  content: string;
  id: number;
  setId: number;
  updateCardContent: (setId: number, cardId: number, updatedContent: string) => void;
}

const Card: React.FC<IProps> = ({ content, id, setId, updateCardContent }: IProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [cardContent, setCardContent] = useState<string>(content);

  const makeEditable = () => {
    setIsEditable(true);
  };

  const addClickHandler = () => {
    console.log('add');
  };

  const handleUpdateCardContent = () => {
    setIsEditable(false);

    updateCardContent(setId, id, cardContent);
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;

    setCardContent(value);
  };

  return (
    <CardWrapper>
      {isEditable ? (
        <>
          <textarea value={cardContent} onChange={textChangeHandler} />
          <button onClick={handleUpdateCardContent}>Save</button>
        </>
      ) : (
        <>
          <textarea value={cardContent} readOnly />
          <button onClick={makeEditable}>Edit</button>
        </>
      )}
      <button onClick={addClickHandler}>Add</button>
    </CardWrapper>
  );
};

export default Card;
