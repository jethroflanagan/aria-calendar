import { createCalendar } from '@internationalized/date';
import { FC, useRef } from 'react';
import { AriaRangeCalendarProps, DateValue, useLocale, useRangeCalendar } from 'react-aria';
import { useRangeCalendarState } from 'react-stately';
import Button from '../Button';
import CalendarGrid from '../CalendarGrid';
import styles from './Calendar.module.scss';
import bindStyles from '../../utils/bindStyles';

// Reuse the Button from your component library. See below for details.

const s = bindStyles(styles)
type RangeCalendarProps = {
  offsetStart?: number
  offsetEnd?: number
} & (AriaRangeCalendarProps<DateValue>)

const RangeCalendar: FC<RangeCalendarProps> = ({ offsetStart = 0, offsetEnd = 1, ...props }) => {
  const range = offsetEnd - offsetStart;
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: range },
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
    <div {...calendarProps} className={styles.root} ref={ref}>
      <div className={styles.header}>
        <div className={styles.controls}>
          <Button {...prevButtonProps}>&lt;</Button>
          <h2>{title}</h2>
          <Button {...nextButtonProps}>&gt;</Button>
        </div>
      </div>
      <div className={styles.year}>
        {Array.from({ length: range }).map((_, offset) =>
          <CalendarGrid state={state} firstDayOfWeek={'mon'} offset={offset} />
        )}
      </div>
    </div>
  );
}
export default RangeCalendar;
