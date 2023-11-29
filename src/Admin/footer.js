import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiAircall, SiGmail, SiLinkedin } from "react-icons/si";
const id ='6565e2d3e7e868153af9bc70'
const Footer = () => {
    const [mail,setMail]=useState("")
    const [phone,setPhone]=useState()
    const [linkedin,setLinkedin]=useState("")
    const [edit,setEdit]=useState(false)
    useEffect(() => {
   
        getRole()
      }, [])
      const getRole = async () => {
        const response = await axios.get(`https://client-portfolio-qum8.onrender.com/contact/${id}`);
        const data=response.data
        setMail(data.mail)
        setPhone(data.phone)
        setLinkedin(data.linkedin)
        // console.log(mail,phone,linkedin)
        
    } 
    const updatecontact =()=>{
        axios.put(`https://client-portfolio-qum8.onrender.com/contact/${id}`,{mail,phone,linkedin})
        alert('contact info updated Succefully')
        setEdit(!edit)
    }
    const handleInputChange=(e)=>{
        setPhone(e.target.value)
    }
    const handleInputChange2=(e)=>{
        setMail(e.target.value)
    }
    const handleInputChange3=(e)=>{
        setLinkedin(e.target.value)
    }
    const updateSubmit=(e)=>{
        e.preventDefault()
        console.log(mail,phone,linkedin)
        if(!mail || !phone || !linkedin){
            alert('something not filled')
        }else{
            updatecontact()
            
        }
       
    }
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-500 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href={`tel:+${phone}`}
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <SiAircall className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Click here to Call</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href={`mailto:${mail}`}
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <SiGmail className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Mail me</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href={linkedin}
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <SiLinkedin className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Linkedin</p>
          </a>
        </div>
        <button className="bg-green-300 rounded p-3" onClick={(e)=>setEdit(!edit)}>Edit contact details</button>
       {edit? <form
             onSubmit={updateSubmit}
                            class="d-flex">
                            <div class="col">
                                <div class="mb-3">
                                    <label>Phone number</label>
                                    <input
                                        id="name"
                                        name="name"
                                        placeholder="Role 1..."
                                        onChange={handleInputChange}
                            
                                        type="text" class="form-control h-8 m-2 border-2 border-blue" value={phone} aria-describedby="helpId" />
                                        <label>Mail</label>
                                        <input
                                        id="name"
                                        name="name"
                                        placeholder="Role 2..."
                                        onChange={handleInputChange2}

                                        type="text" class="form-control mx-2 h-8 border-2 border-blue" value={mail} aria-describedby="helpId" />
                                        <label>linkedin</label>
                                        <input
                                        id="name"
                                        name="name"
                                        placeholder="Role 2..."
                                        onChange={handleInputChange3}

                                        type="text" class="form-control mx-2 h-8 border-2 border-blue" value={linkedin} aria-describedby="helpId" />
                                    <button className='mt-1 rounded text-bg-primary border-0 px-3 p-2'   >Submit<i class="bi bi-send"></i></button>
                                </div>
                            </div>
                        </form>:''}
        <div className="sm:text-[12px] text-end ">
           <span></span>
          <a href="#"></a> 
        </div>
        
      </div>
      <div className="sm:text-[12px] text-end bg-yellow-500">
           <span>&copy;praveen</span>
          <a href="#"></a> 
        </div>
    </div>
  );
};

export default Footer;
