import React, { useState, useEffect } from 'react';

import { PlusCircle, Link, Book } from 'react-feather';

import { Card, TextContainer } from './styles';

const Cards: React.FC = () => {
  const [isHover, setHover] = useState({
    create: false,
    link: false,
    delete: false,
  });

  const toggleHoverStyle = (card: 'create' | 'link' | 'delete') => {
    console.log(`Card: ${card}`);
    switch (card) {
      case 'create':
        console.log('create');
        console.log(isHover.create);
        setHover({ ...isHover, create: !isHover.create });
      case 'link':
        console.log('link');
        console.log(isHover.link);
        setHover({ ...isHover, link: !isHover.link });
      case 'delete':
        console.log('delete');
        console.log(isHover.delete);
        setHover({ ...isHover, delete: !isHover.delete });
    }

    console.log(isHover);
  };

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Card onMouseEnter={() => toggleHoverStyle('create')}>
        <TextContainer design="create">
          <PlusCircle />
          <p>Available Time</p>
        </TextContainer>
      </Card>
      <Card onMouseEnter={() => toggleHoverStyle('link')}>
        <TextContainer design="link">
          <Link />
          <p>Copy Link</p>
        </TextContainer>
      </Card>
      <Card onMouseEnter={() => toggleHoverStyle('delete')}>
        <TextContainer design="delete">
          <Book />
          <p>My Bookings</p>
        </TextContainer>
      </Card>
    </>
  );
};

export default Cards;
