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

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  border: 1px solid #aaa;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
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
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  height: 72px;
  p {
    margin-left: 6px;
  }
  color: ${({ design }: ButtonProps) =>
    (design === 'create' && '#2cd278') ||
    (design === 'delete' && '#e40006') ||
    (design === 'link' && '#ff872c')};

  background: ${({ design }: ButtonProps) =>
    (design === 'create' && '#cbfbe0') ||
    (design === 'delete' && '#ffcfd6') ||
    (design === 'link' && '#ffd786')};
`;

export const CalendarContainer = styled.div`
  padding: 32px;

  align-items: center;
  justify-content: center;
  margin-top: 48px;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 2px;
  width: 200px;
  justify-content: center;
  align-items: center;
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
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

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
