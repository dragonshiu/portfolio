import FullIntro from './Components/fullIntro';
import ProjectCarousel from './Components/projectCarousel';
import QuickIntro from './Components/quickIntro';
import Stacks from './Components/stacks';

export default function Home() {
    return (
        <>
            <QuickIntro />
            <div>tech stack | icons</div>
            <Stacks />
            <FullIntro />
            <ProjectCarousel />
        </>
    );
}
