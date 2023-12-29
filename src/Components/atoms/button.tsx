import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    text: string;
    onClickHandler: () => void;
    type: 'button' | 'submit' | 'reset';
    icon: IconProp;
}

const Button = ({ text, onClickHandler, type, icon }: Props) => {
    return (
        <button className="" type={type} onClick={onClickHandler}>
            {text}
            {icon && <FontAwesomeIcon icon={icon} />}
        </button>
    );
};

export default Button;
