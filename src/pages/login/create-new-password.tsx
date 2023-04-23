import { useEffect, useState } from 'react';
import { FieldType, PasswordStrength } from '../../constants';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PageLinks } from '../../constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  validationSchemaNewPasswordType,
  validationSchemaNewPassword,
} from '../../utils/validationSchema';
import { LETTER_CHECK, NUMBER_CHECK } from '../../utils/regex';
import Button from '../../components/Button';
import ArrowIcon from '../../../public/images/Arrow-login.svg';
import FormInput from '../../components/Form/FormInput';

const CreatePassword: React.FunctionComponent = () => {
  const router = useRouter();
  const [passwordStrength, setPasswordStrength] = useState('');
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<validationSchemaNewPasswordType>({
    resolver: zodResolver(validationSchemaNewPassword),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data: any) => {
    router.push(PageLinks.Login);
  };

  useEffect(() => {
    const rulesArr = [
      watch('newPassword').length >= 8,
      LETTER_CHECK.test(watch('newPassword').charAt(0)),
      NUMBER_CHECK.test(watch('newPassword')),
    ];

    const count = rulesArr.filter(Boolean).length;
    let strength =
      count > 2
        ? PasswordStrength.Strong
        : count > 1
        ? PasswordStrength.Weak
        : PasswordStrength.TooWeak;

    setPasswordStrength(strength);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('newPassword')]);

  return (
    <>
      <div className="w-full text-center rounded-[1px] left-0 top-0">
        <h3 className="bg-grey4 text-white font-heading font-normal text-[32px] leading-[34px] p-[30px]">
          {'create new password'}
        </h3>
      </div>
      <form
        className="flex flex-col gap-5 p-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="newPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormInput
              {...field}
              label="New Password"
              passwordStrength={passwordStrength}
              placeholder={'Enter new password'}
              type={FieldType.Password}
              error={errors.newPassword ?? false}
              helperText={errors.newPassword?.message?.toString()}
            />
          )}
        />

        {errors.newPassword && watch('newPassword') ? (
          <div className="text-xs">
            <div>
              The password you&apos;ve chosen is{' '}
              <span
                className={`${
                  passwordStrength === PasswordStrength.Strong
                    ? 'text-green1'
                    : passwordStrength === PasswordStrength.Weak
                    ? 'text-yellow'
                    : 'text-red1'
                }`}
              >
                {passwordStrength.toLowerCase()}
              </span>{' '}
              - try the following:
            </div>
            <ul className="m-0 pt-2.5 pb-0 px-[15px]">
              {watch('newPassword').length < 8 ? (
                <li className="p-0">
                  <p className="text-xs">
                    {'Password must be at least 8 characters long.'}
                  </p>
                </li>
              ) : (
                ''
              )}
              {!LETTER_CHECK.test(watch('newPassword').charAt(0)) ? (
                <li className="p-0">
                  <p className="text-xs">
                    {'Password must start with a letter (A-Z, a-z).'}
                  </p>
                </li>
              ) : (
                ''
              )}
              {!NUMBER_CHECK.test(watch('newPassword')) ? (
                <li className="p-0">
                  <p className="text-xs">
                    {'Password must contain at least one number (0-9).'}
                  </p>
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
        ) : (
          ''
        )}

        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormInput
              {...field}
              label="Confirm New Password"
              placeholder={'Enter password confirmation'}
              type={FieldType.Password}
              error={errors.confirmPassword ?? false}
              helperText={errors.confirmPassword?.message?.toString()}
            />
          )}
        />

        <div className="flex justify-center">
          <Button
            className="bg-green [&:hover]:bg-green rounded-[1px]"
            size={'large'}
            colorVariant={'secondary'}
            type={'submit'}
            label={'Create New Password'}
            dataTestid={'create-new-password-button'}
            startIcon={
              <Image
                src={ArrowIcon}
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

export default CreatePassword;
