import PropTypes from 'prop-types';
import s from './TransactionHistoryBody.module.css';

export function TransactionHistoryBody({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
}

TransactionHistoryBody.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.bool,
    })
  ),
};
