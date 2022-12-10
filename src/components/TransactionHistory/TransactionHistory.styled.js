import styled from 'styled-components';
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Table = styled.table`
  width: 480px;
  box-shadow: rgb(2 102 112/ 25%) 10px 10px 5px 0px;
`;
export const Thead = styled.thead`
  font-size: 20px;
  font-weight: 700;
  background-color: #fce181;
`;
export const Th = styled.th`
  padding: 20px 0px;
  border-bottom: none;
  border: 1px solid #026670;
  color: #026670;
`;
export const Tbody = styled.tbody`
  & tr:nth-of-type(odd) {
    background-color: #edeae5;
  }
`;
export const Td = styled.td`
  padding: 20px 0px;
  text-align: center;
  color: #026670;
  border: 1px solid #026670;
`;
