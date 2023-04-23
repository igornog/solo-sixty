import React, { Dispatch, SetStateAction, useState } from 'react';
import Button, { ButtonColor } from '../../components/Button/Button';
import { Box } from '@mui/material';
import TextField, { TextFieldType } from '../../components/TextField/TextField';
import Typography from '../../components/Typography/Typography';
import { isValidEmail } from '../../utils/emails';
import Communication from '../../../public/images/Communication.svg';
import Image from 'next/image';
import LoginLayout from '../../components/Layout/Login/LoginLayout';
import { useRouter } from 'next/router';
import { white } from '../../utils/colors';
import { PageLinks } from '../../utils/consts';

const ForgotPassword: React.FunctionComponent<Props> = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    router.push(PageLinks.EmailVerification);
  };

  return (
    <LoginLayout title="forgot my password">
      <div className="login-fields forgot-password">
        <Typography color={white} opacity={0.4} variant="body1">
          Don&apos;t worry! Just enter the email address linked to this account
          and we&apos;ll send a recovery link.
        </Typography>

        <TextField
          label="email"
          $underlineBorder
          $darkMode
          placeholder={'Enter email'}
          type={TextFieldType.Email}
          helperText={'Something went wrong'}
          onValueChange={setEmail}
        />

        <Box display={'flex'} justifyContent={'center'} marginTop={'10px'}>
          <Button
            label={'Reset Password'}
            color={ButtonColor.Secondary}
            onClick={handleSubmit}
            startIcon={<Image src={Communication} alt="Communication" />}
            disabled={!isValidEmail(email)}
          />
        </Box>
      </div>
    </LoginLayout>
  );
};

interface Props {
  setVerificationSent: Dispatch<SetStateAction<boolean>>;
}

export default ForgotPassword;
