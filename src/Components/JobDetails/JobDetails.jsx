import { useLoaderData, useParams } from "react-router-dom";
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import moneyImg from '../../assets/icons/money.png'
import calendarImg from '../../assets/icons/calendar.png'
import phoneImg from '../../assets/icons/phone.png'
import emailImg from '../../assets/icons/email.png'
import locationImg from '../../assets/icons/location2.png'
import { storeJob } from "../../Utility/localStorage";
import { Toaster } from "react-hot-toast";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    const { job_title, salary, contact_information, job_description, job_responsibility, educational_requirements, experiences } = job;
    const { phone, email, address } = contact_information;
    const handleApplyJob = (id) => {
        storeJob(id);
    }
    
    return (
        <div className="mb-16">
            <div className="relative flex justify-center items-center bg-[#F9F9FF] rounded-md h-56">
                <img className="absolute left-0 bottom-0" src={bg1} alt="" />
                <h3 className="text-2xl font-semibold">Job Details</h3>
                <img className="absolute right-0 top-0" src={bg2} alt="" />
            </div>
            <div className="flex flex-col md:flex-row gap-5  md:mt-16 mx-3 md:mx-0">
                <div className="md:w-2/3 bg-[#faf9ff] p-5 space-y-4 rounded-md text-justify">
                    <p className="font-semibold">Job Description: <span className="font-normal text-gray-700">{job_description}</span></p>
                    <p className="font-semibold">Job Responsibility: <span className="font-normal text-gray-700">{job_responsibility}</span></p>
                    <p className="font-semibold">Educational Requirements:</p>
                    <p className="font-normal text-gray-700">{educational_requirements}</p>
                    <p className="font-semibold">Experiences:</p>
                    <p className="font-normal text-gray-700">{experiences}</p>
                </div>
                <div className="md:w-2/6 flex flex-col rounded-md">
                    <div className="space-y-3 flex-grow rounded-md p-5 bg-[#faf9ff]">
                        <p className="font-semibold">Job Details</p>
                        <hr className="border-[#b4a7ff]" />
                        <div className="flex items-center gap-1">
                            <img className="w-4" src={moneyImg} alt="" />
                            <p className="text-sm font-semibold">Salary: <span className="font-normal text-gray-500">{salary}(Per Month)</span></p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-4" src={calendarImg} alt="" />
                            <p className="text-sm font-semibold">Job Title: <span className="font-normal text-gray-500">{job_title}</span></p>
                        </div>
                        <p className="font-semibold">Contact Information</p>
                        <hr className="border-[#b4a7ff]" />
                        <div className="flex items-center gap-1">
                            <img className="w-4" src={phoneImg} alt="" />
                            <p className="text-sm font-semibold">Phone: <span className="font-normal text-gray-500">{phone}</span></p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-4" src={emailImg} alt="" />
                            <p className="text-sm font-semibold">Email: <span className="font-normal text-gray-500">{email}</span></p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-4" src={locationImg} alt="" />
                            <p className="text-sm font-semibold">Address: <span className="font-normal text-gray-500">{address}</span></p>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => handleApplyJob(id)} className="w-full mt-4 bg-[#9ea9ff] hover:bg-[#6779ff] duration-150 text-white font-semibold py-2 rounded-md">Apply Now</button>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default JobDetails;