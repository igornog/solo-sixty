import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  inputAdornmentClasses,
  inputBaseClasses,
  OutlinedInput,
  outlinedInputClasses,
} from '@mui/material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  black,
  green,
  green1,
  grey,
  red,
  red1,
  white,
} from '../../utils/colors';
import { ArrowDown2, Eye, EyeSlash } from 'iconsax-react';
import Typography from '../Typography/Typography';
import { PasswordStrength } from '../../utils/consts';

export enum TextFieldType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
}

const StyledLabel = styled.label<{
  $isError?: boolean | undefined;
  $isSuccess?: boolean;
  focused?: boolean;
  isDisabled?: boolean;
  strongPassword?: string;
}>`
  font-family: Bebas Neue, cursive;
  font-size: 24px;
  letter-spacing: 0.5px;
  border-radius: 1px;
  color: ${({ $isError }) =>
    $isError === undefined ? white : $isError === true ? green1 : red1};
`;

const StyledInput = styled(OutlinedInput)<{
  $isError?: boolean;
  $isSuccess?: boolean;
  focused?: boolean;
  disabled?: boolean;
  size?: string;
  dropdown?: boolean;
  $underlineBorder?: boolean;
  $darkMode?: boolean;
}>`
  &.${outlinedInputClasses.root} {
    background-color: transparent;
    border-radius: 1px;

    & input {
      background-color: transparent;
      color: ${({ $darkMode }) => ($darkMode ? white : black)};
      font-size: ${({ size }) => (size === 'medium' ? '16px' : '14px')};

      &::placeholder {
        color: ${({ $darkMode }) => ($darkMode ? white : black)};
        opacity: 0, 4;
      }

      &:hover {
        ${({ dropdown }) =>
          dropdown &&
          css`
            cursor: pointer;
          `}
      }

      padding: ${({ $darkMode }) => ($darkMode ? '12px 0' : '12px')};
    }

    &.${inputBaseClasses.adornedStart} {
      input {
        padding-left: 10px;
      }
    }

    &.${inputBaseClasses.adornedEnd} {
      input {
        padding-right: 10px;
      }

      & > svg {
        ${({ dropdown }) =>
          dropdown &&
          css`
            &:hover {
              cursor: pointer;
            }
          `}
        width: 20px;
        color: ${({ disabled }) => (disabled ? grey : black)};
      }
    }

    .${inputAdornmentClasses.positionStart} {
      width: ${({ size }) => (size === 'medium' ? '20px' : '15px')};
      color: ${({ $darkMode }) => ($darkMode ? white : grey)};
      margin-right: 0;
    }
  }

  &.${outlinedInputClasses.root},
    &.${outlinedInputClasses.root}.${outlinedInputClasses.focused},
    &.${outlinedInputClasses.root}.Mui-disabled {
    fieldset {
      transition: 0.3s;
      border-width: ${({ $underlineBorder }) =>
        $underlineBorder ? '0 0 1px 0' : '1px'};
      border-color: ${({ $isError }) =>
        $isError === undefined ? white : $isError === true ? green1 : red1};
    }
  }

  &.${outlinedInputClasses.root}:hover:not(.Mui-disabled) {
    fieldset {
      transition: 0.3s;
      border-color: ${({ $isError }) =>
        $isError === undefined ? white : $isError === true ? green1 : red1};
    }
  }
`;

const StyledArrow = styled(ArrowDown2)<{ open?: boolean }>`
  transition: 0.3s;
  transform: rotate(${({ open }) => (open ? '180' : '0')}deg);
`;

const TextField: React.FunctionComponent<TextFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const returnValue = (value: string) => {
    props.onValueChange?.(value);
    setValue(value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box position={'relative'} style={{ opacity: props.disabled ? 0.5 : 1 }}>
      {props.label && (
        <Box>
          <StyledLabel
            focused={isFocused}
            $isError={props.$isError}
            $isSuccess={props.$isSuccess}
            isDisabled={props.disabled}
          >
            {props.label} {props.required && '*'}
          </StyledLabel>
        </Box>
      )}

      <FormControl variant="outlined" fullWidth={true}>
        <StyledInput
          error={props.error}
          fullWidth={true}
          $underlineBorder={props.$underlineBorder}
          onClick={props.onClick}
          onChange={
            props.formValidation
              ? props.onChange
              : (e: React.ChangeEvent<HTMLInputElement>) => {
                  returnValue(e.target.value);
                }
          }
          dropdown={props.dropdown}
          $darkMode={props.$darkMode}
          readOnly={props.dropdown}
          $isError={props.$isError}
          $isSuccess={props.$isSuccess}
          focused={isFocused ? true : undefined}
          disabled={props.disabled}
          value={props.value}
          size={props.size ?? 'medium'}
          required={props.required}
          type={
            props.type === TextFieldType.Password
              ? showPassword
                ? TextFieldType.Text
                : TextFieldType.Password
              : props.type || TextFieldType.Text
          }
          placeholder={props.placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          startAdornment={
            props.startIcon && (
              <InputAdornment position="start">
                {props.startIcon}
              </InputAdornment>
            )
          }
          endAdornment={
            props.dropdown ? (
              <StyledArrow open={props.open} size={15} />
            ) : (
              props.endIcon ||
              (props.type === TextFieldType.Password && value.length > 0 && (
                <InputAdornment position="end">
                  {props.$passwordStrength && props.$isError !== undefined ? (
                    <Typography
                      fontSize="14px"
                      color={props.$isError ? green1 : red1}
                      variant="body1"
                      bold
                    >
                      {props.$isError ? 'Strong' : 'Too Weak'}
                    </Typography>
                  ) : null}
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <Eye color={white} opacity={0.4} />
                    ) : (
                      <EyeSlash color={white} opacity={0.4} />
                    )}
                  </IconButton>
                </InputAdornment>
              ))
            )
          }
        />

        {props.$isError && props.helperText ? (
          <FormHelperText>
            <Typography color={red}>{props.helperText}</Typography>
          </FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

export interface TextFieldProps {
  value?: any;
  onValueChange?: (value: string) => void;
  onChange?: (...event: any[]) => void;
  onClick?: () => void;

  id?: string;
  placeholder?: string;
  label?: string;
  error?: boolean;

  formValidation?: boolean;
  type?: TextFieldType;
  $underlineBorder?: boolean;
  $darkMode?: boolean;
  $passwordStrength?: boolean;

  fullWidth?: boolean;
  required?: boolean;

  $isSuccess?: boolean;
  $isError?: boolean | undefined;
  disabled?: boolean;

  helperText?: string;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  dropdown?: boolean;
  open?: boolean;

  size?: 'small' | 'medium';
}
export default TextField;
