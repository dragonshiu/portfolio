import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    text?: string;
    onClickHandler: () => void;
    type: 'button' | 'submit' | 'reset';
    icon: IconProp;
    classes?: string;
}

const Button = ({ text, onClickHandler, type, icon, classes }: Props) => {
    return (
        <button className={classes} type={type} onClick={onClickHandler}>
            {text}
            {icon && <FontAwesomeIcon icon={icon} />}
        </button>
    );
};

export default Button;
