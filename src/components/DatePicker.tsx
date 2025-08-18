import { FC, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";

const Calendar: FC = () => {
  const [selected, setSelected] = useState<Date>();
  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
};

export default Calendar;
