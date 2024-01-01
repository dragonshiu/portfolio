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
        'block py-4 px-3 text-b3 rounded hover:bg-y1 hover:text-white dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white ';
    return (
        <div className="absolute left-4 top-28  w-2/3 min-w-72 z-10  bg-white ">
            <ul className="font-bold font-philo text-xl flex flex-col p-4 border border-b1 border-4 rounded-lg bg-gray-50 md:flex-row md:p-0 md:mt-0 md:border-0 md:bg-gray-50 md:space-x-8 rtl:space-x-reverse dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
