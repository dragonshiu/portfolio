import { IconName } from '@fortawesome/fontawesome-svg-core';
import FlipIcon from '../../Components/atoms/flipIcon/flipIcon';
import Anchor from '../../Components/atoms/anchor';

//cards of projects
const Projects = () => {
    const pArray = [
        {
            title: 'project1',
            imgSrc: '../../../../assets/projectSamples/p1.png',
            imgAlt: 'project 1 pic',
            stacks: [
                { name: 'react', icon: 'react' },
                { name: 'react', icon: 'css3' },
                { name: 'react', icon: 'html5' },
            ],
            summary: 'this is my project summary',
            demoHref: '',
            gitHref: '',
        },
        {
            title: 'project2',
            imgSrc: '../../../../assets/projectSamples/p2.png',
            imgAlt: 'project 2 pic',
            stacks: [
                { name: 'react', icon: 'react' },
                { name: 'react', icon: 'css3' },
                { name: 'react', icon: 'html5' },
            ],
            summary: 'this is my project summary',
            demoHref: '',
            gitHref: '',
        },
    ];
    // const pArray = [{ title: '', imgSrc: '', imgAlt: '', stacks: [{ name: 'react', icon: '' }], summary: '' }];
    return (
        <div className="w-full bg-pattern2 min-h-screen flex-center p-8 md:px-20 ">
            <div className="lg:w-3/4 w-full flex-col  flex-center flex-wrap gap-5">
                {pArray.map((project, idx) => {
                    const { title, imgSrc, imgAlt, stacks, summary, gitHref, demoHref } = project;
                    return (
                        <div
                            key={idx}
                            className={`flex  lg:gap-10 border-4 rounded-lg  bg-b1 flex-col w-full ${
                                idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                            }`}
                        >
                            <div className="flex flex-col justify-center m-4 ">
                                <div className="bg-white border-4 rounded-lg p-8 flex-center flex-col">
                                    <div className="">
                                        <h2 className="font-zilla font-bold text-2xl">{title}</h2>
                                        <p className="font-zilla text-xl">{summary}</p>
                                        <div className="pt-4">
                                            <p className="font-zilla font-semibold text-xl">stacks used: </p>
                                            <div className="flex flex-row">
                                                {stacks.map((stack, idx) => {
                                                    const { icon } = stack;
                                                    return <FlipIcon icon={icon as IconName} key={idx} />;
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-4 flex flex-col sm:flex-row gap-4">
                                        <Anchor hrefLoc={demoHref} appearAsBtn text="See Demo" classes="max-w-28" />
                                        <Anchor hrefLoc={gitHref} appearAsBtn text="See Repo" classes="max-w-28" />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-2/3 flex flex-col justify-center m-4 ">
                                <img src={imgSrc} alt={imgAlt} className="rounded-lg  max-h-96 " />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

//do the card with the rolling animation, https://www.stefantopalovic.com/#home
export default Projects;
