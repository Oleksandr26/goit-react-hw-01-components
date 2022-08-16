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
