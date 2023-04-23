import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { white } from '../../utils/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import solo60Theme from '../../styles/theme';
import Button from '@mui/material/Button';

export enum ButtonColor {
  Primary = 'primary',
  Secondary = 'secondary',
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === ButtonColor.Primary
            ? {
                backgroundColor: solo60Theme.palette.primary.main,
              }
            : {
                backgroundColor: solo60Theme.palette.secondary.main,
              }),

          color: white,
          borderRadius: '1px',
          border: '0',
          padding: '24px 48px',
          outline: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '32px',
          transition: 'all 0.25s ease-in-out',
          textTransform: 'initial',
          boxShadow: 'none',

          span: {
            fontFamily: 'Uncut Sans',
            fontSize: '16px',
            lineHeight: '16px',
            textTransform: 'none',
            fontWeight: '700',
          },

          '& svg': {
            width: '16px',
            height: '16px',
          },

          ':hover': {
            transition: 'all 0.25s ease-in-out',
            border: 'none',
            cursor: 'pointer',
            boxShadow: 'none',
            ...(ownerState.color === ButtonColor.Primary
              ? {
                  backgroundColor: solo60Theme.palette.primary.main,
                }
              : {
                  backgroundColor: solo60Theme.palette.secondary.main,
                }),
          },

          '&.Mui-disabled': {
            transition: 'all 0.25s ease-in-out',
            cursor: 'not-allowed',
            span: { margin: '0', img: { display: 'none' } },
            backgroundColor: solo60Theme.palette.action.disabled,
          },
        }),
      },
    },
  },
});

const StyledBtnWrapper = styled.div<{
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}>``;

const CustomButton: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBtnWrapper startIcon={props.startIcon} endIcon={props.endIcon}>
        <Button
          disabled={props.disabled}
          type={props.type ?? 'button'}
          variant={props.variant ?? 'contained'}
          onClick={props.onClick}
          color={props.color ?? 'primary'}
        >
          {props.startIcon && !props.disabled && props.startIcon}
          {props.label && (
            <Typography variant={'button'}>{props.label}</Typography>
          )}
          {props.endIcon && props.endIcon}
        </Button>
      </StyledBtnWrapper>
    </ThemeProvider>
  );
};

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'outlined' | 'contained';
  color?:
    | 'inherit'
    | 'secondary'
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default CustomButton;
