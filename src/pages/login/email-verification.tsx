import { Box } from '@mui/material';
import Button, { ButtonColor } from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import ArrowIcon from '../../../public/images/Arrow-login.svg';
import EmailSentIcon from '../../../public/images/email1.svg';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import LoginLayout from '../../components/Layout/Login/LoginLayout';
import { useRouter } from 'next/router';
import { white } from '../../utils/colors';
import { PageLinks } from '../../utils/consts';

const VerificationEmail: React.FunctionComponent<Props> = (props: Props) => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(PageLinks.CreateNewPassword);
  };

  return (
    <LoginLayout title="verify your email">
      <div className="login-fields">
        <Image
          src={EmailSentIcon}
          className={'email-icon'}
          width="60"
          height="60"
          alt="EmailSentIcon"
        ></Image>
        <Box textAlign={'center'}>
          <Typography color={white} opacity={0.4} variant="body1">
            We&apos;ve sent you an email verification to the email address
            provided. Please click the link to continue using Solo60 Portal.
          </Typography>
        </Box>

        <Box display={'flex'} justifyContent={'center'} marginTop={'10px'}>
          <Button
            label={'Log In'}
            color={ButtonColor.Secondary}
            onClick={handleSubmit}
            startIcon={<Image src={ArrowIcon} alt="ArrowLogin" />}
          />
        </Box>
      </div>
    </LoginLayout>
  );
};

interface Props {
  setCreatePassword: Dispatch<SetStateAction<boolean>>;
}

export default VerificationEmail;
