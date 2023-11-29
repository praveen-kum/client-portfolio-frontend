import React, { useEffect, useState } from "react";

import { FiDownload } from "react-icons/fi";

import { TypeAnimation } from "react-type-animation";
// import resumePDF from "../../assets/Resume.pdf";
import pic from '../Components/bgdev.png';
import stamp from '../Components/logostamp.png'
import Aos from "aos";
import resumepdf from '../resumes.pdf'
import axios from 'axios'
import { saveAs } from 'file-saver';

const Profile = () => {
  const [role,setRole]=useState([])
  const [position1,setPosition1]=useState()
  const [position2,setPosition2]=useState()
  const [edit,setEdit]=useState(false)
  const [id,setId]=useState()
  const [resumeUpdate,setResumeUpdate]=useState(false)
  const [file, setFile] = useState(null);
const [resumeName,setResumeName]=useState("supriya_pasupuleti_python_developer")
  const iid='6564875f2841895dde462c09'
//   geting resume



  const [loading, setLoading] = useState(true);


    const fetchPdf = async (id) => {
      try {
        const response = await fetch(`https://client-portfolio-qum8.onrender.com/resume/${id}`);
        const blob = await response.blob();
        console.log(response)
        saveAs(blob, `${resumeName}.pdf`);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      } finally {
        setLoading(false);
      }
    };

   
  
// update pdf
const handleFileChange1 = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const changeName =(e)=>{
    setResumeName(e.target.value)
  }
  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('pdf', file);

    // await axios.put(`https://client-portfolio-qum8.onrender.com/resume/${iid}`,{body:formData})
    fetch(`https://client-portfolio-qum8.onrender.com/resume/${iid}`, {
      method: 'PUT',
      body: formData,
    });
  };
//   }
  
// upload resume

 
  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post( `https://client-portfolio-qum8.onrender.com/resume/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
// fetching roles
  useEffect(() => {
   
    getRole()
  }, [])
  const getRole = async () => {
    const response = await axios.get("https://client-portfolio-qum8.onrender.com/roles");

   setRole(response.data[0])
    
} 
// updating role
const upadteRole = ()=>{
    axios.put(`https://client-portfolio-qum8.onrender.com/roles/${id}`,{name:position1,name2:position2})
    window.location.reload()
}
// storing roles
if(role.length>0){
    setPosition1(role.name)
    setPosition2(role.name2)
}
// role updating form functions
const handleInputChange = (e) => {
    setPosition1(e.target.value)
    
};
const handleInputChange2= (e) => {
    setPosition2(e.target.value)
    
};
const updateSubmit = (e) => {
    e.preventDefault();
    if (!position1) {
        alert("Somthing was not filled");
    }
    else {
        upadteRole();
    }
}
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
              {console.log(role.name)}
              {/* displaying roles */}
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
            {/* editing roles */}
            <button className="bg-gradient-to-r from-red-300 to-blue-300 p-2 rounded" onClick={(e)=>setEdit(!edit)}>Edit role</button>
            {edit? <form
             onSubmit={updateSubmit}
                            class="d-flex">
                            <div class="col">
                                <div class="mb-3">
                                    
                                    <input
                                        id="name"
                                        name="name"
                                        placeholder="Role 1..."
                                        onChange={handleInputChange}
                            
                                        type="text" class="form-control " value={position1} aria-describedby="helpId" />
                                        <input
                                        id="name"
                                        name="name"
                                        placeholder="Role 2..."
                                        onChange={handleInputChange2}

                                        type="text" class="form-control mx-2" value={position2} aria-describedby="helpId" />
                                    <button className='mt-1 rounded text-bg-primary border-0 px-3 p-2' onClick={() => setId(role._id)}  >Submit<i class="bi bi-send"></i></button>
                                </div>
                            </div>
                        </form>:''}
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              backend Developer
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/supriya-pasupuleti-a7747413a/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
            //   href={resumepdf}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                 <button onClick={e=> fetchPdf(iid)}>Resume</button> <FiDownload />
              </div>
              
              <div>
             
    </div>
   
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            > <button className="bg-gradient-to-r from-red-300 to-blue-300 p-2 rounded" onClick={e=>setResumeUpdate(!resumeUpdate)}>upload new resume</button>
            {/* editing resume */}
          {
            resumeUpdate?
            <form>
                <input type="file" onChange={handleFileChange} />
                <input type="text" onChange={changeName} value={resumeName} className="my-2 w-1/2 p-2"/><br/>
               <button className="bg-gradient-to-r from-blue-300 to-red-300 p-2 rounded" onClick={e=>handleUpdate()}>Upload File</button>
            </form>
         :'' }
        
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

export default Profile;
