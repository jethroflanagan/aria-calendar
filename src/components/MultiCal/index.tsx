import { FC } from 'react';
import RangeCalendar from '../Calendar/RangeCalendar';

const MultiCal: FC = () => {
  return (
    <RangeCalendar offsetStart={-6} offsetEnd={6} />
  );
}
export default MultiCal;
