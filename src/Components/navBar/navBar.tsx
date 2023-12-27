import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link to="/" className="flex gap-2 flex-center">
                <img alt="logo" width={50} height={50} className="object-contain" src="/assets/images/logo.png" />
            </Link>
            {/* browser */}
            <div className="sm:flex hidden">
                <div className="flex gap-3 md:gap-5">
                    <Link to="/project">Projects</Link>
                    <p className=" md:text-slate-50 text-red-300">asdasd</p>
                    <Link to="/contact-info">Contact Me</Link>
                </div>
            </div>
            {/* mobile */}
            <div className="sm:hidden flex relative">
                <FontAwesomeIcon icon="check-square" />

                {/* <FontAwesomeIcon icon={icon({ name: 'user-secret' })} /> */}
            </div>
        </nav>
    );
}
