import Anchor from '../../Components/atoms/anchor';

export default function Home() {
    return (
        <>
            <div className="p-3 m-2 bg-gray-500 w-full">
                <p>Greetings! 👋 I'm Leo Shiu</p>
                <p>I am a Fullstack Developer with a FE focus</p>
            </div>

            <div>
                <Anchor appearAsBtn hrefLoc="#introduction" text="About me" icon="arrow-turn-down" />
            </div>
            <div>
                <ul>
                    <li>
                        <button>linkedin</button>
                    </li>
                    <li>
                        <button>github</button>
                    </li>
                    <li>
                        <button>email</button>
                    </li>
                </ul>
            </div>
            <div id="introduction" className="h-3/4">
                Introduction
            </div>
        </>
    );
}
