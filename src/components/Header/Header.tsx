import styled from 'styled-components';
import { Searchbar } from './Searchbar';
import redditLogo from '../../../images/reddit-logo.svg';

const StyledHeader = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 417px;
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 0 20px;
  flex-grow: 1;
  background: #ffffff;
  border-bottom: 1px solid #edeff1;
`;

export const Header = () => {
  return (
    <header>
      <StyledHeader>
        <a href="#">
          <img
            src={redditLogo}
            alt="reddit-logo"
            style={{
              height: '48px',
              width: '100px',
            }}
          />
        </a>
        <Searchbar />
      </StyledHeader>
    </header>
  );
};
