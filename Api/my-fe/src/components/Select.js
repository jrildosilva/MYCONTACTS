import styled from 'styled-components';

export default styled.select`
  width: 100%;
  border: none;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  font-family: 'sora', sans-serif;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
