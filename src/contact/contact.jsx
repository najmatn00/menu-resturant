import {CiLocationOn} from 'react-icons/ci'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import ContactsHeader from './contactsHader'
import ContactForm from './contactForm'
const Contact = () => {
    return ( <div>
                <div className="flex flex-col justify-center items-center mt-8 gap-2">

                    <h1 className="Robt_bold text-3xl text-white">Get in touch</h1>
                    <p className="Robt-regular text-white ">Contact us for a guote</p>
                </div>
                <div className="flex justify-center items-center gap-10 my-6">
                    <ContactsHeader>
                        <CiLocationOn className='w-6 h-6'/>
                        <p className='text-sm'>102 street 2714 don</p>
                        
                    </ContactsHeader>
                    <ContactsHeader>
                        <BsTelephone className='w-6 h-6'/>
                        <p className='text-sm'>+02 1234 567</p>
                    
                    </ContactsHeader>
                    <ContactsHeader>
                        <MdOutlineMailOutline className='w-6 h-6'/>
                        <p className='text-sm'>najmehtn1379</p>
                        
                    </ContactsHeader>
                </div>
                <div className="flex md:justify-center items-center ">
                    <ContactForm/>
                </div>
    </div> );
}
 
export default Contact;