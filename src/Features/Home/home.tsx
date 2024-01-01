import Anchor from '../../Components/atoms/anchor';
import FullIntro from './Components/fullIntro';
import ProjectCarousel from './Components/projectCarousel';
import Stacks from './Components/stacks';

export default function Home() {
    return (
        <>
            <div className="border-8 relative px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <p>Greetings! 👋 I'm Leo Shiu</p>
                        <p>I am a Fullstack Developer with a FE focus</p>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="flex w-full relative">
                        <img src="../../../assets/images/6840541.png" />
                    </div>
                </div>
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
            <div>tech stack | icons</div>
            <Stacks />
            <FullIntro />
            <ProjectCarousel />
        </>
    );
}
