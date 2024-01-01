import { Card as C } from 'flowbite-react';
import { ReactNode } from 'react';

interface Props {
    text?: string;
    children?: ReactNode;
    headerText: string;
    imgInfo: {
        imgAlt: string;
        imgSrc: string;
    };
}

const PictureCard = ({ text, headerText, imgInfo, children }: Props) => {
    return (
        <div>
            <C className="max-w-sm" imgAlt={imgInfo.imgAlt} imgSrc={imgInfo.imgSrc}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{headerText}</h5>
                {text && <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>}
                {children}
            </C>
        </div>
    );
};

export default PictureCard;
