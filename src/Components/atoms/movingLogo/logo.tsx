import { useEffect, useState } from 'react';
import './logo.css';
const Logo = () => {
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        const pointerRef = document.getElementById('wrapper');

        if (pointerRef) pointerRef.dataset.configuration = cycle.toString();

        const interval = setInterval(() => {
            if (pointerRef) pointerRef.dataset.configuration = (cycle + 1).toString();
            setCycle((p) => (p + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, [cycle]);

    return (
        <div id="wrapper">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
    );
};

export default Logo;
