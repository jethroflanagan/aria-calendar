import { DateValue, useCalendar, useLocale } from 'react-aria';
import { CalendarStateOptions, useCalendarState } from 'react-stately';
import { FC } from 'react';
import { createCalendar } from '@internationalized/date';
import CalendarGrid from '../CalendarGrid';
import Button from '../Button';
import styles from './Calendar.module.scss';

// Reuse the Button from your component library. See below for details.

const Calendar: FC<CalendarStateOptions<DateValue>> = (props) => {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    createCalendar,
    locale
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} className="calendar">
      <div className="header">
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
