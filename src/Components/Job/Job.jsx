import PropTypes from 'prop-types';
import locationPng from '../../assets/icons/Location.png'
import money from '../../assets/icons/money2.png'
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="border rounded-md p-6 space-y-2 hover:shadow-lg hover:border-[#808EFE] transition duration-200 hover:bg-gray-50">
            <div className=""><img className='w-20' src={logo} alt="" /></div>
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
            <Link to={`/job/${id}`}>
                <button className='px-4 py-2 text-white font-medium rounded-[3px] bg-gradient-to-r from-[#808EFE] hover:from-[#875cff] to-[#a280fe] hover:to-[#5b6eff] duration-1000'>View Details</button>
            </Link>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;