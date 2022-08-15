import PropTypes from 'prop-types';
import s from './StatisticsListItem.module.css';

export function StatisticsListItem({ label, percentage }) {
  return (
    <li className={s.statsItem} style={{ backgroundColor: getRandomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsListItem.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
