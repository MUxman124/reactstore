import { FaDollarSign } from 'react-icons/fa';
import { FaBuffer } from 'react-icons/fa'
import { FaKeycdn } from 'react-icons/fa';
import {HiCalculator} from 'react-icons/hi2'
const CustomerExperience = () => {
    return (
        <div>
            <h1 className="text-4xl text-gray-700 font-semibold ml-10 mt-20 mb-10">Best Customer Experience</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-10">
                <div className="flex flex-col space-y-3 items-center lg:items-start">
                    <span className="text-gray-700 p-6 text-4xl rounded-md bg-gray-100 flex-shrink">
                        <FaDollarSign />
                    </span>
                    <h1 className="text-lg text-gray-700 font-semibold">Orignal Products</h1>
                    <p >We provide money back gurantee if the product are not orignal</p>
                </div>

                <div className="flex flex-col space-y-3 items-center lg:items-start">
                    <span className="text-gray-700 p-6 text-4xl rounded-md bg-gray-100 flex-shrink">
                        <FaBuffer />
                    </span>
                    <h1 className="text-lg text-gray-700 font-semibold">Satisfaction Gurantee</h1>
                    <p className='txt-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quod!</p>
                </div>
                <div className="flex flex-col space-y-3 items-center lg:items-start">
                    <span className="text-gray-700 p-6 text-4xl rounded-md bg-gray-100 flex-shrink">
                        <FaKeycdn />
                    </span>
                    <h1 className="text-lg text-gray-700 font-semibold">New Arrival Everyday</h1>
                    <p className='txt-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quod!</p>
                </div>
                <div className="flex flex-col space-y-3 items-center lg:items-start">
                    <span className="text-gray-700 p-6 text-4xl rounded-md bg-gray-100 flex-shrink">
                        <HiCalculator />
                    </span>
                    <h1 className="text-lg text-gray-700 font-semibold">Fast & Free Shipping</h1>
                    <p className='txt-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quod!</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerExperience;
