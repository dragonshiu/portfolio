import { createRef, useEffect, useState } from 'react';
import './logo.css';
const Logo = () => {
    const wrapperRef = createRef(null);
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        wrapperRef.current.dataset.configuration = cycle;

        const interval = setInterval(() => {
            wrapperRef.current.dataset.configuration = cycle + 1;
            setCycle((p) => (p + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, [cycle]);

    return (
        <div id="wrapper" ref={wrapperRef}>
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
