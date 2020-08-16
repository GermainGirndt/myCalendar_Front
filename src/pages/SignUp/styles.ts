import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-size: cover;
  position: relative;
`;

export const TextContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  padding-top: 64px;
  width: 100%;
  max-width: 658px;
  height: 100%;
  background: #1f8fdf10;
  left: 0%;
  text-align: center;
  padding-bottom: 200px;

  ol {
    text-align: left;
  }
`;

export const Content = styled.div`
  position: absolute;
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
  left: 60%;
`;

// Effect by route change
const appearFromRight = keyframes`
from {
  opacity: 0;
  transform: translateX(+50px);

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

  animation: ${appearFromRight} 1.5s;

  form {
    margin: 28px 0;
    width: 280px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      font-weight: 450px;
    }

    button {
    }

    a {
      color: #246;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#246')};
      }
    }
  }

  > a {
    opacity: 0.7;
    color: #246;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#246')};
    }
  }
`;

export const Background = styled.div`
  opacity: 1;
  background: url(${signUpBackgroundImg}) no-repeat left;
  background-size: cover;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  /* filter: sepia(100%) hue-rotate(180deg) saturate(200%); */
`;
