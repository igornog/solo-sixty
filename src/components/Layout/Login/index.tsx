import Image from 'next/image';
import solo60Logo from '../../../../public/images/logo-white.svg';
import Background from './Background';

const LoginLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden bg-black flex flex-col items-center justify-center gap-[50px]">
      <Background />
      <Image
        className="select-none absolute mt-[100px] mb-0 mx-0 top-0"
        src={solo60Logo}
        alt="solo60-logo"
      />
      <div className="flex flex-col bg-grey5 transition-all duration-[0.25s] ease-[ease-in-out] w-[500px] m-0;">
        {props.children}
      </div>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default LoginLayout;
