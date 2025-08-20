import { FC, useRef } from 'react';
import { AriaCalendarCellProps, useCalendarCell } from 'react-aria';
import styles from './CalendarCell.module.scss';
import bindStyles from '../../utils/bindStyles';
import { CalendarState, RangeCalendarState } from 'react-stately';

const s = bindStyles(styles);

type CalendarCellProps = {
  state: RangeCalendarState | CalendarState;
} & AriaCalendarCellProps;

const CalendarCell: FC<CalendarCellProps> = ({ state, date }) => {
  let ref = useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  return (
    <div {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        // className={s('cell', { isSelected, isDisabled, isUnavailable })}
        className={s('cell', { isSelected, isDisabled, isUnavailable })}
      >
        {formattedDate}
      </div>
    </div >
  );
}

export default CalendarCell
