import Anchor from '../../Components/atoms/anchor';
import BasicCard from '../../Components/atoms/basicCard';

const ContactMe = () => {
    return (
        <div className="flex flex-col flex-center lg:pt-32">
            <h2 className="font-philo mt-4 mb-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:pb-8">Contact Me</h2>
            <div className="md:flex lg:flex-row flex-col lg:gap-8 lg:mb-24">
                <BasicCard headerText="Email" icon="envelope">
                    <Anchor text="Let's talk" hrefLoc="mailto:dragonshiu@gmail.com" isBlank appearAsBtn />
                </BasicCard>
                <BasicCard headerText="LinkedIn" icon={{ prefix: 'fab', iconName: 'linkedin' }}>
                    <Anchor
                        text="Let's connect"
                        hrefLoc="https://www.linkedin.com/in/yat-ching-shiu-338bb1129/"
                        isBlank
                        appearAsBtn
                    />
                </BasicCard>
            </div>
        </div>
    );
};

export default ContactMe;
