import React, { useState } from "react";
import {
  Container,
  LoginContainer,
  TitleWrapper,
  InputWrapper,
  ForgetPasswordWrapper,
  ButtonWrapper,
  RegisterWrapper
} from "./styles";
import Tab from "./Tab";
import Text from "../../components/Text/Span";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const [isStudentLogin, setIsStudentLogin] = useState(true);

  return (
    <Container>
      <LoginContainer>
        <Tab isStudentLogin={isStudentLogin} setIsStudentLogin={setIsStudentLogin}/>
        <TitleWrapper>
          <Text size={'29px'} weight={'400'} color={'#42495B'}>
            { isStudentLogin ? 'Login Siswa TAN Studies' : 'Login Pengajar TAN Studies' }
          </Text>
        </TitleWrapper>
        <InputWrapper>
          <Input type={"text"} placeholder={"Email"} name={"email"} />
        </InputWrapper>
        <InputWrapper>
          <Input type={"password"} placeholder={"Password"} name={"password"} />
        </InputWrapper>
        <ButtonWrapper>
          <Button text={'LOGIN'} color={'#4CAF50'}/>
        </ButtonWrapper>
        <ForgetPasswordWrapper>
          <Text size={'16px'} weight={'400'} color={'#737373'}>Forgot your password?</Text>
        </ForgetPasswordWrapper>
        <RegisterWrapper>
          <Text size={'16px'} weight={'400'} color={'#737373'}>Belum punya akun?</Text>
        </RegisterWrapper>
        <ButtonWrapper>
          <Button text={'DAFTAR SISWA'} color={'#2D9CDB'}/>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button text={'DAFTAR PENGAJAR'} color={'#2579A9'}/>
        </ButtonWrapper>
      </LoginContainer>
    </Container>
  );
};

export default Login;