const FullIntro = () => {
    return (
        <div
            id="introduction"
            className="w-screen pt-16 px-8 pb-12 flex-center md:p-20 border-b-4 border-slate-400 bg-b4 text-b1"
        >
            <div className="flex flex-col xl:flex-row-reverse  gap-12 xl:gap-40 max-w-screen-2xl">
                <div className="text-center bg-white rounded-lg border-4 border-b1 py-10 px-4 flex-1 ">
                    <h2 className="font-bold text-3xl font-zilla mx-auto my-4 text-b4">About me</h2>
                    <p className="text-b4 text-lg my-4 text-left">
                        I'm Leo, a seasoned fullstack developer with a primary focus on front end development. Over the
                        course of my career, I have applied a structured and methodical approach to development,
                        emphasizing on the importance of collaboration, scalability, and robustness in delivering
                        solutions in the intricate corporate environment. On the other side, my experience in startup
                        environment has fostered my creativity, adaptability, and a penchant for thinking outside the
                        box. Navigating through the dynamics of both worlds has taught me to embrace challenges, think
                        fast, and pivot when necessary.
                    </p>
                    <p className="text-b4 text-lg my-4 text-left">
                        I'm passionate about staying at the forefront of technological advancements, constantly seeking
                        to expand my skill set and explore new paradigms in the ever-evolving landscape of software
                        development. Beyond the code, I thrive on building strong, collaborative relationships with
                        cross-functional teams, fostering an environment where innovation flourishes.
                    </p>
                </div>
                <div className="flex-1 flex-col flex-center bg-transparent overflow-hidden">
                    <img
                        className=" rounded-3xl border-4 border-b3"
                        src="../../../../assets/images/543_378726_tech.hero.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default FullIntro;
