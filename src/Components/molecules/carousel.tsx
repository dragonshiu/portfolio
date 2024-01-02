import { Carousel as C, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';

import { Link } from 'react-router-dom';

interface Props {
    imgArray: { src: string; altText: string; href: string }[];
}

const customTheme: CustomFlowbiteTheme = {
    carousel: {
        indicators: {
            active: {
                off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
                on: 'bg-b3 dark:bg-y1',
            },
            base: 'h-3 w-3 rounded-full',
            wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
        },

        control: {
            base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-b3 group-hover:bg-b4 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
            icon: 'h-5 w-5 text-y1 dark:text-y1 sm:h-6 sm:w-6',
        },
    },
};

export default function Carousel({ imgArray }: Props) {
    return (
        <div className="h-56 sm:h-80 xl:h-96 ">
            <Flowbite theme={{ theme: customTheme }}>
                <C pauseOnHover className="border-4 bg-black">
                    {imgArray.map((img, idx) => {
                        const { src, altText, href } = img;
                        return (
                            <Link key={idx} to={href} className="flex-center bg-black">
                                <img src={src} alt={altText} className="" />
                            </Link>
                        );
                    })}
                </C>
            </Flowbite>
        </div>
    );
}
