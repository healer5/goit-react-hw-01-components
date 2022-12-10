import styled from 'styled-components';

export const FriendListCard = styled.ul`
  text-align: center;
  background-color: #fef9c7;
  width: 480px;
  margin: 0 auto;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  padding-bottom: 5px;
`;

export const FriendListItem = styled.li`
  display: inline-text;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  color: #026670;
  border: 1px solid #026670;
  background-color: #edeae5;
  box-shadow: rgb(2 102 112/ 25%) 10px 10px 5px 0px;
`;

export const FriendStatus = styled.span`
  margin-left: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #026670;
  background: ${p => (p.isOnline ? '#9FEDD7' : '#fef9c7')};
`;
export const FriendAvatar = styled.img`
  width: 60px;
`;
export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
