import styled from 'styled-components';

interface ButtonProps {
  design?: 'create' | 'delete' | 'link';
}

interface CardProps {
  total?: boolean;
}

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 72px;

  &:hover {
    font-size: 20px;
  }
  p {
    margin-left: 6px;
  }

  color: ${({ design }: ButtonProps) =>
    (design === 'create' && '#11c06c') ||
    (design === 'delete' && '#e40006') ||
    (design === 'link' && '#ff872c')};

  background: ${({ design }: ButtonProps) =>
    (design === 'create' && '#cbfbe0') ||
    (design === 'delete' && '#ffcfd6') ||
    (design === 'link' && '#ffd786')};
`;
// 054d70
export const Card = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 1px;
  width: 200px;
  justify-content: center;
  align-items: center;
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#cef')};
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  &:hover {
    cursor: pointer;
    border: 2px solid #222;
    width: 220px;

    transform: translateY(-10px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
    }
  }
`;
