import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    text?: string;
    hrefLoc: string;
    icon?: IconProp;
    appearAsBtn: boolean;
}

const Anchor = ({ text, hrefLoc, icon, appearAsBtn }: Props) => {
    return (
        <a
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
