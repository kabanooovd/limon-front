import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 1000000000000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(3px) saturate(50%) contrast(50%);
`

const Balls = styled.div<any>`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${({theme}) => theme.WHITE};
    margin: 0 6px 0 0;
    animation: oscillate 0.6s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.2s;
  }
  .two {
    animation-delay: .4s;
  }
  .three {
    animation-delay: .6s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Preloader = () => {
  return (
    <Wrapper>
        <Balls>
          <div className="ball one"></div>
          <div className="ball two"></div>
          <div className="ball three"></div>
        </Balls>
      </Wrapper>
  )
}