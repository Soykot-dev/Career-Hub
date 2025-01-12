import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-48">
            <h1 className="text-3xl font-semibold text-center">Oops!!! Page Not Found</h1>
            <Link className="btn btn-accent mt-4" to="/">Go Back Home</Link>
        </div>
    );
};

export default Error;