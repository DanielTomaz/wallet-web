import styled from 'styled-components';

import imageForm from '../../assets/image/Image-form.svg';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'FM AN';
  height: 100vh;
  width: 100vw;
`;

export const DivRegister = styled.div`
  grid-area: FM;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary);
`;

export const DivAnimation = styled.div`
  grid-area: AN;
  align-items: center;
  background-color: var(--buttons);
`;

export const Title = styled.h1`
  font-size: 80px;
  color: var(--secondary);
  font-family: 'Roboto';
  text-align: center;
  margin: 10% 0 5% 0;
`;

export const ImageForm = styled.div `
  background-image: url(${imageForm});
  height: 500px;
  width: 650px;
  margin-top: 20%;
`;