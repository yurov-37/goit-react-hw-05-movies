import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieHeader = styled.header`
  height: 80px;
  padding: 20px 0px;
  border-bottom: 1px solid black;
  background-color: hsl(240deg 8% 46%); ;
`;

export const HeaderNav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  padding: 5px;
  color: black;

  &:not(:last-child) {
    margin-right: 48px;
  }

  &.active {
    background-color: #929eaa96;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #41259e;
  }
`;
