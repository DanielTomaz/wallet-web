import React from 'react';

import { Grid, DivRegister, DivAnimation, Title, ImageForm } from './styles';

import InputDefault from '../../components/InputDefault';


const CadastroUser: React.FC = () => {
  return (
    <Grid>
      <DivRegister>
        <Title>Cadastro</Title>
        <InputDefault />
        <InputDefault />
        <InputDefault />
      </DivRegister>

      <DivAnimation>
        <ImageForm />
      </DivAnimation>
    </Grid>
  )
};

export default CadastroUser;