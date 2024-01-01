import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './flipIcon.css';

const FlipIcon = () => {
    return (
        <div>
            <ul className="c-ul">
                <li className="c-li">
                    <a href="#" className="c-a">
                        <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'linkedin' }} className="icon" size="2x" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FlipIcon;
