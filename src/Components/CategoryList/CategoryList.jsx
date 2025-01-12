import account from '../../assets/icons/accounts.png'
import creative from '../../assets/icons/creative.png'
import marketing from '../../assets/icons/marketing.png'
import chip from '../../assets/icons/chip.png'
import Category from '../Category/Category';
const CategoryList = () => {
    return (
        <div className='mt-10 mx-3 md:mx-0'>
            <h2 className="text-3xl md:text-center font-bold">Job Category List</h2>
            <p className="text-justify md:text-center mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
                <Category icon={account} title='Account & Finance' jobs='300' />
                <Category icon={creative} title='Creative Design' jobs='100+' />
                <Category icon={marketing} title='Marketing & Sales' jobs='150' />
                <Category icon={chip} title='Engineering Job' jobs='224' />
            </div>
        </div>
    );
};

export default CategoryList;