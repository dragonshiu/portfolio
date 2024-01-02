import Carousel from '../../../Components/molecules/carousel';

const ProjectCarousel = () => {
    const contentArray = [
        { src: '../../../../assets/projectSamples/p1.png', altText: 'promptopia', href: '/projects' },
        { src: '../../../../assets/projectSamples/p2.png', altText: 'promptopia', href: '/projects' },
        { src: '../../../../assets/projectSamples/p3.png', altText: 'promptopia', href: '/projects' },
    ];
    return (
        <div className="w-full px-8 py-4 md:py-12 md:pb-20 md:px-24 ">
            <h2 className="font-bold font-zilla text-3xl text-b3 text-center mb-8">Projects Snapshots</h2>
            <div className="w-full flex-between gap-5 flex-col lg:flex-row">
                <div className="w-full p-4 lg:w-1/3 border-4 rounded-lg bg-white">
                    <p className="text-lg">Take a look at some sample projects I have designed and implemented.</p>
                    <br />
                    <p className="text-lg">
                        Some of my stacks include: Javascript, typescript, HTML5, CSS, MERN, Java Spring boot, and more
                    </p>
                    <br />
                    <p className="text-lg">Click on the carousel to learn more</p>
                </div>
                <div className="w-full lg:w-2/3">
                    <Carousel imgArray={contentArray} />
                </div>
            </div>
        </div>
        // <></>
    );
};

export default ProjectCarousel;
