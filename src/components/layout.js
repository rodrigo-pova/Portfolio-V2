import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuContext from '../context/menuContext';

const StyledBody = styled.body`
  position: relative;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const [menuIsOpen] = useContext(MenuContext);

  return <StyledBody className={menuIsOpen && 'blur'}>{children}</StyledBody>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
