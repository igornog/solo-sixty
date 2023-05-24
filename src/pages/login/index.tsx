import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import ArrowLogin from '../../../public/images/Arrow-login.svg';
import PasswordIcon from '../../../public/images//password.svg';
import { PageLinks } from '../../constants';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FieldType } from '../../constants';
import {
  ValidationSchemaType,
  validationSchema,
} from '../../utils/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../components/Button';
import FormInput from '../../components/Form/FormInput';

const Login: React.FunctionComponent = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data: any) => {
    router.push(PageLinks.Sessions);
  };

  return (
    <>
      <div className="w-full text-center rounded-[1px] left-0 top-0">
        <h3 className="bg-grey4 text-white font-heading font-normal text-[32px] leading-[34px] p-[30px]">
          {'welcome to solo60'}
        </h3>
      </div>
      <form
        className="flex flex-col gap-5 p-[30px]"
        onSubmit={handleSubmit(onSubmit)}
        data-testid="login-form"
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormInput
              placeholder={'Enter email'}
              label={'email'}
              {...field}
              type={FieldType.Text}
              error={errors.email ?? false}
              helperText={errors.email?.message?.toString()}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormInput
              {...field}
              label="password"
              placeholder={'Enter password'}
              type={FieldType.Password}
              error={errors.password ?? false}
              helperText={errors.password?.message?.toString()}
            />
          )}
        />

        <div
          className="flex gap-[5px] items-center w-fit relative -top-2.5"
          onClick={() => router.push(PageLinks.ForgotPassword)}
          data-testid="forget-password-link"
        >
          <Image src={PasswordIcon} alt={'PasswordIcon'} />
          <p className="tracking-[0] w-fit text-[white] opacity-40 hover:cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size={'large'}
            type={'submit'}
            colorVariant={'secondary'}
            label={'Log In'}
            dataTestid={'login-button'}
            className="bg-green [&:hover]:bg-green rounded-[1px] px-12"
            startIcon={
              <Image
                src={ArrowLogin}
                alt={'ArrowLogin'}
                className="relative top-[-0.5px] -left-2.5"
              />
            }
          />
        </div>
      </form>
    </>
  );
};

export default Login;
