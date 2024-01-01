import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'flowbite-react';
import { ReactNode } from 'react';

interface Props {
    text?: string;
    children?: ReactNode;
    headerText: string;
    icon?: IconProp;
}

const BasicCard = ({ headerText, text, children, icon }: Props) => {
    return (
        <Card className="md:w-96 w-60 m-6 flex-center">
            {icon && <FontAwesomeIcon icon={icon} size="4x" />}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                {headerText}
            </h5>
            {text && <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>}
            {children}
        </Card>
    );
};

export default BasicCard;
