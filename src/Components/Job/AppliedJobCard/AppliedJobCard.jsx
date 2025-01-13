import { Link } from 'react-router-dom';
import locationPng from '../../../assets/icons/Location.png'
import money from '../../../assets/icons/money2.png'
const AppliedJobCard = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="mt-5 flex flex-col md:flex-row gap-5 border p-5 rounded-md">
            <div className="bg-[#F4F4F4] w-40 h-40  flex justify-center items-center rounded-md">
                <img className='w-20' src={logo} alt="" />
            </div>
            <div className="flex-grow space-y-3">
                <h3 className="text-lg font-medium">{job_title}</h3>
                <p className="text-sm">{company_name}</p>
                <div className="flex gap-3">
                    <p className="text-xs border border-[#808EFE] text-[#808EFE] font-medium rounded-sm px-4 py-2">{remote_or_onsite}</p>
                    <p className="text-xs border border-[#808EFE] text-[#808EFE] font-medium rounded-sm px-3 py-2">{job_type}</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-1">
                        <img className='w-5' src={locationPng} alt="" />
                        <p className="text-sm">{location}</p>
                    </div>
                    <div className="flex gap-1">
                        <img className='w-5' src={money} alt="" />
                        <p className="text-sm">{salary}</p>
                    </div>
                </div>
            </div>
            <div className="">
                <Link to={`/job/${id}`}>
                    <button className='px-4 py-2 text-white font-medium rounded-[3px] bg-gradient-to-r from-[#808EFE] hover:from-[#875cff] to-[#a280fe] hover:to-[#5b6eff] duration-1000'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJobCard;