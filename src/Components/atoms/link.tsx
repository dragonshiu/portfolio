import React from 'react';
import { Link } from 'react-router-dom';

const CusLink = ({ loc, text, onClickHandler, classes }) => {
    return (
        <Link className={'hover: ' + classes} to={loc} onClick={onClickHandler}>
            {text}
        </Link>
    );
};

export default CusLink;
