import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-48">
            <h1 className="text-3xl font-semibold text-center">Oops!!! Page Not Found</h1>
            <Link className="bg-gradient-to-r from-[#808EFE] to-[#a280fe] hover:from-[#875cff] hover:to-[#5b6eff] mt-4 py-3 px-5 rounded-md text-white" to="/">Go Back Home</Link>
        </div>
    );
};

export default Error;