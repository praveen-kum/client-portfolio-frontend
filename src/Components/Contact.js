import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const initialState = {
    name: "",
    body:'',

};


const [state, setState] = useState(initialState);
const { name ,body} = state;
const [mail,setMail]=useState("")
// const [phone,setPhone]=useState()
// const [linkedin,setLinkedin]=useState("")
const id="6565e2d3e7e868153af9bc70"
useEffect(() => {

    getRole()
  }, [])
  const getRole = async () => {
    const response = await axios.get(`https://client-portfolio-qum8.onrender.com/contact/${id}`);
    const data=response.data
    setMail(data.mail)
    // setPhone(data.phone)
    // setLinkedin(data.linkedin)
    // console.log(mail,phone,linkedin)
    
} 
  const sendMail=(e)=>{
    e.preventDefault()
    window.open( `mailto:${mail}?subject=${name}&body=${body}`)
    window.location.reload()
  }
  const InputChange = (e) => {
    let { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
  });

};
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-center justify-center  flex-col sm:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">Mail me</h1>
              <h3 className="text-xl sm:text-lg">
                through this form
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            onSubmit={sendMail}
            data-aos="zoom-in"
            
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            // action="mailto:praveenkumar.mech2022@gmail.com?subject=Me&body=Hello!"
          >
            {/* <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name=""
            /> */}
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              id="name"
              name="name"
              placeholder="Write Subject"
              onChange={InputChange}  
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              id="body"
              name="body"
              placeholder="Write Message here"
              onChange={InputChange} 
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
