import BasicCard from '../../Components/atoms/basicCard';

const ContactMe = () => {
    return (
        <div className="flex flex-col flex-center">
            <h2 className="mt-4 mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">Contact Me</h2>
            <div className="md:flex lg:flex-row flex-col">
                <BasicCard headerText="Email" icon="envelope">
                    <a href="mailto:dragonshiu@gmail.com">Let's talk</a>
                </BasicCard>
                <BasicCard headerText="LinkedIn" icon={{ prefix: 'fab', iconName: 'linkedin' }}>
                    <a href="https://www.linkedin.com/in/yat-ching-shiu-338bb1129/" target="_blank">
                        Let's connect
                    </a>
                </BasicCard>
            </div>
        </div>
    );
};

export default ContactMe;
