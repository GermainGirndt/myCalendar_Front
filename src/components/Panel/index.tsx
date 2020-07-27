import React, { useState, useEffect } from 'react';

import { PlusCircle, Link, Book } from 'react-feather';

import {
  CardContainer,
  Card,
  ImageContainer,
  ProfilImg,
  TextContainer,
} from './styles';

const Panel: React.FC = () => {
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <ProfilImg />
        </ImageContainer>
        <Card>
          <TextContainer design="create">
            <PlusCircle />
            <p>Available Time</p>
          </TextContainer>
        </Card>
        <Card>
          <TextContainer design="link">
            <Link />
            <p>Copy Link</p>
          </TextContainer>
        </Card>
        <Card>
          <TextContainer design="delete">
            <Book />
            <p>My Bookings</p>
          </TextContainer>
        </Card>
      </CardContainer>
    </>
  );
};

export default Panel;
