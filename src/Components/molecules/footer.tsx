import { Footer as F } from 'flowbite-react';

const Footer = () => {
    return (
        <F container>
            <div className="w-full text-center">
                <F.Divider />
                <F.Copyright by="LeoDev" year={new Date().getFullYear()} />
            </div>
        </F>
    );
};

export default Footer;
