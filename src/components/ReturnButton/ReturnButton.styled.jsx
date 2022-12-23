import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const OnReturnBtn = styled(Link)`
  color: inherit;
  margin-top: 10px;
  border: 1px solid black;
  background-color: #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  width: 100px;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #f7fafa;
  }

  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
