import './App.css';
import ErrorBoundaryClass from './Components/errorBoundary/errorBoundary';
import NavBar from './Components/navBar/navBar';
import Home from './Features/Home/home';
import Logo from './Components/movingLogo/logo';
import { Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

function App() {
    library.add(fab, fas);
    return (
        <>
            <ErrorBoundaryClass>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="logo" element={<Logo />} />
                    <Route path="*" element={<>Not Found</>} />
                </Routes>
            </ErrorBoundaryClass>
        </>
    );
}

export default App;
