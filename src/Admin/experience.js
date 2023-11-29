import axios from "axios";
import React, { useEffect, useState } from "react";
import Contact from "../Components/Contact";
let url='https://client-portfolio-qum8.onrender.com/experience1/'
const id1 ="656581c6e3a041e8467a54f8"
const id2 ="6565ce98878828bc93df920d"
const Resume = () => {
    const [dbid,setDbid]=useState('')
    const [data1,setData1]=useState([])
    const [data2,setData2]=useState([])
    const [edit1,setEdit1]=useState(false)
    const [edit2,setEdit2]=useState(false)
    const editing1=()=>{
        setEdit1(!edit1)
        setDbid(id1)
    }
    const editing2 =()=>{
        setEdit2(!edit2)
        setDbid(id2)
    }
//   Experience 1

// /updating exp1

const [role,setRole]=useState()
const [company,setCompany]=useState()
const [duration,setDuration]=useState()
const [description,setDescription]=useState()
const handleChange =(e)=>{
    setRole(e.target.value)
}
const handleChange1 =(e)=>{
    setCompany(e.target.value)
}
const handleChange2 =(e)=>{
    setDuration(e.target.value)
}
const handleChange3 =(e)=>{
    setDescription(e.target.value)
}
console.log(role)
const upadteRole = (id)=>{
    axios.put(`https://client-portfolio-qum8.onrender.com/experience1//${id1}`,{role,company,duration,description})
    window.location.reload()
}
// update exp2
const [role2,setRole2]=useState()
const [company2,setCompany2]=useState()
const [duration2,setDuration2]=useState()
const [description2,setDescription2]=useState()
const handleChange20 =(e)=>{
    setRole2(e.target.value)
}
const handleChange21 =(e)=>{
    setCompany2(e.target.value)
}
const handleChange22 =(e)=>{
    setDuration2(e.target.value)
}
const handleChange23 =(e)=>{
    setDescription2(e.target.value)
}
// url exp2 to put
const upadteRole2 = (id)=>{
    axios.put(`https://client-portfolio-qum8.onrender.com/experience1//${id2}`,{role:role2,company:company2,duration:duration2,description:description2})
    window.location.reload()
}
const updateSubmit=(e)=>{
    e.preventDefault()
    if(!role || !company || !duration || !description){
        alert("please fill fields")
    }
    else if(dbid==id1){
        upadteRole(data1.id)
    }else{
        upadteRole2()
    }
}
// fetching exp1
useEffect(() => {
   
    experience1()
    experience2()
  }, [])
  const experience1 = async () => {
    const response = await axios.get(`https://client-portfolio-qum8.onrender.com/experience1/${id1}`);
    const dd=response.data
   setData1(response.data)
//    setState({...response.data})
   setRole(dd.role)
   setCompany(dd.company)
   setDuration(dd.duration)
   setDescription(dd.description)
} 
// fetching exp2
const experience2 = async () => {
    const response = await axios.get(`https://client-portfolio-qum8.onrender.com/experience1/${id2}`);

    const dd=response.data
    console.log(dd)
   setData2(response.data)

   setRole2(dd.role)
 
   setCompany2(dd.company)
   setDuration2(dd.duration)
   setDescription2(dd.description)
   console.log(role2,company2,duration2,description2)
} 
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my Experiences 
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience 1
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  {data1 && data1.role}
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                {data1 && data1.company}
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                {data1 && data1.duration}
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  
                {data1 && data1.description}
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience 2
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                {data2 && data2.role}
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                {data2 && data2.company}
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                {data2 && data2.duration}
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                
                {data2 && data2.description}                </p>
              </div>
            </div>
          </fieldset>
        </div>
        
      </div>
      <button className="bg-yellow-200 p-2 rounded" onClick={e=>editing1()}>edit experience1</button>
      <button className="bg-green-200 p-2 mx-3 rounded" onClick={e=>editing2()}>edit experience2</button>
      {
            edit1?(
            <div class="mb-3">
                <form
             onSubmit={updateSubmit}
                            class="d-flex">
                            <div class="col">
                                <div class="mb-3">
                                    
                                <label className="bg-green-200 p-1.5 px-3">Role</label>
              <input type="text"
                class="form-control p-2 px-8 " name="" onChange={handleChange} id="" aria-describedby="helpId" placeholder="Role" value={role}/>
                <label className="bg-green-200 p-1.5 px-3">company</label>
             <input type="text"
                class="form-control p-2 px-8" name="" onChange={handleChange1} id="" aria-describedby="helpId" placeholder="company" value={company}/>
               <label className="bg-green-200 p-1.5 px-3">Duration</label>  
             <input type="text"
                class="form-control p-2 px-8 " name="" onChange={handleChange2}  id="" aria-describedby="helpId" placeholder="Duration" value={duration}/><br/>
                 <label className="bg-green-200 p-1.5 px-3  ">Description</label><br/>
             <textarea type="text"
                class="form-control h-40 p-4 w-1/2" name="" onChange={handleChange3} id="" aria-describedby="helpId" placeholder="Description" value={description}/>
                                    <button className='bg-red-200 p-2 mx-3 rounded'   >Submit<i class="bi bi-send"></i></button>
                                </div>
                            </div>
                        </form>
             
             
            </div>
  ):''
        }
        {
            edit2?(
            <div class="mb-3">
                <div>edit exp2</div>
                <form
             onSubmit={updateSubmit}
                            class="d-flex">
                            <div class="col">
                                <div class="mb-3">
                                    
                                <label className="bg-green-200 p-1.5 px-3">Role</label>
              <input type="text"
                class="form-control p-2 px-8 " name="" onChange={handleChange20} id="" aria-describedby="helpId" placeholder="Role" value={role2}/>
                <label className="bg-green-200 p-1.5 px-3">company</label>
             <input type="text"
                class="form-control p-2 px-8" name="" onChange={handleChange21} id="" aria-describedby="helpId" placeholder="company" value={company2}/>
               <label className="bg-green-200 p-1.5 px-3">Duration</label>  
             <input type="text"
                class="form-control p-2 px-8 " name="" onChange={handleChange22}  id="" aria-describedby="helpId" placeholder="Duration" value={duration2}/><br/>
                 <label className="bg-green-200 p-1.5 px-3 mt-2 ">Description</label><br/>
             <textarea type="text"
                class="form-control p-4 h-40 w-1/2" name="" onChange={handleChange23} id="" aria-describedby="helpId" placeholder="Description" value={description2}/>
                                    <button className='bg-red-200 p-2 mx-3 rounded'  >Submit<i class="bi bi-send"></i></button>
                                </div>
                            </div>
                        </form>
             
             
            </div>
  ):''
        }
    </div>
  );
};

export default Resume;
