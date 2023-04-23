import Image from 'next/image';
import solo60Logo from '../../../../public/images/logo-white.svg';
import Background from './BackgroundAnimation';
import styled from 'styled-components';
import { grey3, grey4, white } from '../../../utils/colors';
import { Box } from '@mui/material';
import Typography from '../../Typography/Typography';

const LoginWrapper = styled(Box)`
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  img {
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
}
`;
const StyledLogo = styled(Image)`
  position: absolute;
  top: 0;
  margin: 100px 0 0;
}
`;
const StyledLoginBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: ${grey4};

  transition: all 0.25s ease-in-out;
  width: 500px;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
  }

  .login-header {
    width: 100%;
    border-radius: 1px;
    top: 0px;
    left: 0;
    text-align: center;

    h3 {
      padding: 30px;
      background-color: ${grey3};
      color: ${white};
      font-weight: 400;
      font-size: 32px;
      line-height: 34px;
    }
  }

  .login-fields {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .email-icon {
      align-self: center;
    }

    button {
      img {
        position: relative;
        top: -0.5px;
        left: -10px;
      }
    }

    p {
      letter-spacing: 0;
    }

    &.forgot-password {
      button {
        img {
          top: -2px;
        }
      }
    }
  }
`;

const LoginLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <LoginWrapper>
      <Background />
      <StyledLogo src={solo60Logo} alt="solo60-Logo" />
      <StyledLoginBox>
        <div className="login-header">
          <Typography variant="h3">{props.title}</Typography>
        </div>
        {props.children}
      </StyledLoginBox>
    </LoginWrapper>
  );
};

interface Props {
  title: string;
  children: React.ReactNode;
}

export default LoginLayout;
