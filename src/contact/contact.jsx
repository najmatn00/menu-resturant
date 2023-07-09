import {CiLocationOn} from 'react-icons/ci'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
const Contact = () => {
    return ( <>
    <div className="flex flex-col justify-center items-center mt-8 gap-2">
        <h1 className="Robt_bold text-3xl text-white">Get in touch</h1>
        <p className="Robt-regular text-white ">Contact us for a guote</p>
    </div>
    <div className="flex justify-center items-center gap-10 my-6">
    <div className="flex flex-col justify-center items-center gap-2">
    <CiLocationOn className='w-6 h-6'/>
    <p className='text-sm'>102 street 2714 don</p>
    
    </div>
    <div className="flex flex-col justify-center items-center gap-2">
    <BsTelephone className='w-6 h-6'/>
    <p className='text-sm'>+02 1234 567</p>
    
    </div>
    <div className="flex flex-col justify-center items-center gap-2">
    <MdOutlineMailOutline className='w-6 h-6'/>
    <p className='text-sm'>najmehtn1379</p>
    
    </div>
    </div>
    <div className="flex justify-center items-center ">
    <div className=" w-96 rounded-xl h-96 bg-white">
    <p>Contact Form</p>
   
    </div>
    </div>
    </> );
}
 
export default Contact;