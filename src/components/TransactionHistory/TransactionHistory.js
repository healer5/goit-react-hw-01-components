import PropTypes from 'prop-types';
import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </Thead>

        <Tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
