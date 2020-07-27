import React from 'react';

import Cards from '../Cards';

import { PanelContainer, ImageContainer, ProfilImg } from './styles';

const Panel: React.FC = () => {
  return (
    <>
      <PanelContainer>
        <ImageContainer>
          <ProfilImg />
        </ImageContainer>
        <Cards />
      </PanelContainer>
    </>
  );
};

export default Panel;
