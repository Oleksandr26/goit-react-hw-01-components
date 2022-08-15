import { StatisticsListItem } from '../StatisticsListItem/StatisticsListItem';
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
