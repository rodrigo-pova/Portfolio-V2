import styled from 'styled-components';

const StyledHeroSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--color-accent);
    font-family: var(--ff-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    margin-top: 10px;
    color: var(--color-white);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    line-height: 1.3;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -2;
    top: 24vh;
    right: -10vw;
    display: block;
    height: 50vw;
    width: 50vw;
    border-radius: 50vw;
    background-color: var(--color-almost-black);
  }
  
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 32vh;
    left: -6vw;
    display: block;
    height: 14vw;
    width: 14vw;
    border-radius: 14vw;
    background-color: rgba(var(--color-accent-rgb), 0.05);
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    line-height: 1.3;
  }
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1>Hello, my name is</h1>
      <h2 className="big-heading">Rodrigo Pova.</h2>
      <h3 className="big-heading">Fullstack web dev.</h3>
      <p>
      I'm a 🇧🇷-based software engineer that designs and builds accessible experiences for the web.
      </p>
    </StyledHeroSection>
  );
};

export default Hero;