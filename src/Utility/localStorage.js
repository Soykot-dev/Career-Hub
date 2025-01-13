import toast from "react-hot-toast";

const getStoredJobs = () => {
  const jobs = localStorage.getItem("job-applications");
  if (jobs) {
    return JSON.parse(jobs);
  }
  return [];
};

const storeJob = (id) => {
  const jobs = getStoredJobs();
  const existingJob = jobs.find((jId) => jId === id);
  if (existingJob) {
    toast.error("Job Already Applied!");
    return;
  } else {
    jobs.push(id);
    localStorage.setItem("job-applications", JSON.stringify(jobs));
    toast.success("Job Applied Successfully!");
  }
};

export { getStoredJobs, storeJob };
