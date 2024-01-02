import PictureCard from '../../Components/atoms/pictureCard';

//cards of projects
const Projects = () => {
    const pArray = [{ title: '', imgSrc: '', imgAlt: '', stacks: [{ name: 'react', icon: '' }], summary: '' }];
    return (
        <div className="w-full bg-pattern2 min-h-screen flex-center px-8 md:px-20">
            <div className="lg:w-2/3 w-full border-4 flex-col lg:flex-row flex-center flex-wrap bg-white gap-5">
                <div className="w-80 ">
                    <PictureCard
                        headerText={'project1'}
                        imgInfo={{
                            imgAlt: 'project 1 pic',
                            imgSrc: '../../../assets/projectSamples/p1.png',
                        }}
                        text="blahg"
                    />
                </div>
                <div className="w-80 ">
                    <PictureCard
                        headerText={'project1'}
                        imgInfo={{
                            imgAlt: 'project 1 pic',
                            imgSrc: '../../../assets/projectSamples/p1.png',
                        }}
                        text="blahg"
                    />
                </div>
                <div className="w-80 ">
                    <PictureCard
                        headerText={'project1'}
                        imgInfo={{
                            imgAlt: 'project 1 pic',
                            imgSrc: '../../../assets/projectSamples/p1.png',
                        }}
                        text="blahg"
                    />
                </div>
                {/* <PictureCard
                    headerText={'project2'}
                    imgInfo={{
                        imgAlt: 'project 2 pic',
                        imgSrc: '../../../assets/projectSamples/p2.png',
                    }}
                    text="blahg"
                />
                <PictureCard
                    headerText={'project2'}
                    imgInfo={{
                        imgAlt: 'project 2 pic',
                        imgSrc: '../../../assets/projectSamples/p2.png',
                    }}
                    text="blahg"
                /> */}
            </div>
        </div>
    );
};

//do the card with the rolling animation, https://www.stefantopalovic.com/#home
export default Projects;
