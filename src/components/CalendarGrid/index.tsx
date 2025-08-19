import { useCalendarGrid } from 'react-aria';
import CalendarCell from '../CalendarCell';

function CalendarGrid({ state, ...props }) {
  let { gridProps, headerProps, weekDays, weeksInMonth } = useCalendarGrid(
    props,
    state
  );

  console.log(state)
  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => <th key={index}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state.getDatesInWeek(weekIndex).map((date, i) => (
              date
                ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                  />
                )
                : <td key={i} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CalendarGrid
