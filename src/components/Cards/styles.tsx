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
  margin: 0px;
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

  width: ${({ isHovered, design }: CardProps) =>
    isHovered[design] ? '230px' : '200px'};
`;

// 054d70
export const Card = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 0px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  cursor: ${({ isHovered, design }: CardProps) =>
    isHovered[design] ? 'pointer' : 'normal'};

  border: ${({ isHovered, design }: CardProps) =>
    isHovered[design] ? '2px solid #135' : '0px'};
  width: ${({ isHovered, design }: CardProps) =>
    isHovered[design] ? '220px' : '200px'};
  transform: ${({ isHovered, design }: CardProps) =>
    isHovered[design] ? 'translateY(-10px)' : '0'};

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
    }
  }
`;
