import user from '../../assets/images/user.png';
const Banner = () => {
    return (
        <div className="mx-2 md:mx-5 flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-9/12 space-y-3 md:space-y-6">
                <h1 className="text-3xl  md:text-left md:text-6xl font-bold">One Step <br /> Closer To Your <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#808EFE]  to-[#a280fe]">Dream Job</span></h1>
                <p className='text-justify'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div className="">
                    <button className='px-4 py-2 text-xs md:text-base text-white font-medium rounded-sm md:rounded-md bg-gradient-to-r from-[#808EFE] to-[#a280fe] hover:from-[#875cff] hover:to-[#5b6eff]'>Get Started</button>
                </div>
            </div>
            <div className="w-64 md:w-full">
                <img className='' src={user} alt="" />
            </div>
        </div>
    );
};

export default Banner;