import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    text?: string;
    hrefLoc: string;
    icon?: IconProp;
    appearAsBtn: boolean;
    isBlank?: boolean;
}

const Anchor = ({ text, hrefLoc, icon, appearAsBtn, isBlank = true }: Props) => {
    return (
        <a
            target={isBlank ? '_blank' : '_self'}
            href={hrefLoc}
            className={
                appearAsBtn
                    ? 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-all'
                    : ''
            }
        >
            {text} {icon && <FontAwesomeIcon icon={icon} />}
        </a>
    );
};

export default Anchor;
