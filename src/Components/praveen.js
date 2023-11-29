import React, { useEffect, useState } from "react";

import { FiDownload } from "react-icons/fi";

import { TypeAnimation } from "react-type-animation";
import { saveAs } from 'file-saver';
// import resumePDF from "../../assets/Resume.pdf";
import pic from './bgdev.png'
import stamp from './logostamp.png'
import Aos from "aos";
import resumepdf from '../resumes.pdf'
import axios from "axios";
const id='6564875f2841895dde462c09'
const Praveen = () => {
  // const { name ,body} = state;
// const [mail,setMail]=useState("")
// const [phone,setPhone]=useState()
const [linkedin,setLinkedin]=useState("")
const id1="6565e2d3e7e868153af9bc70"
useEffect(() => {

  getContact()
  }, [])
  const getContact = async () => {
    const response = await axios.get(`https://client-portfolio-qum8.onrender.com/contact/${id1}`);
    const data=response.data
    // setMail(data.mail)
    // setPhone(data.phone)
    setLinkedin(data.linkedin)
    // console.log(mail,phone,linkedin)
    
} 
  const [role,setRole]=useState([])
  useEffect(() => {
    Aos.init(2000);
  }, [])
  // roles
  useEffect(() => {
   
    getRole()
  }, [])
  const getRole = async () => {
    const response = await axios.get("https://client-portfolio-qum8.onrender.com/roles");

   setRole(response.data[0])
    
} 
// pdf
const [loading, setLoading] = useState(true);
const resumeName="supriya_pasupuleti_python_developer"
const fetchPdf = async () => {
  try {
    const response = await fetch(`https://client-portfolio-qum8.onrender.com/resume/${id}`);
    const blob = await response.blob();
    console.log(response)
    saveAs(blob, `supriya_pasupuleti_python_developer.pdf`);
  } catch (error) {
    console.error('Error fetching PDF:', error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-yellow-200 `}>
      <div className=" container mx-auto  h-[700px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0  flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Supriya Pasupuleti           </h2>
              {role.name || role.name2?<TypeAnimation
              data-aos="fade-up"
              sequence={[
                role.name,
                2000,
                role.name2,
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-orange-400 text-4xl font-bold sm:text-3xl"
            /> :''}
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              backend Developer
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href={linkedin}
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
           
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <button onClick={e=> fetchPdf()} className="flex items-center gap-1">
                Resume <FiDownload />
              </button>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              {/* <li>
                <a href="https://github.com/praveen-kum">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/praveen-kumar-paradesi-99a53022a/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/praveen_9866/">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[70%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={pic}
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div data-aos="rotate-round" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src={stamp}
                  alt=""
                />
                {/* <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Praveen;
