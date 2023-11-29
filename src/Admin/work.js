import axios from "axios";
import React, { useEffect, useState } from "react";

// const id='6564949e8b304aaf5260c938'

// about data get 

  


const Work = () => {
    const [id,setId]=useState('6564949e8b304aaf5260c938')
    const [edit,setEdit]=useState(false)
    const [about,setAbout]=useState()
    useEffect(() => {
   
        getRole()
      }, [])
      const getRole = async () => {
        const response = await axios.get(`https://client-portfolio-qum8.onrender.com/about/${id}`);
    console.log(response.data)
       setAbout(response.data)
        
    } 

    // updating about
const update = async(about)=>{
  await axios.put(`https://client-portfolio-qum8.onrender.com/about/6564949e8b304aaf5260c938`,{name:about})
    window.location.reload()
}
const updateSubmit=(e)=>{
    e.preventDefault();
 if(about.length>10){update(about)}else{alert("your not Changed any data")}
}
const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(e.target.value)
    setAbout( e.target.value )

};
  return (
    <div>
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
        <button className="bg-gradient-to-r from-red-300 to-blue-300 p-2 rounded" onClick={e=>setEdit(!edit)}>Edit about</button>
      </div>
      {edit? <form className="width-50"
            onSubmit={updateSubmit}
                           >
                           <div>
                               <div >
                                   
                                   <textarea
                                       id="name"
                                       name="name"
                                       placeholder="Role 1..."
                                       onChange={handleInputChange}
                           
                                       type="text" className=" items-center justify-center w-1/2 h-40" value={about.name} aria-describedby="helpId" />
                                       
                                   <button className='mt-1 rounded text-bg-primary border-0 px-3 p-2' onClick={() => setId(about.id)}  >Submit<i class="bi bi-send"></i></button>
                               </div>
                           </div>
                       </form>:''}
          </div>
         
                       </div>
  );
};

export default Work;
