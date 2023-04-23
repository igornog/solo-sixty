import { InputUnstyled, InputUnstyledProps } from '@mui/base';
import React from 'react';

const Input = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { ...other } = props;

  return (
    <InputUnstyled
      {...other}
      ref={ref}
      className={`flex rounded-[5px] items-center bg-grey2 px-4 py-0 [&>input]:bg-transparent [&>input]:outline-none [&>input]:py-[6px] ${
        props.startAdornment && '[&>input]:pl-8 [&>svg]:absolute'
      }`}
    />
  );
});

export default Input;
