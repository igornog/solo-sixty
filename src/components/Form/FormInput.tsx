import { FieldType, PasswordStrength } from '../../constants';
import { forwardRef, useRef, useState } from 'react';
import { Eye, EyeSlash } from 'iconsax-react';

interface Props {
  value?: any;
  onValueChange?: (value: string) => void;
  onChange?: (...event: any[]) => void;
  onClick?: () => void;

  placeholder?: string;
  required?: boolean;
  label: string;
  error?: any;
  type?: FieldType;
  helperText?: string;
  passwordStrength?: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`group relative z-[999] flex flex-col`}>
      {props.label && (
        <label
          className={`text-2xl ${
            props.error
              ? 'group-hover:text-red1 transition-[0.3s] group-focus-within:text-red1'
              : 'group-hover:text-green1 transition-[0.3s] group-focus-within:text-green1'
          } font-heading tracking-[0.5px] rounded-[1px ${
            props.error ? 'text-red1' : 'text-white'
          }`}
          htmlFor={props.label}
        >
          {props.label} {props.required && '*'}
        </label>
      )}
      <div className="flex items-center">
        <input
          onChange={props.onChange}
          ref={ref}
          id={props.label}
          type={
            props.type === FieldType.Password
              ? showPassword
                ? FieldType.Text
                : FieldType.Password
              : props.type
          }
          className={`text-sm [&:-webkit-autofill]:bg-transparent outline-none text-white px-0 py-3 focus-visible:outline-none bg-transparent border-b w-full ${
            !props.error && 'border-[rgba(255,255,255,0.5)]'
          } 
        ${
          props.error
            ? 'border-red1 group-hover:border-red1 transition-[0.3s] group-focus-within:border-red1'
            : props.error === undefined
            ? ''
            : 'group-hover:border-green1 transition-[0.3s] group-focus-within:border-green1'
        }`}
          placeholder={props.placeholder}
        />

        {props.type === FieldType.Password && (
          <div className="absolute flex right-[0px] gap-2.5">
            <span
              className={`relative self-end text-sm font-semibold ${
                props.passwordStrength === PasswordStrength.Strong
                  ? 'text-green1'
                  : props.passwordStrength === PasswordStrength.Weak
                  ? 'text-yellow'
                  : 'text-red1'
              }`}
            >
              {props.value ? props.passwordStrength : ''}
            </span>
            <span
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              className="relative self-end opacity-40 text-white"
            >
              {showPassword ? <Eye /> : <EyeSlash />}
            </span>
          </div>
        )}
      </div>
      {props.error && (
        <div className=" text-sm transition-[0.3s] text-red1 m-0">
          {props.helperText}
        </div>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
