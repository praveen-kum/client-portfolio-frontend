import React, { useEffect, useState } from "react";
import WorkCard from "./chip/WorkCard";
import axios from "axios";
const id="6564949e8b304aaf5260c938"
const Work = () => {
  const [about,setAbout]=useState()
    useEffect(() => {
   
        getRole()
      }, [])
      const getRole = async () => {
        const response = await axios.get(`https://client-portfolio-qum8.onrender.com/about/${id}`);
    console.log(response.data)
       setAbout(response.data)
        
    } 
  return (
    <div id="works" className="container m-auto mt-16">
      {/* heading */}
      <div 
      data-aos="fade-up"
       className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">About</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div 
      data-aos="fade-up"
       className="left flex-1 w-full">
       
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box grid grid-cols-1 space-y-5 space-x-5 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
        {about &&     <p className="text-gray-700 font-medium w-[100%]">
        
        {about.name}
      </p> }
        </div>
      </div>
    </div>
  );
};

export default Work;
