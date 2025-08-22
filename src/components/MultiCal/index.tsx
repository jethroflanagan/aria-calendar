import { addMonths, startOfMonth } from 'date-fns';
import { FC } from 'react';
import RangeCalendar from '../Calendar/RangeCalendar';

const MultiCal: FC = () => {
  const today = startOfMonth(new Date());
  return (
    Array.from({ length: 12 }).map((_, i) => {
      const offset = i - 6;
      return <RangeCalendar key={addMonths(today, offset).toDateString()} offset={offset} />
    })
  );
}
export default MultiCal;
