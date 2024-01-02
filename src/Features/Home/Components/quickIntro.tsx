import Anchor from '../../../Components/atoms/anchor';

const QuickIntro = () => {
    return (
        <>
            <div className="w-full pt-16 px-8 pb-12 gap-12 xl:gap-40 md:p-20 flex flex-col-reverse md:flex-row flex-center border-b-4 border-slate-400 bg-pattern3">
                <div className="text-center bg-white rounded-lg border-4 border-b1 py-10 px-4">
                    <h1 className="font-bold text-3xl font-zilla mx-auto my-4 text-b4">
                        Greetings!<span className="animate-wiggle inline-block">👋 </span>
                        I'm <span className="text-b2">Leo Shiu</span>
                    </h1>
                    <p className="text-b4 text-xl my-2">
                        I am a <span className="text-y2 font-bold">Fullstack</span> developer with a{' '}
                        <span className="text-y2 font-bold">FE</span> focus
                    </p>
                    <p className="text-b4 text-lg my-4">
                        Want to transform your <span className="text-b2 font-bold">idea</span> into a{' '}
                        <span className="text-b3 font-bold">tangible reality</span>? I am here to help you{' '}
                        <span className="text-y1 font-bold">achieve your dream</span>!
                    </p>
                    <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 flex-center ">
                        <Anchor
                            appearAsBtn
                            hrefLoc="#introduction"
                            text="About me"
                            icon="arrow-turn-down"
                            classes="bg-white"
                            isBlank={false}
                        />
                        <Anchor
                            appearAsBtn
                            hrefLoc="#projects"
                            text="Sample Projects"
                            icon="arrow-turn-down"
                            classes="bg-white"
                            isBlank={false}
                        />
                    </div>
                </div>
                <div className=" flex-col flex-center max-w-1/2 bg-b1 rounded-full border-4 border-b3 overflow-hidden">
                    <img src="../../../../assets/images/6840541.png" />
                </div>
            </div>
        </>
    );
};

export default QuickIntro;
