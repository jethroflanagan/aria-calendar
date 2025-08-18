import {useCalendar, useLocale} from 'react-aria';
import {useCalendarState} from 'react-stately';
import {createCalendar} from '@internationalized/date';
import CalendarGrid from './CalendarGrid';

// Reuse the Button from your component library. See below for details.

function Calendar(props) {
  let { locale } = useLocale();
  let state = useCalendarState({
    createCalendar,
    ...props,
    locale
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} className="calendar">
      <div className="header">
        <h2>{title}</h2>
        <button {...prevButtonProps}>&lt;</button>
        <button {...nextButtonProps}>&gt;</button>
      </div>
      <CalendarGrid state={state} firstDayOfWeek={props.firstDayOfWeek} />
    </div>
  );
}
export default Calendar;
