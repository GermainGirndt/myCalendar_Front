import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #f3bc38;
  height: 48px;
  border-radius: 10px;
  border: 0;
  padding: 8px 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500px;
  margin-top: 16px;
  transition: background-color 0.4s;

  &:hover {
    background: ${shade(0.15, '#f3bc38')};
    color: ${shade(0.15, '#312e38')};
  }
`;
