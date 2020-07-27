import styled from 'styled-components';
import profilImg from '../../assets/profil_img.jpg';

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

export const PanelContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  margin-top: -190px;
  align-items: center;
`;
