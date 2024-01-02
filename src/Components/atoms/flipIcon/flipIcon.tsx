import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './flipIcon.css';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
    icon: IconName;
}

const FlipIcon = ({ icon }: Props) => {
    return (
        <div>
            <ul className="c-ul">
                <li className="c-li">
                    <a href="#" className="c-a">
                        <FontAwesomeIcon icon={{ prefix: 'fab', iconName: icon }} className="icon" size="2x" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FlipIcon;
