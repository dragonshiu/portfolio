import FullIntro from './Components/fullIntro';
import ProjectCarousel from './Components/projectCarousel';
import QuickIntro from './Components/quickIntro';

export default function Home() {
    return (
        <>
            <QuickIntro />
            <FullIntro />
            <ProjectCarousel />
        </>
    );
}
