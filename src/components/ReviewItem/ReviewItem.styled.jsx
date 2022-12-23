import styled from '@emotion/styled';

export const ReviewBox = styled.li`
  padding: 10px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const ReviewAuthor = styled.b`
  display: block;
  font-size: 20px;
  margin-bottom: 8px;
`;
