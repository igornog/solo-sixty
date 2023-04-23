import { Button } from '@mui/material';
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
    <Button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      size={props.size ?? 'medium'}
      data-testid={props.dataTestid}
      className={`
        ${
          props.colorVariant === ColorVariant.Primary
            ? `bg-primary [&:hover]:bg-primary`
            : null
        }
        text-white
        ${props.size === 'large' ? 'px-16' : 'px-4'}
        rounded-4px
        my-0
        ${props.className}
        `}
    >
      {props.startIcon && props.startIcon}
      <p className={'font-inter font-semibold normal-case'}>{props.label}</p>
      {props.endIcon && props.endIcon}
    </Button>
  );
};

export default CustomButton;
