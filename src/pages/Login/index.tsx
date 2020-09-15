import React from 'react';
import { Grid, DivLogin, DivAnimation, Title, Button,  LinkRegister, ImageLogin } from './styles';
import InputDefault from '../../components/InputDefault';


const Login: React.FC = () => {
  return (
    <Grid>
      
      <DivLogin>
        <Title>Login</Title>
        <InputDefault />
        <InputDefault />
        <Button>Login</Button>
        <LinkRegister>Cadastrar-se</LinkRegister>
      </DivLogin>

      <DivAnimation>
          <ImageLogin />
      </DivAnimation>
    </Grid>
  )

};


export default Login;