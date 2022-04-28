import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuContext from '../context/menuContext';

const StyledBody = styled.body`
  /* position: relative; */
  overflow-x: hidden;
  overflow-y: scroll;
  max-width: 1400px;
  margin: 0 auto;

  /* scrollbar-width: 0;
  -ms-overflow-style: none; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = ({ children }) => {
  const [menuIsOpen] = useContext(MenuContext);

  return <StyledBody className={menuIsOpen && 'blur'}>{children}</StyledBody>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
