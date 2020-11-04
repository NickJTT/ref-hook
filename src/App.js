import React from 'react';
import style from './App.module.css';
import FocusInput from './components/focusInput/FocusInput';
import Timer from './components/timer/Timer';

export default function App() {
  return (
    <div className = { style.app }>
      <FocusInput/>
      <Timer/>
    </div>
  );
}
