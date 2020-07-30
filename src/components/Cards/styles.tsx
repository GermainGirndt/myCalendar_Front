import styled from 'styled-components';

interface CardProps {
  design: 'create' | 'delete' | 'link';
  isHovered: isHovered;
}

interface isHovered {
  create: boolean;
  delete: boolean;
  link: boolean;
}

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 72px;

  color: ${({ design }: CardProps) =>
    (design === 'create' && '#11c06c') ||
    (design === 'delete' && '#e40006') ||
    (design === 'link' && '#ff872c')};

  background: ${({ design }: CardProps) =>
    (design === 'create' && '#cbfbe0') ||
    (design === 'link' && '#ffd786') ||
    (design === 'delete' && '#ffcfd6')};

  font-size: ${({ design, isHovered }: CardProps) =>
    isHovered[design] ? '20px' : '18px'};
`;

// 054d70
export const Card = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 1px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  cursor: ${({ isHovered, design }: CardProps) =>
    isHovered[design] ? 'pointer' : 'normal'};

  &:hover {
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
