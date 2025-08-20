import { useCalendarGrid } from 'react-aria';
import CalendarCell from '../CalendarCell';
import styles from './CalendarGrid.module.scss';
import { FC, useMemo } from 'react';

const CalendarGrid: FC = ({ state, ...props }) => {
  let { gridProps, headerProps, weekDays, weeksInMonth } = useCalendarGrid(
    props,
    state
  );

  const weeks = useMemo(() => ([...new Array(weeksInMonth).keys()]), [])

  return (
    <div {...gridProps} className={styles.root}>
      <header {...headerProps} className={styles.header}>
        {weekDays.map((day, index) => <div key={index}>{day}</div>)}
      </header>
      <div className={styles.grid}>
        {weeks.map((weekIndex) => (
          state.getDatesInWeek(weekIndex).map((date, i) => (
            date
              ? (
                <CalendarCell
                  key={i}
                  state={state}
                  date={date}
                />
              )
              : <div key={i} />
          ))
        ))}
      </div>
    </div>
  );
}

export default CalendarGrid;
