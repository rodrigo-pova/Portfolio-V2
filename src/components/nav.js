import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import email from '../content/email';
import navLinks from '../content/navLinks';
import useScrollDirection from '../hooks/useScrollDirection';
import logoPng from '../images/logo.png';
import Menu from './menu';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  height: 100px;
  top: 0;
  z-index: 11;
  padding: 0px 100px;
  width: 100%;
  margin: 0;
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
        transform: translateY(0px);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        transform: translateY(-100px);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
      `};
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: auto;
  position: relative;
  width: 100%;
  color: var(--color-white);
  font-family: var(--ff-mono);
  z-index: 12;

  .logo {
    filter: none !important;
    height: 80px;
    width: 80px;
    img {
      width: 100%;
    }

    &:hover,
    &:focus {
      transition: var(--transition);
      transform: scale(1.02);
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
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
    font-family: var(--ff-mono);
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(var(--color-accent-rgb), 0.1);
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
    <a className="btn-contact" href={`mailto:${email}`}>
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

          <Menu />
        </>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
