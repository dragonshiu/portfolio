import { Card as C } from 'flowbite-react';

interface Props {
    text: string;
    headerText: string;
    imgInfo?: {
        imgAlt: string;
        imgSrc: string;
    };
}

const Card = ({ text, headerText, imgInfo }: Props) => {
    return (
        <div>
            Card
            <C className="max-w-sm" imgAlt={imgInfo?.imgAlt} imgSrc={imgInfo?.imgSrc}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{headerText}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </C>
        </div>
    );
};

export default Card;
