import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const handleDataLength = () => {
        setDataLength(jobs.length);
    }
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);
    return (
        <div className=" mx-3 md:mx-auto mb-8 mt-10">
            <h2 className="text-3xl md:text-center font-bold ">Featured Jobs</h2>
            <p className="text-justify md:text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {
                    jobs?.slice(0, dataLength).map(job => <Job key={job.id} job={job} />)
                }
            </div>
            {
                dataLength < jobs.length && <div className="flex justify-center items-center mt-7"><button onClick={handleDataLength} className='px-4 py-2 text-white font-medium rounded-[3px] bg-gradient-to-r from-[#808EFE] to-[#a280fe] hover:from-[#875cff] hover:to-[#5b6eff] duration-500'>Load More</button></div>
            }
        </div>
    );
};

export default FeaturedJobs;