import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const storeJob = getStoredJobs();
        const jobApplied = jobs.filter(job => storeJob.includes(job.id))
        setAppliedJobs(jobApplied);
    }, [jobs])
    return (
        <div>
            <h2>Job I applied {appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;