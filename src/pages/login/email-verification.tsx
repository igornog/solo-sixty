import ArrowIcon from '../../../public/images/Arrow-login.svg';
import EmailSentIcon from '../../../public/images/emailIcon.svg';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PageLinks } from '../../constants';
import Button from '../../components/Button';

const VerificationEmail: React.FunctionComponent<Props> = (props: Props) => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(PageLinks.CreateNewPassword);
  };

  return (
    <>
      <div className="w-full text-center rounded-[1px] left-0 top-0">
        <h3 className="bg-grey4 text-white font-heading font-normal text-[32px] leading-[34px] p-[30px]">
          {'verify your email'}
        </h3>
      </div>
      <div className="flex flex-col gap-5 p-[30px] items-center">
        <Image
          src={EmailSentIcon}
          className={'email-icon'}
          width="60"
          height="60"
          alt="EmailSentIcon"
        ></Image>
        <div className="text-center">
          <div className="text-[white] opacity-40">
            We&apos;ve sent you an email verification to the email address
            provided. Please click the link to continue using Solo60 Portal.
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="bg-green [&:hover]:bg-green rounded-[1px]"
            size={'large'}
            colorVariant={'secondary'}
            type={'submit'}
            label={'Log In'}
            dataTestid={'log-in-button'}
            onClick={handleSubmit}
            startIcon={
              <Image
                src={ArrowIcon}
                alt={'ArrowLogin'}
                className="relative top-[-0.5px] -left-2.5"
              />
            }
          />
        </div>
      </div>
    </>
  );
};

interface Props {
  setCreatePassword: Dispatch<SetStateAction<boolean>>;
}

export default VerificationEmail;
