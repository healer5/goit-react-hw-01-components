import styled from 'styled-components';

export const ProfileCard = styled.div`
  text-align: center;
  background-color: #edeae5;
  width: 480px;
  margin: 0 auto;
  box-shadow: rgb(2 102 112/ 25%) 10px 10px 5px 0px;
  color: #026670;
`;

export const ProfileImage = styled.img`
  width: 180px;
  border-radius: 50%;
  background-color: #fef9c7;
  border: 1px solid #026670;
  margin-top: 15px;
`;
export const ProfileName = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

export const ProfileTag = styled.p`
  text-decoration: underline;
`;

export const ProfileLocation = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  padding-bottom: 5px;
`;

export const ProfileStatsList = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #026670;
  background-color: #fef9c7;
  &:not(:last-child) {
    border-right: none;
  }
  align-items: center;
  padding: 5px;
`;

export const ProfileStatsListName = styled.span`
  display: block;
`;

export const ProfileStatsQuantity = styled.span`
  padding-top: 5px;
`;
