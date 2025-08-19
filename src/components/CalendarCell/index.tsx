import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import styles from './CalendarCell.module.scss';
import bindStyles from '../../utils/bindStyles';

const s = bindStyles(styles);

function CalendarCell({ state, date }) {
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
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        // className={s('cell', { isSelected, isDisabled, isUnavailable })}
        className={s('cell', { isSelected, isDisabled, isUnavailable })}
      >
        {formattedDate}
      </div>
    </td >
  );
}

export default CalendarCell
