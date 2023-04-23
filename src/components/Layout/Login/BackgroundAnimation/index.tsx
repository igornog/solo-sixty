import Image from 'next/image';
import styled from 'styled-components';
import background60 from '../../../../../public/images/background60.svg';
import styles from './BackgroundAnimation.module.scss';

const StyledBackground = styled.section`
  .section {
    overflow: hidden;
  }
  .leaf {
    position: absolute;
    overflow: hidden;
    opacity: 0.2;
    width: -webkit-fill-available;
    height: 100vh;
    top: 0;
    left: 0;
    margin-left: 10vw;
  }

  .leaf div {
    position: absolute;
    display: block;
  }
  .leaf div:nth-child(1) {
    animation: up 40s linear infinite;
    animation-delay: 0s;
  }
  .leaf div:nth-child(2) {
    animation: up 40s linear infinite;
    animation-delay: -4s;
  }
  .leaf div:nth-child(3) {
    animation: up 40s linear infinite;
    animation-delay: -8s;
  }
  .leaf div:nth-child(4) {
    animation: up 40s linear infinite;
    animation-delay: -12s;
  }
  .leaf div:nth-child(5) {
    animation: up 40s linear infinite;
    animation-delay: -16s;
  }
  .leaf div:nth-child(6) {
    animation: up 40s linear infinite;
    animation-delay: -20s;
  }
  .leaf div:nth-child(7) {
    animation: up 40s linear infinite;
    animation-delay: -24s;
  }

  .leaf div:nth-child(8) {
    animation: up 40s linear infinite;
    animation-delay: -28s;
  }

  .leaf div:nth-child(9) {
    animation: up 40s linear infinite;
    animation-delay: -32s;
  }

  .leaf div:nth-child(10) {
    animation: up 40s linear infinite;
    animation-delay: -36s;
  }

  .leaf div:nth-child(11) {
    animation: up 40s linear infinite;
    animation-delay: -40s;
  }

  .leaf div:nth-child(12) {
    animation: up 40s linear infinite;
    animation-delay: -44s;
  }

  .leaf1 {
    position: absolute;
    overflow: hidden;
    opacity: 0.2;
    width: -webkit-fill-available;
    height: 100vh;
    top: 0;
    left: 0;
    margin-left: 20vw;
  }
  .leaf1 div {
    position: absolute;
    display: block;
  }
  .leaf1 div:nth-child(1) {
    animation: fall 40s linear infinite;
    animation-delay: 0s;
  }
  .leaf1 div:nth-child(2) {
    animation: fall 40s linear infinite;
    animation-delay: -4s;
  }
  .leaf1 div:nth-child(3) {
    animation: fall 40s linear infinite;
    animation-delay: -8s;
  }
  .leaf1 div:nth-child(4) {
    animation: fall 40s linear infinite;
    animation-delay: -12s;
  }
  .leaf1 div:nth-child(5) {
    animation: fall 40s linear infinite;
    animation-delay: -16s;
  }
  .leaf1 div:nth-child(6) {
    animation: fall 40s linear infinite;
    animation-delay: -20s;
  }
  .leaf1 div:nth-child(7) {
    animation: fall 40s linear infinite;
    animation-delay: -24s;
  }

  .leaf1 div:nth-child(8) {
    animation: fall 40s linear infinite;
    animation-delay: -28s;
  }

  .leaf1 div:nth-child(9) {
    animation: fall 40s linear infinite;
    animation-delay: -32s;
  }

  .leaf1 div:nth-child(10) {
    animation: fall 40s linear infinite;
    animation-delay: -36s;
  }

  .leaf1 div:nth-child(11) {
    animation: fall 40s linear infinite;
    animation-delay: -40s;
  }

  .leaf1 div:nth-child(12) {
    animation: fall 40s linear infinite;
    animation-delay: -44s;
  }

  .leaf2 {
    position: absolute;
    overflow: hidden;
    opacity: 0.2;
    width: -webkit-fill-available;
    height: 100vh;
    top: 0;
    left: 0;
    margin-left: calc(80vw - 105px);
  }
  .leaf2 div {
    position: absolute;
    display: block;
  }
  .leaf2 div:nth-child(1) {
    animation: fall 40s linear infinite;
    animation-delay: 0s;
  }
  .leaf2 div:nth-child(2) {
    animation: fall 40s linear infinite;
    animation-delay: -4s;
  }
  .leaf2 div:nth-child(3) {
    animation: fall 40s linear infinite;
    animation-delay: -8s;
  }
  .leaf2 div:nth-child(4) {
    animation: fall 40s linear infinite;
    animation-delay: -12s;
  }
  .leaf2 div:nth-child(5) {
    animation: fall 40s linear infinite;
    animation-delay: -16s;
  }
  .leaf2 div:nth-child(6) {
    animation: fall 40s linear infinite;
    animation-delay: -20s;
  }
  .leaf2 div:nth-child(7) {
    animation: fall 40s linear infinite;
    animation-delay: -24s;
  }

  .leaf2 div:nth-child(8) {
    animation: fall 40s linear infinite;
    animation-delay: -28s;
  }

  .leaf2 div:nth-child(9) {
    animation: fall 40s linear infinite;
    animation-delay: -32s;
  }

  .leaf2 div:nth-child(10) {
    animation: fall 40s linear infinite;
    animation-delay: -36s;
  }

  .leaf2 div:nth-child(11) {
    animation: fall 40s linear infinite;
    animation-delay: -40s;
  }

  .leaf2 div:nth-child(12) {
    animation: fall 40s linear infinite;
    animation-delay: -44s;
  }

  .leaf3 {
    position: absolute;
    overflow: hidden;
    opacity: 0.2;
    width: -webkit-fill-available;
    height: 100vh;
    top: 0;
    left: 0;
    margin-left: calc(90vw - 105px);
  }
  .leaf3 div {
    position: absolute;
    display: block;
  }
  .leaf3 div:nth-child(1) {
    animation: up 40s linear infinite;
    animation-delay: 0s;
  }
  .leaf3 div:nth-child(2) {
    animation: up 40s linear infinite;
    animation-delay: -4s;
  }
  .leaf3 div:nth-child(3) {
    animation: up 40s linear infinite;
    animation-delay: -8s;
  }
  .leaf3 div:nth-child(4) {
    animation: up 40s linear infinite;
    animation-delay: -12s;
  }
  .leaf3 div:nth-child(5) {
    animation: up 40s linear infinite;
    animation-delay: -16s;
  }
  .leaf3 div:nth-child(6) {
    animation: up 40s linear infinite;
    animation-delay: -20s;
  }
  .leaf3 div:nth-child(7) {
    animation: up 40s linear infinite;
    animation-delay: -24s;
  }

  .leaf3 div:nth-child(8) {
    animation: up 40s linear infinite;
    animation-delay: -28s;
  }

  .leaf3 div:nth-child(9) {
    animation: up 40s linear infinite;
    animation-delay: -32s;
  }

  .leaf3 div:nth-child(10) {
    animation: up 40s linear infinite;
    animation-delay: -36s;
  }

  .leaf3 div:nth-child(11) {
    animation: up 40s linear infinite;
    animation-delay: -40s;
  }

  .leaf3 div:nth-child(12) {
    animation: up 40s linear infinite;
    animation-delay: -44s;
  }

  @keyframes up {
    0% {
      bottom: -40%;
      transform: translateX (0%) rotate(0deg);
    }
    20% {
      transform: translateX (-20px) rotate(45deg);
    }
    40% {
      transform: translateX (-20px) rotate(90deg);
    }
    60% {
      transform: translateX (-20px) rotate(135deg);
    }
    80% {
      transform: translateX (-20px) rotate(180deg);
    }
    100% {
      bottom: 110%;
      transform: translateX (-20px) rotate(225deg);
    }
  }

  @keyframes fall {
    0% {
      top: -40%;
      transform: translateX (0%) rotate(0deg);
    }
    20% {
      transform: translateX (-20px) rotate(45deg);
    }
    40% {
      transform: translateX (-20px) rotate(90deg);
    }
    60% {
      transform: translateX (-20px) rotate(135deg);
    }
    80% {
      transform: translateX (-20px) rotate(180deg);
    }
    100% {
      top: 110%;
      transform: translateX (-20px) rotate(225deg);
    }
  }
`;

const Background: React.FunctionComponent = () => {
  return (
    <StyledBackground>
      <div className={'leaf'}>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
      </div>

      <div className={'leaf1'}>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
      </div>

      <div className={'leaf2'}>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
      </div>

      <div className={'leaf3'}>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
        <div>
          <Image alt="logo-bkg" src={background60} height="104" width="105" />
        </div>
      </div>
    </StyledBackground>
  );
};

export default Background;
