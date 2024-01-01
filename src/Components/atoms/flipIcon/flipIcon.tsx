import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './flipIcon.css';

const FlipIcon = () => {
    return (
        <div>
            here we go
            {/* <ul className="list-none">
                <li className="flip-icon">
                    <a
                        href="#"
                        //     className="hover:animate-spin transition-colors duration-500 ease-in-out
                        //    bg-green-300 hover:bg-yellow-600 transform
                        //    hover:scale-110 rounded-lg p-4 border
                        //    border-green-900 hover:border-black"
                    >
                        <p
                            className=" transition-colors duration-1000 ease-in-out
                           bg-green-300 hover:bg-yellow-600 "
                        >
                            asd
                        </p>
                        <i className="fab fa-facebook-f icon"></i>
                        <FontAwesomeIcon
                            icon={{ prefix: 'fab', iconName: 'linkedin' }}
                            // className="hover:animate-spin"
                            size="3x"
                        />
                    </a>
                </li>
            </ul> */}
            <ul className="c-ul">
                <li className="c-li">
                    <a href="#" className="c-a">
                        <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'linkedin' }} className="icon" size="2x" />
                    </a>
                </li>
            </ul>
            done
        </div>
    );
};

export default FlipIcon;
