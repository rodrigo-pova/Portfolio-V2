import PropTypes from 'prop-types';
import styled from 'styled-components';
import socialMedia from '../content/socialMedia';
import Side from './side';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--color-white);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      display: block;
      color: var(--color-white);
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
        transition: var(--transition);

        &:hover,
        &:focus {
          transform: translateY(-3px);
          color: var(--color-accent);
        }
      }
    }
  }
`;

const Social = () => (
  <Side orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name, iconSvg }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              {iconSvg}
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
