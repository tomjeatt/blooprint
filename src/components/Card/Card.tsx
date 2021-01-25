import React, { useState } from 'react';
import { getCard } from '../../data/utilities/getCard';
import { CardWrapper } from './Card.style';

interface IProps {
  content: string;
  id: number;
  parentId: number;
}

const Card: React.FC<IProps> = ({ content, id, parentId }: IProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [cardContent, setCardContent] = useState<string>(content);

  const makeEditable = () => {
    setIsEditable(true);
  };

  const addClickHandler = () => {
    console.log('add');
  };

  const updateCardContent = () => {
    setIsEditable(false);

    const thisCard = getCard(parentId, id);

    if (thisCard) {
      thisCard.content = cardContent;
    }
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
          <textarea value={content} onChange={textChangeHandler} />
          <button onClick={updateCardContent}>Save</button>
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
