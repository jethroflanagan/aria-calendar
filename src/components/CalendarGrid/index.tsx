import { AriaCalendarGridProps, useCalendarGrid } from 'react-aria';
import CalendarCell from '../CalendarCell';
import styles from './CalendarGrid.module.scss';
import { FC, useMemo } from 'react';
import { CalendarState, RangeCalendarState } from 'react-stately';

type CalendarGridProps = {
  state: RangeCalendarState | CalendarState
  offset?: number
} & AriaCalendarGridProps;

const CalendarGrid: FC<CalendarGridProps> = ({ offset = 0, state, ...props }) => {
  let { gridProps, headerProps, weekDays, weeksInMonth } = useCalendarGrid(
    props,
    state
  );
  const startDate = state.visibleRange.start.add({ months: offset });
  const weeks = useMemo(() => ([...new Array(weeksInMonth).keys()]), [])

  return (
    <div {...gridProps} className={styles.root}>
      <header {...headerProps} className={styles.header}>
        {weekDays.map((day, index) => <div key={index} className={styles.day}>{day}</div>)}
      </header>
      <div className={styles.grid}>
        {weeks.map((weekIndex) => (
          state.getDatesInWeek(weekIndex, startDate).map((date, i) => (
            date
              ? (
                <CalendarCell
                  key={i}
                  state={state}
                  date={date}
                  currentMonth={startDate}
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
