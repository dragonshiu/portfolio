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
import ScrollTop from './Components/molecules/scrollTop';

library.add(fab, fas);

// todo: maybe add a color diff on tabs based on router location
// consolidate font classes
//add a real profile pic?
//maybe change footer bg?
//maybe change contact me bg
// update icon colors?
//add scroll to top behavior on link change https://www.matthewhoelter.com/2022/04/02/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6.html

function App() {
    return (
        <>
            <div className="main" />
            <div className="app">
                <ErrorBoundaryClass>
                    <NavBar />
                    <div className="flex-grow w-full">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact-me" element={<ContactMe />} />
                            <Route path="*" element={<>Not Found</>} />
                        </Routes>
                    </div>
                    <ScrollTop />
                    <Footer />
                </ErrorBoundaryClass>
            </div>
        </>
    );
}

export default App;
