import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Communication from '../../../public/images/Communication.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../components/Button';
import { FieldType } from '../../constants';
import Image from 'next/image';
import { PageLinks } from '../../constants';
import { useRouter } from 'next/router';
import {
  validationSchema,
  ValidationSchemaType,
} from '../../utils/validationSchema';
import ArrowLogin from '../../../public/images/Arrow-login.svg';
import FormInput from '../../components/Form/FormInput';

const ForgotPassword: React.FunctionComponent = (props) => {
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

  const onSubmit = (data: any) => {
    router.push(PageLinks.EmailVerification);
  };

  return (
    <>
      <div className="w-full text-center rounded-[1px] left-0 top-0">
        <h3 className="bg-grey4 text-white font-heading font-normal text-[32px] leading-[34px] p-[30px]">
          {'create new password'}
        </h3>
      </div>
      <div className="flex flex-col gap-5 p-[30px] forgot-password">
        <div
          className={'flex items-center gap-[5px] cursor-pointer'}
          onClick={() => router.push(PageLinks.Login)}
        >
          <Image
            src={ArrowLogin}
            alt={'ArrowLogin'}
            className="w-[15px] h-[15px] rotate-180  opacity-40"
          />
          <p className=" text-sm transition-[0.3s] text-[white] opacity-40 hover:cursor-pointer hover:underline">
            Back
          </p>
        </div>
        <p className="text-[white] opacity-40">
          Don&apos;t worry! Just enter the email address linked to this account
          and we&apos;ll send a recovery link.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormInput
                placeholder={'Enter email'}
                label={'email'}
                {...field}
                type={FieldType.Email}
                error={errors.email ?? false}
                helperText={errors.email?.message?.toString()}
              />
            )}
          />

          <div className="flex justify-center gap-[30px] mt-[30px]">
            <Button
              className="bg-green [&:hover]:bg-green rounded-[1px]"
              size={'large'}
              colorVariant={'secondary'}
              type={'submit'}
              label={'Reset Password'}
              startIcon={
                <Image
                  src={Communication}
                  alt="Communication"
                  className="relative top-[-0.5px] -left-2.5"
                />
              }
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
