import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface iProps {
    children: ReactNode;
}

interface iState {
    hasError: boolean;
}

export default class ErrorBoundaryClass extends Component<iProps, iState> {
    state = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        console.log('error boundary', error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Fallback />;
        }
        return this.props.children;
    }
}

// eslint-disable-next-line react-refresh/only-export-components
const Fallback = () => {
    return (
        <>
            <p>error encounter, please return to Home</p>
            <Link to="/">Home</Link>
        </>
    );
};
