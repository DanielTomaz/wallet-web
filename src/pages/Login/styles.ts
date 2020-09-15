import styled from 'styled-components';
import imageFinances from '../../assets/image/Image-finances.svg';



export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'FM AN';
  height: 100vh;
  width: 100vw;
`;

export const DivLogin = styled.div`
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

export const Button = styled.button`
  height: 60px;
  width: 80%;
  background-color: var(--buttons);
  color: var(--primary);
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  margin-top: 40px;
  transition: 0.2ms;

  :hover{
    background-color: #1e8a8a;
  }
`;

export const LinkRegister = styled.a`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  color: var(--secondary);
  padding: 10px;
`;

export const ImageLogin = styled.div `
  background-image: url(${imageFinances});
  height: 650px;
  width: 515px;
  margin-top: 20%;
`;

