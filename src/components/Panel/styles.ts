import styled from 'styled-components';
import profilImg from '../../assets/profil_img.jpg';

interface ButtonProps {
  design?: 'create' | 'delete' | 'link';
}

interface CardProps {
  total?: boolean;
}

interface TextContainerProps {
  type: string;
}
export const ImageContainer = styled.div`
  position: relative;
`;

export const ProfilImg = styled.div`
  background-image: url(${profilImg});
  background-size: 220px;
  background-position-y: -15px;
  width: 220px;
  height: 220px;
  border: 1px solid #024;
  border-radius: 50%;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  margin-top: -190px;
  align-items: center;
`;

export const ProfilPhotoContainer = styled.div`
  width: 232px;
  height: 232px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  height: 72px;
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

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
    }
  }
`;
