import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import navLinks from '../content/navLinks';
import useScrollDirection from '../hooks/useScrollDirection';
import logoPng from '../images/logo.png';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 100px;
  width: 100%;
  height: 100px;
  background-color: rgba(var(--color-black-rgb), 0.85);
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(0px);
        box-shadow: 0 10px 30px -10px var(--color-black);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(70px);
        transform: translateY(calc(var(70px) * -1));
        box-shadow: 0 10px 30px -10px var(--color-black);
      `};
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--color-white);
  font-family: var(--ff-mono);
  z-index: 12;

  .logo {
    height: 80px;
    width: 80px;
    img {
      width: 100%;
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0 10px;
    list-style: none;

    li {
      font-size: var(--fz-md);
      font-weight: 400;

      a {
        padding: 16px;
      }
    }
  }

  .btn-contact {
    color: var(--color-accent);
    background-color: transparent;
    border: 2px solid var(--color-accent);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(var(--color-black-rgb), 0.15);
      outline: none;
    }
  }
`;

const Nav = () => {
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logo = (
    <div className="logo">
      <a href="/">
        <img src={logoPng} alt="logo" />
      </a>
    </div>
  );

  const contactBtn = (
    <a className="btn-contact" href="/">
      Contact
    </a>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <>
          {logo}
          <StyledLinks>
            <ul>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
            </ul>
            <div>{contactBtn}</div>
          </StyledLinks>

          {/* <Menu /> */}
        </>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
