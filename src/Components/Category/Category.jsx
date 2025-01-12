import PropTypes from "prop-types";

const Category = ({icon, title, jobs}) => {
    return (
        <div className="border px-2 py-4 md:px-7 md:py-9 md:space-y-2 bg-gradient-to-r from-[#F9F9FF] to-[#FAF8FF] text-white rounded-sm md:rounded-md">
            <img className="w-8 md:w-auto" src={icon} alt="" />
            <h3 className="text-sm md:text-lg font-semibold text-black">{title}</h3>
            <p className="text-xs md:text-base text-gray-500">{jobs} Jobs Available</p>
        </div>
    );
};

Category.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    jobs: PropTypes.string.isRequired
}

export default Category;