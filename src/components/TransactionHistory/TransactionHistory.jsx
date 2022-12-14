import { TransactionHistoryBody } from '../TransactionHistoryBody/TransactionHistoryBody';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <section className={s.container}>
      <table className={s.transactionHistory}>
        <thead>
          <tr className={s.row}>
            <th className={s.head}>Type</th>
            <th className={s.head}>Amount</th>
            <th className={s.head}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <TransactionHistoryBody
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
