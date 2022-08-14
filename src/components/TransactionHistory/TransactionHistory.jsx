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

function TransactionHistoryBody({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
}

TransactionHistoryBody.prototype = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.bool,
    })
  ),
};
