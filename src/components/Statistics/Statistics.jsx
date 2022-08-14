import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statsList}>
        {stats.map(item => (
          <StatisticsListItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

function StatisticsListItem({ label, percentage }) {
  return (
    <li className={s.statsItem} style={{ backgroundColor: getRandomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsListItem.prototype = {
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
