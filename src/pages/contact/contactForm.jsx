import Button from '../../ui/Button'
import { useState } from 'react'
const ContactForm = () => {
    // this state is use for send to backEnd for contact Form  
    let [dateContactUs,setDateContactUs] =useState({
        name:"username",
        pws:"pws",
        Email:"email",
        text:"text"
    });
    let ChangeHandlerUserName=(evet)=>{
        // console.log(evet.target.value);
    }
    let ChangeHandlerPws=(evet)=>{
        // console.log(evet.target.value);
    }
    let ChangeHandlerEmail=(evet)=>{
        // console.log(evet.target.value);
    }
    let ChangeHandlerText=(evet)=>{
        // console.log(evet.target.value);
    }
    let onClickSubmit=()=>{
        // this function use to submit the date whit POST method
        console.log("submit");
    }
    return ( <>
        <div className=" rounded-xl md:h-96 dark:bg-slate-600 bg-white p-4 flex flex-col md:flex-row gap-4 w-80 md:w-auto">
                <div className=" flex flex-col gap-4">
                    <p>Contact Form</p>
                    <input onChange={ChangeHandlerUserName} type="text" placeholder="user name"  className="border border-gray-300 py-2 px-4 rounded-md" />
                    <input onChange={ChangeHandlerEmail} type="email" placeholder="Email"  className="border border-gray-300 py-2 px-4 rounded-md"/>
                    <input onChange={ChangeHandlerPws} type="pasword "  placeholder="pasword" className="border border-gray-300 py-2 px-4 rounded-md"/>
                    <Button click={onClickSubmit}  classCss=' hidden md:static py-2 px-6 bg-[#d41a27] text-white  rounded-md '>
                        submit
                    </Button>
                </div>
                <div className="flex flex-col h-full">
                    <label htmlFor="">maseges</label>
                    <input onChange={ChangeHandlerText} type="text" className="border-2 border-gray-300 rounded-md h-64 md:h-full md:w-64"  />
                </div>
                <Button click={onClickSubmit}  classCss=' py-2 px-6 bg-[#d41a27] text-white  rounded-md  md:hidden '>
                        submit
                 </Button>
                
        </div>
    </> );
}
 
export default ContactForm;