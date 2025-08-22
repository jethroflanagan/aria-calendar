import { CalendarDate, createCalendar } from '@internationalized/date';
import { FC, useRef } from 'react';
import { AriaRangeCalendarProps, DateValue, useLocale, useRangeCalendar } from 'react-aria';
import { useRangeCalendarState } from 'react-stately';
import Button from '../Button';
import CalendarGrid from '../CalendarGrid';
import styles from './Calendar.module.scss';

// Reuse the Button from your component library. See below for details.

type RangeCalendarProps = {
  offset?: number
} & (AriaRangeCalendarProps<DateValue>)

const RangeCalendar: FC<RangeCalendarProps> = ({ offset, ...props }) => {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    createCalendar,
    locale
  });

  const ref = useRef(null);
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useRangeCalendar(
    props,
    state,
    ref,
  );

  return (
    <div {...calendarProps} className="calendar" ref={ref}>
      <div className="header">
        <div className={styles.controls}>
          <Button {...prevButtonProps}>&lt;</Button>
          <h2>{title}</h2>
          <Button {...nextButtonProps}>&gt;</Button>
        </div>
      </div>
      <div className={styles.year}>
        <CalendarGrid state={state} firstDayOfWeek={'mon'} />
        <CalendarGrid state={state} firstDayOfWeek={'mon'} offset={offset} />
      </div>
    </div>
  );
}
export default RangeCalendar;
