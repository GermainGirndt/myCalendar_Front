import React, { useState, useEffect } from 'react';

import { PlusCircle, Link, Book } from 'react-feather';

import { Card, TextContainer } from './styles';

const Cards: React.FC = () => {
  const [isHovered, setHovered] = useState({
    create: false,
    link: false,
    delete: false,
  });

  const toggleHoverStyle = (cardName: 'create' | 'link' | 'delete') => {
    console.log(`Card Name: ${cardName}`);

    if (cardName === 'create') {
      console.log('create');
      setHovered({ ...isHovered, create: !isHovered.create });
      console.log(isHovered.create);
    } else if (cardName === 'link') {
      console.log('link');
      setHovered({ ...isHovered, link: !isHovered.link });
      console.log(isHovered.link);
    } else if (cardName === 'delete') {
      console.log('delete');
      setHovered({ ...isHovered, delete: !isHovered.delete });
      console.log(isHovered.delete);
    }
    console.log(isHovered);
  };

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Card
        isHovered={isHovered}
        design="create"
        onMouseLeave={() => toggleHoverStyle('create')}
        onMouseEnter={() => toggleHoverStyle('create')}
      >
        <TextContainer design="create" isHovered={isHovered}>
          <PlusCircle />
          <p>Available Time</p>
        </TextContainer>
      </Card>
      <Card
        isHovered={isHovered}
        design="link"
        onMouseLeave={() => toggleHoverStyle('link')}
        onMouseEnter={() => toggleHoverStyle('link')}
      >
        <TextContainer design="link" isHovered={isHovered}>
          <Link />
          <p>Copy Link</p>
        </TextContainer>
      </Card>
      <Card
        isHovered={isHovered}
        design="delete"
        onMouseLeave={() => toggleHoverStyle('delete')}
        onMouseEnter={() => toggleHoverStyle('delete')}
      >
        <TextContainer design="delete" isHovered={isHovered}>
          <Book />
          <p>My Bookings</p>
        </TextContainer>
      </Card>
    </>
  );
};

export default Cards;
