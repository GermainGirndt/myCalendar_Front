import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#3882aa, #296d90);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 480px;
  border: 3px solid #000;
  border-radius: 2%;
  background: #fff0e3;
  padding-bottom: 16px;
`;

// Effect by route change
const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);

}
to {
  opacity: 1;
  transform: translateX(0);


}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 28px 0;
    width: 280px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
      font-size: 22px;
    }

    button {
    }

    a {
      color: #456;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #456;
    display: block;
    margin-top: 8px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
