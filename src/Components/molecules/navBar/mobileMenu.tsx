import CusLink from '../../atoms/link';

interface Props {
    close: () => void;
}

const MobileMenu = ({ close }: Props) => {
    const menuItems = [
        { title: 'Introduction', location: '/#introduction' },
        { title: 'Projects', location: '/projects' },
        { title: 'Contact Me', location: '/contact-me' },
    ];

    const classes =
        'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    return (
        <div className="absolute left-4 top-28  w-2/3 min-w-72 z-10 border-2 bg-white rounded-lg">
            <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {menuItems.map((i) => {
                    const { title, location } = i;
                    return (
                        <li>
                            <CusLink loc={location} text={title} onClickHandler={close} classes={classes} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MobileMenu;
