import React from "react";
import ProgressBar from "../Components/chip/ProgressBar";
import SkillBox from "../Components/chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiLinux,
  SiMysql,
  SiGooglebigquery,
  SiFugacloud,
  SiGooglecontaineroptimizedos,
} from "react-icons/si";
import { GrCode, GrMysql } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        {/* <div className="flex md:flex-col "> */}
          <div className=" flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
           
          </div>
          {/* right box */}
          <div className=" relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10 md:flex-row cursor-pointer">
              <SkillBox
                logo={<GrCode />}
                black={"black"}
                white={"white"}
                skill={"Python"}
              />
              <SkillBox
                className=""
                logo={
                  <SiPostgresql/>
                }
                black={"white"}
                white={"black"}
                skill={"Postgresql"}
              />
               <SkillBox
                className=""
                logo={
                  <SiGooglebigquery/>
                }
                black={"black"}
                white={"white"}
                skill={"BigQuery"}
              />
              
            </div>
            <div className="last2 flex flex-col gap-10 md:flex-row cursor-pointer">
                
              <SkillBox
                logo={<SiFlask />}
                black={"white"}
                white={"black"}
                skill={"Flask"}
              />
               <SkillBox
                logo={<SiLinux />}
                black={"black"}
                white={"white"}
                skill={"Linux"}
              />
              <SkillBox
                logo={<SiFugacloud />}
                black={"white"}
                white={"black"}
                skill={"Cloud Functions"}
              />
             
            </div>
            <div className="last2 flex flex-col gap-10 md:flex-row cursor-pointer">
                
              <SkillBox
                logo={<SiMongodb />}
                black={"black"}
                white={"white"}
                skill={"MongoDb"}
              />
               <SkillBox
                logo={<SiMysql />}
                black={"white"}
                white={"black"}
                skill={"MySql"}
              />
              <SkillBox
                logo={<SiGooglecontaineroptimizedos />}
                black={"white"}
                white={"black"}
                skill={"Google Container"}
              />
              </div>
          </div>
        {/* </div> */}

        {/* icons */}
         <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
         
          {/* <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          /> */}
          {/* <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

         
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/> */}
        </div> 
      </div>
    </div>
  );
};

export default Skills;
