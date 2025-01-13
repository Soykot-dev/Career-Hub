import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#808EFE] underline hover:text-[#6d6fff] font-semibold duration-100 hover:mr-1" : "text-gray-500 hover:text-black duration-100 hover:underline hover:mr-1"}>Home</NavLink></li>
        <li><NavLink to="/jobs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#808EFE] underline hover:text-[#6d6fff] font-semibold duration-100 hover:mx-1" : "text-gray-500 hover:text-black duration-100 hover:underline hover:mx-1"}>Jobs</NavLink></li>
        <li><NavLink to="/appliedJobs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#808EFE] underline hover:text-[#6d6fff] font-semibold duration-100 hover:mx-1" : "text-gray-500 hover:text-black duration-100 hover:underline hover:mx-1"}>Applied Jobs</NavLink></li>
        <li><NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#808EFE] underline hover:text-[#6d6fff] font-semibold duration-100 hover:mx-1" : "text-gray-500 hover:text-black duration-100 hover:underline hover:mx-1"}>Statistics</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#808EFE] underline hover:text-[#6d6fff] font-semibold duration-100 hover:ml-1" : "text-gray-500 hover:text-black duration-100 hover:underline hover:ml-1"}>Blogs</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown -ml-5 md:ml-0">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-xl md:text-2xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-5 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="text-sm md:text-base cursor-pointer px-4 py-2 text-white font-medium rounded-[3px] bg-gradient-to-r from-[#808EFE] hover:from-[#875cff] to-[#a280fe] hover:to-[#5b6eff] duration-1000">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;