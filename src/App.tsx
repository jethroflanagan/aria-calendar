import Button from './components/Button';
import Calendar from "./components/Calendar";
import styles from './App.module.scss';
import { useState } from 'react';
import RangeCalendar from './components/Calendar/RangeCalendar';
import MultiCal from './components/MultiCal';

function App() {
  const [type, setType] = useState('single');
  return (
    <div className={styles.root}>
      <div className={styles.controls}>
        <Button onClick={() => setType('single')} isDisabled={type === 'single'}>Calendar</Button>
        <Button onClick={() => setType('range')} isDisabled={type === 'range'}>Range calendar</Button>
        <Button onClick={() => setType('multi')} isDisabled={type === 'multi'}>Multiple</Button>
      </div>
      {type === 'range' && <RangeCalendar />}
      {type === 'single' && <Calendar />}
      {type === 'multi' && <MultiCal />}
    </div >
  );
}

export default App;
