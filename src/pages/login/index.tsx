import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button, { ButtonColor } from '../../components/Button/Button';
import TextField, { TextFieldType } from '../../components/TextField/TextField';
import Typography from '../../components/Typography/Typography';
import { Box } from '@mui/material';
import { red1, white } from '../../utils/colors';

import ArrowLogin from '../../../public/images/Arrow-login.svg';
import PasswordIcon from '../../../public/images//password.svg';
import styled from 'styled-components';
import LoginLayout from '../../components/Layout/Login/LoginLayout';
import { PageLinks } from '../../utils/consts';
import {
  Controller,
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

const StyledForgetPasswordBox = styled(Box)`
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  top: -10px;

  p {
    letter-spacing: 0;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Login: React.FunctionComponent = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <LoginLayout title={'welcome to solo60'}>
      <form className="login-fields" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label={'email'}
              formValidation
              $underlineBorder
              $darkMode
              placeholder={'Enter email'}
              type={TextFieldType.Email}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label={'password'}
              formValidation
              $underlineBorder
              $darkMode
              placeholder={'Enter password'}
              type={TextFieldType.Password}
            />
          )}
        />

        <StyledForgetPasswordBox
          onClick={() => router.push(PageLinks.ForgotPassword)}
        >
          <Image src={PasswordIcon} alt={'PasswordIcon'} />
          <Typography variant={'body1'} color={white} opacity={0.4}>
            Forgot Password?
          </Typography>
        </StyledForgetPasswordBox>

        <Box display={'flex'} justifyContent={'center'}>
          <Button
            label={'Log In'}
            color={ButtonColor.Secondary}
            type={'submit'}
            startIcon={
              <Image
                src={ArrowLogin}
                alt={'ArrowLogin'}
                className="start-icon"
              />
            }
            disabled={!isValid}
          />
        </Box>
      </form>
    </LoginLayout>
  );
};

export default Login;
