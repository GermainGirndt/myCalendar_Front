import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
//296d90
export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 4px;
  padding: 8px 10px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #e54040;
    `}


  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}



  input {
    color: #333;
    flex: 1;
    width: 50%;
    margin-left: 24px;
    margin-right: 40px;
    background-color: transparent;
    border: 0;
    &:placeholder {

      color: #666360;
    }
  }

  svg {
    position: absolute;
    margin-right: 5px;

  }
`;

export const Error = styled(Tooltip)`
  height: 18px;
  margin-right: 16px;

  svg {
  }

  span {
    background: #c53030;
    color: #fff;

    &:before {
      border-color: #c53030 transparent;
    }
  }
`;
