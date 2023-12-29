import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../atoms/movingLogo/logo';
import { useState, useRef, useEffect } from 'react';
import MobileMenu from '../../molecules/mobileMenu';

export default function NavBar() {
    // return (
    //     <nav className="w-full px-8 py-4 min-h-20 border justify-center md:flex-between">
    //         <Link to="/" className="flex gap-4 flex-center my-auto head_text ">
    //             <Logo />
    //         </Link>
    //         {/* browser */}
    //         <div className="md:flex hidden px-">
    //             <div className="flex gap-3 md:gap-5">
    //                 <Link to="/project">Projects</Link>
    //                 <p className=" md:text-slate-50 text-red-300">asdasd</p>
    //                 <Link to="/contact-info">Contact Me</Link>
    //             </div>
    //         </div>
    //         {/* mobile */}
    //         <div ">
    //             <FontAwesomeIcon icon="check-square" />
    //         </div>
    //     </nav>
    // );
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [menuRef]);

    const openMenu = () => {
        console.log('hit');
        setOpen((p) => !p);
    };

    return (
        <>
            {/* browser */}
            <header className="md:flex hidden header md:flex-between">
                <Link to="/">
                    <Logo />
                </Link>
                <nav className="flex gap-3 md:gap-5">
                    <Link to="/#introduction">Introduction</Link>
                    <Link to="/project">Introduction</Link>
                    <Link to="/contact-info">Contact Me</Link>
                </nav>
            </header>

            {/* mobile */}
            <header className="md:hidden flex header justify-center">
                {/* <Link to="/" className="flex gap-4 flex-center my-auto head_text ">
                    <Logo />
                </Link> */}
                <div className="mobile-menu" ref={menuRef}>
                    <nav role="navigation" className="flex flex-col justify-center absolute left-10 top-6 ">
                        <button type="button" onClick={openMenu}>
                            <FontAwesomeIcon icon="bars" size="2x" />
                        </button>
                    </nav>
                    {open && <MobileMenu close={openMenu} />}
                </div>
            </header>
        </>
    );
}
