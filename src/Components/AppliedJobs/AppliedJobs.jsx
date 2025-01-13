import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import AppliedJobCard from "../Job/AppliedJobCard/AppliedJobCard";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const storeJob = getStoredJobs();
        const jobApplied = jobs.filter(job => storeJob.includes(job.id))
        setAppliedJobs(jobApplied);
    }, [jobs])
    return (
        <div className="mb-16">
            <div className="relative flex justify-center items-center bg-[#F9F9FF] rounded-md h-56">
                <img className="absolute left-0 bottom-0" src={bg1} alt="" />
                <h3 className="text-2xl font-semibold">Applied Jobs</h3>
                <img className="absolute right-0 top-0" src={bg2} alt="" />
            </div>
            <div className="mx-3 md:mx-0">
                {
                    appliedJobs?.map(job => <AppliedJobCard key={job.id} job={job}></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;