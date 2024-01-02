import { useEffect, useState } from 'react';
import Button from '../atoms/button';

const ScrollTop = () => {
    const [y, setY] = useState(window.scrollY);

    useEffect(() => {
        const handler = (_e: Event) => {
            setY(window.scrollY);
        };

        document.addEventListener('scroll', handler);

        return () => {
            document.removeEventListener('scroll', handler);
        };
    }, [y]);

    const moveToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
        <div>
            <Button
                onClickHandler={moveToTop}
                type={'button'}
                icon={'arrow-up'}
                classes={`fixed bottom-5 right-5 bg-white rounded-full w-12 h-12 border-4 ${
                    y > 200 ? 'visible' : 'invisible'
                }`}
            />
        </div>
    );
};

export default ScrollTop;
