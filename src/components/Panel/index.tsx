import React, { useState, useEffect } from 'react';

import { PlusCircle, MinusCircle, Link } from 'react-feather';

import {
  CardContainer,
  Card,
  ImageContainer,
  ProfilImg,
  TextContainer,
} from './styles';

const Panel: React.FC = () => {
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
            <p>Avaiable Time</p>
          </TextContainer>
        </Card>
        <Card>
          <TextContainer design="delete">
            <MinusCircle />
            <p>Available Time</p>
          </TextContainer>
        </Card>
        <Card>
          <TextContainer design="link">
            <Link />
            <p>Copy Link</p>
          </TextContainer>
        </Card>
      </CardContainer>
    </>
  );
};

export default Panel;
