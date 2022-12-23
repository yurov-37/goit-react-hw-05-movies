import styled from '@emotion/styled';

export const ActorCard = styled.li`
  /* position: relative; */

  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

export const ActorInfo = styled.div`
  padding: 8px;
  text-align: center;
`;

export const ActorName = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 4px;
`;

export const ActorCharacter = styled.p`
  font-size: 18px;
`;

export const ActorPhoto = styled.img`
  flex: 1 0 auto;
`;
