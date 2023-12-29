import { Link } from 'react-router-dom';

interface Props {
    loc: string;
    text: string;
    onClickHandler: () => void;
    classes: string;
}

const CusLink = ({ loc, text, onClickHandler, classes }: Props) => {
    return (
        <Link className={'hover: ' + classes} to={loc} onClick={onClickHandler}>
            {text}
        </Link>
    );
};

export default CusLink;
