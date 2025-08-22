import { createCalendar } from '@internationalized/date';
import { FC } from 'react';
import { AriaCalendarProps, DateValue, useCalendar, useLocale } from 'react-aria';
import { useCalendarState } from 'react-stately';
import Button from '../Button';
import CalendarGrid from '../CalendarGrid';
import styles from './Calendar.module.scss';

// Reuse the Button from your component library. See below for details.

type CalendarProps = {
} & (AriaCalendarProps<DateValue>)
const Calendar: FC<CalendarProps> = (props) => {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    createCalendar,
    locale
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state,
  );

  return (
    <div {...calendarProps} className={styles.root} >
      <div className={styles.header}>
        <div className={styles.controls}>
          <Button {...prevButtonProps}>&lt;</Button>
          <h2>{title}</h2>
          <Button {...nextButtonProps}>&gt;</Button>
        </div>
      </div>
      <CalendarGrid state={state} firstDayOfWeek={'mon'} />
    </div>
  );
}
export default Calendar;
