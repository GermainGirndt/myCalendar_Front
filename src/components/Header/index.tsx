import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      {/* <p>myAppointment</p> */}
      <nav>
        {
          // Todo
        }
      </nav>
    </header>
  </Container>
);

export default Header;
