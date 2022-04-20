import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  position: relative;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
