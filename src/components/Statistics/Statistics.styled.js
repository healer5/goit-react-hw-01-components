import styled from 'styled-components';

export const StatisticsCard = styled.section`
  text-align: center;
  background-color: #edeae5;
  width: 480px;
  margin: 0 auto;
  box-shadow: rgb(2 102 112/ 25%) 10px 10px 5px 0px;
`;

export const StatisticsTitle = styled.h2`
  color: #026670;
  padding-top: 15px;
`;

export const StatisticsCardList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;
export const StatisticsCardItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid gray;
  &:not(:last-child) {
    border-right: none;
  }
  align-items: center;
  padding: 5px;

  :nth-child(1) {
    background-color: #026670;
  }

  :nth-child(2),
  .item:nth-child(5) {
    background-color: #fce181;
  }

  :nth-child(3) {
    background-color: #fef9c7;
  }

  :nth-child(5) {
    background-color: #9fedd7;
  }
`;

export const StatisticsCardLabel = styled.span`
  padding-bottom: 5px;
`;
