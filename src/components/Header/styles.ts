import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

// 192490 || 19242f || 2C3E50

export const Container = styled.div<ContainerProps>`
  background: #095d80;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: sans-serif;
    font-size: 20px;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
