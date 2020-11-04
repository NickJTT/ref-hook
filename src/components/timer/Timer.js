import React, { useState, useEffect, useRef } from 'react';

export default function Timer() {
    const intervalRef = useRef(null);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => setTimer(prevTimer => prevTimer + 1), 1000);
        return () => clearInterval(intervalRef.current);
    }, []);
    
    return (
        <React.Fragment>
            <p>Timer: { timer }</p>
            <button onClick = { () => clearInterval(intervalRef.current) }>Clear Timer</button>
        </React.Fragment>
    );
}
