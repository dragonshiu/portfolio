import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../atoms/movingLogo/logo';
import { useState, useRef, useEffect } from 'react';
import MobileMenu from './mobileMenu';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Element)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [menuRef]);

    const openMenu = () => {
        setOpen((p) => !p);
    };

    const css =
        'transition-colors duration-200 ease-in-out rounded-lg p-2 hover:border-2 border-2 hover:border-y3  text-b3 hover:text-y3 border-transparent';

    return (
        <>
            <header className="md:flex-between header justify-center  border-b-4 border-slate-400 flex ">
                <Link to="/" className="flex-center md:flex-start">
                    <Logo />
                </Link>
                <nav className="gap-3 md:gap-5 hidden md:flex">
                    <Link className={`font-philo font-bold text-3xl ${css}`} to="/#introduction">
                        Introduction
                    </Link>
                    <Link className={`font-philo font-bold text-3xl ${css}`} to="/projects">
                        Project
                    </Link>
                    <Link className={`font-philo font-bold text-3xl ${css}`} to="/contact-me">
                        Contact Me
                    </Link>
                </nav>
                <div className="mobile-menu md:hidden" ref={menuRef}>
                    <nav role="navigation" className="flex flex-col justify-center absolute left-10 top-16 ">
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
