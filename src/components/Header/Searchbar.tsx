import searchIcon from '../../../images/search-icon.svg';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: inline-flex;
  overflow: hidden;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  width: 100%;

  input {
    border: none;
    outline: none;
    background: #f6f7f8;
    font-size: 16px;
    width: 85%;
    height: 100%;
  }
`;

const SearchbarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  background: #f6f7f8;
  border: 1px solid #edeff1;
  border-radius: 1.25em;
  font-size: large;
  height: 40px;
  width: 100%;

  min-width: 72px;
  max-width: 700px;

  &:hover {
    background-color: #ffffff;
    border: 1px solid #0079d3;
    form > input {
      background: #ffffff;
    }
  }

  &:enabled {
    background-color: #ffffff;
    border: 1px solid #0079d3;
    form > input {
      background: #ffffff;
    }
  }
`;

export const Searchbar = () => {
  return (
    <SearchbarWrapper>
      <label htmlFor="searchbar">
        <StyledForm>
          <img
            src={searchIcon}
            alt="search-icon"
            style={{
              height: '20px',
              width: '20px',
              margin: '0 10px',
              color: '#D3D3D3',
            }}></img>
          <input type="text" placeholder="Search Reddit" style={{}} />
        </StyledForm>
      </label>
    </SearchbarWrapper>
  );
};
