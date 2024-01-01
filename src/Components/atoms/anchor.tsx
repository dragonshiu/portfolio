import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    text?: string;
    hrefLoc: string;
    icon?: IconProp;
    appearAsBtn: boolean;
    isBlank?: boolean;
    classes?: string;
}

const Anchor = ({ text, hrefLoc, icon, appearAsBtn, isBlank = true, classes }: Props) => {
    return (
        <a
            target={isBlank ? '_blank' : '_self'}
            href={hrefLoc}
            className={`${
                appearAsBtn
                    ? 'bg-transparent text-b3 font-semibold py-2 px-4 border border-b3 rounded transition-all font-zilla hover:border-transparent hover:text-white hover:bg-b3 '
                    : ' '
            } ${classes}`}
        >
            {text} {icon && <FontAwesomeIcon icon={icon} />}
        </a>
    );
};

export default Anchor;
