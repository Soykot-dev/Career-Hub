import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import AppliedJobCard from "../Job/AppliedJobCard/AppliedJobCard";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const [dropdownText, setDropdownText] = useState('Filter By ˅');
    const jobs = useLoaderData();
    useEffect(() => {
        const storeJob = getStoredJobs();
        const jobApplied = jobs.filter(job => storeJob.includes(job.id))
        setAppliedJobs(jobApplied);
        setDisplayJobs(jobApplied);
    }, [jobs]);
    const handleFilter = (value) => {
        if (value === 'all') {
            setDisplayJobs(appliedJobs);
            setDropdownText('All');
        }
        else if (value === 'remote') {
            const filterJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(filterJob);
            setDropdownText('Remote');
        }
        else if (value === 'onsite') {
            const filterJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(filterJob);
            setDropdownText('Onsite');
        }
    }
    return (
        <div className="mb-16">
            <div className="relative flex justify-center items-center bg-[#F9F9FF] rounded-md h-56">
                <img className="absolute left-0 bottom-0" src={bg1} alt="" />
                <h3 className="text-2xl font-semibold">Applied Jobs</h3>
                <img className="absolute right-0 top-0" src={bg2} alt="" />
            </div>
            <div className="flex justify-end mt-10 mb-10">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 w-[104px] h-[50px] rounded-sm">{dropdownText}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-40 p-2 shadow">
                        <li onClick={() => handleFilter('all')}>
                            <a>All</a>
                        </li>
                        <li onClick={() => handleFilter('remote')}>
                            <a>Remote</a>
                        </li>
                        <li onClick={() => handleFilter('onsite')}>
                            <a>Onsite</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-3 md:mx-0">
                {
                    displayJobs?.map(job => <AppliedJobCard key={job.id} job={job}></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;