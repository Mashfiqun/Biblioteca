import React, { useState, useEffect } from 'react';
import workBellSound from './work-bell.mp3';
import breakBellSound from './break-bell.mp3';
const PomodoroTimer = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const workBell = new Audio(workBellSound);
    const breakBell = new Audio(breakBellSound);
    useEffect(() => {
        let timer: any;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        if (isBreak) {
                            breakBell.play();
                        } else {
                            workBell.play();
                        }
                        setIsBreak(!isBreak);
                        return isBreak ? 25 * 60 : 5 * 60;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, isBreak]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsBreak(false);
        setTimeLeft(25 * 60);
    };

    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">Pomodoro Timer</h1>
            <div className="card mx-auto" style={{ width: '18rem', padding: '20px' }}>
                <h2 className="mb-3">{isBreak ? 'Break Time' : 'Work Time'}</h2>
                <h1 className="display-4 mb-4">{formatTime(timeLeft)}</h1>
                <div className="btn-group" role="group">
                    <button
                        className={`btn ${isRunning ? 'btn-danger' : 'btn-success'}`}
                        onClick={handleStartStop}
                    >
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button className="btn btn-secondary" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PomodoroTimer;
