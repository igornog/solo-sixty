/* eslint-disable prettier/prettier */
import { ButtonBase } from '@mui/material';
import { ColorVariant } from '../../constants';

interface Props {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  colorVariant?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  dataTestid?: string;
  className?: string;
}

const CustomButton: React.FunctionComponent<Props> = (props) => {
  return (
    <ButtonBase
      type={props.type ?? 'button'}
      onClick={props.onClick}
      data-testid={props.dataTestid}
      className={`
        ${props.className}
        ${props.colorVariant === ColorVariant.Primary ? `bg-primary [&:hover]:bg-primary` : 'bg-secondary [&:hover]:bg-secondary'}
        text-white
        rounded-4px
        my-0
        ${props.size === 'small' ? 'py-2 px-4' : 'py-3 px-12'}
      `}
    >
      {props.startIcon && props.startIcon}
      <p className={'font-inter font-semibold normal-case'}>{props.label}</p>
      {props.endIcon && props.endIcon}
    </ButtonBase>
  );
};

export default CustomButton;
