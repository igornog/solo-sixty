import { Box } from '@mui/material';
import Button, { ButtonColor } from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import { green1, red1, white } from '../../utils/colors';
import styled from 'styled-components';
import ArrowIcon from '../../../public/images/Arrow-login.svg';
import { useCallback, useEffect, useState } from 'react';
import TextField, { TextFieldType } from '../../components/TextField/TextField';
import { hasCapitalLetter, hasNumber } from '../../utils/formValidation';
import { Error } from '../../types';
import Image from 'next/image';
import LoginLayout from '../../components/Layout/Login/LoginLayout';
import { useRouter } from 'next/router';
import { PageLinks } from '../../utils/consts';

const StyledUnorderedList = styled.ul`
  margin: 0;
  padding: 10px 15px 0;

  li {
    padding: 0;
  }
`;
const PasswordStrengthBox = styled(Box)<{
  strongPassword?: boolean | undefined;
}>`
  color: ${white};
  span {
    color: ${({ strongPassword }) =>
      strongPassword === undefined
        ? white
        : strongPassword === true
        ? green1
        : red1};
  }
`;

const CreatePassword: React.FunctionComponent = () => {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordTips, setPasswordTips] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongPasswordLength, setWrongPasswordLength] = useState<Error>({
    isError: false,
    errorText: '',
  });
  const [wrongPasswordCapitalLetter, setwrongPasswordCapitalLetter] =
    useState<Error>({ isError: false, errorText: '' });
  const [wrongPasswordNumber, setwrongPasswordNumber] = useState<Error>({
    isError: false,
    errorText: '',
  });

  const checkPasswordError = useCallback(() => {
    let hasError = false;

    if (password.length < 8) {
      setWrongPasswordLength({
        isError: true,
        errorText: 'Password must be at least 8 characters long.',
      });
      hasError = true;
    } else {
      setWrongPasswordLength({
        isError: false,
        errorText: '',
      });
    }
    if (!hasCapitalLetter(password)) {
      setwrongPasswordCapitalLetter({
        isError: true,
        errorText: 'Password must contain at least one capital letter.',
      });
      hasError = true;
    } else {
      setwrongPasswordCapitalLetter({
        isError: false,
        errorText: '',
      });
    }
    if (!hasNumber(password)) {
      setwrongPasswordNumber({
        isError: true,
        errorText: 'Password must contain at least one number (0-9)',
      });
      hasError = true;
    } else {
      setwrongPasswordNumber({
        isError: false,
        errorText: '',
      });
    }

    setWrongPassword(hasError);
  }, [password]);

  useEffect(() => {
    checkPasswordError();
  }, [password, checkPasswordError]);

  useEffect(() => {
    // resetting error messages when password input is cleared
    if (!password.length) {
      setWrongPassword(false);
      setPasswordTips(false);
    }
  }, [password]);

  const formValidation = () => {
    if (wrongPassword) {
      setPasswordTips(true);
    } else {
      router.push(PageLinks.Login);
    }
  };

  const checkPasswordStrength = () => {
    let isStrongPassword = wrongPassword
      ? wrongPasswordLength.isError ||
        wrongPasswordCapitalLetter.isError ||
        wrongPasswordNumber.isError
        ? false
        : true
      : undefined;

    return isStrongPassword;
  };

  const checkPasswordMatch = () => {
    let isMatch =
      password.length > 0 && password === confirmPassword
        ? true
        : confirmPassword.length > 0
        ? false
        : undefined;

    return isMatch;
  };

  return (
    <LoginLayout title="create my password">
      <div className="login-fields">
        <TextField
          label="New Password"
          $underlineBorder
          $darkMode
          $passwordStrength
          $isError={password.length ? !wrongPassword : undefined}
          placeholder={'Enter password'}
          type={TextFieldType.Password}
          onValueChange={setPassword}
        />

        {passwordTips &&
        (wrongPasswordLength.isError ||
          wrongPasswordCapitalLetter.isError ||
          wrongPasswordNumber.isError) ? (
          <PasswordStrengthBox strongPassword={checkPasswordStrength()}>
            <Typography>
              The password you&apos;ve chosen is <span>too weak</span> - try the
              following:
            </Typography>
            <StyledUnorderedList>
              {wrongPasswordLength.isError ? (
                <li>
                  <Typography>{wrongPasswordLength.errorText}</Typography>
                </li>
              ) : (
                ''
              )}
              {wrongPasswordCapitalLetter.isError ? (
                <li>
                  <Typography>
                    {wrongPasswordCapitalLetter.errorText}
                  </Typography>
                </li>
              ) : (
                ''
              )}
              {wrongPasswordNumber.isError ? (
                <li>
                  <Typography>{wrongPasswordNumber.errorText}</Typography>
                </li>
              ) : (
                ''
              )}
            </StyledUnorderedList>
          </PasswordStrengthBox>
        ) : null}

        <TextField
          label="Confirm New Password"
          $underlineBorder
          $darkMode
          $isError={checkPasswordMatch()}
          placeholder={'Confirm Password'}
          type={TextFieldType.Password}
          onValueChange={setConfirmPassword}
        />

        {password !== confirmPassword && confirmPassword.length ? (
          <Typography color={red1}>Passwords doesn&apos;t match.</Typography>
        ) : null}

        <Box display={'flex'} justifyContent={'center'} marginTop={'10px'}>
          <Button
            label={'Create New Password'}
            onClick={formValidation}
            color={ButtonColor.Secondary}
            disabled={!password.length || !confirmPassword.length}
            startIcon={<Image src={ArrowIcon} alt="ArrowLogin" />}
          />
        </Box>
      </div>
    </LoginLayout>
  );
};

export default CreatePassword;
