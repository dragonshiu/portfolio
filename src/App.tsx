import ErrorBoundaryClass from './Components/organisms/errorBoundary/errorBoundary';
import NavBar from './Components/molecules/navBar/navBar';
import Home from './Features/Home/home';
import { Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Projects from './Features/Projects/projects';
import ContactMe from './Features/ContactMe/contactMe';
import Footer from './Components/molecules/footer';

function App() {
    library.add(fab, fas);
    return (
        <>
            <div className="main" />
            <div className="app">
                <ErrorBoundaryClass>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact-me" element={<ContactMe />} />
                        <Route path="*" element={<>Not Found</>} />
                    </Routes>
                    <Footer />
                </ErrorBoundaryClass>
            </div>
        </>
    );
}

export default App;
