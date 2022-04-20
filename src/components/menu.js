import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import email from '../content/email';
import navLinks from '../content/navLinks';
import MenuContext from '../context/menuContext';
import useOnClickOutside from '../hooks/useOnClickOutside';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  margin-right: -15px;
  padding: 15px;
  border: 0;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--color-accent);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuIsOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props) => (props.menuIsOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props) =>
        props.menuIsOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--color-accent);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => (props.menuIsOpen ? `100%` : `120%`)};
      top: ${(props) => (props.menuIsOpen ? `0` : `-10px`)};
      opacity: ${(props) => (props.menuIsOpen ? 0 : 1)};
      transition: ${({ menuIsOpen }) =>
        menuIsOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${(props) => (props.menuIsOpen ? `100%` : `80%`)};
      bottom: ${(props) => (props.menuIsOpen ? `0` : `-10px`)};
      transform: rotate(${(props) => (props.menuIsOpen ? `-90deg` : `0`)});
      transition: ${({ menuIsOpen }) =>
        menuIsOpen ? 'var(--ham-after-active)' : 'var(--ham-after)'};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0;
  background-color: var(--color-almost-black);
  box-shadow: -10px 0px 30px -15px rgba(0, 0, 0, 0.5);
  z-index: 9;
  transform: translateX(${(props) => (props.menuIsOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.menuIsOpen ? 'visible' : 'hidden')};
  transition: var(--transition);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ul {
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 2rem auto;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
    }

    a {
      width: 100%;
      padding: 3px 20px 20px;
    }
  }
  .btn-contact {
    color: var(--color-accent);
    background-color: transparent;
    border: 2px solid var(--color-accent);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    margin: 1rem auto;
    width: max-content;
    font-size: var(--fz-md);
    font-family: var(--ff-mono);
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(var(--color-accent-rgb), 0.1);
    }
    &:after {
      display: none !important;
    }
  }
`;

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  useOnClickOutside(wrapperRef, () => setMenuIsOpen(false));

  useEffect(() => {
    const onResize = (e) => {
      if (e.currentTarget.innerWidth > 768) {
        setMenuIsOpen(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [setMenuIsOpen]);

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledHamburger
          onClick={toggleMenu}
          menuIsOpen={menuIsOpen}
          ref={buttonRef}
          aria-label="Menu"
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburger>
        <StyledSidebar
          menuIsOpen={menuIsOpen}
          aria-hidden={!menuIsOpen}
          tabIndex={menuIsOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {navLinks && (
              <ul>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <a href={url} onClick={() => setMenuIsOpen(false)}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <a href={`mailto:${email}`} className="btn-contact">
              Contact
            </a>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
