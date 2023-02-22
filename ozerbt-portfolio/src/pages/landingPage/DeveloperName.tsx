import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const DeveloperName: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full md:w-[50%]">
        <div className="w-[80%] h-[40%] mb-[10rem] relative">
          <div
            id="developer-name"
            className="flex flex-col whitespace-nowrap w-full h-[70%] justify-center"
          >
            <h1
              className="md:text-[64px] text-[20px] mb-3 md:text-start text-center mt-[3rem] md:mt-0  md:mb-4 font-bold md:leading-[72px] tracking-[0.04em]"
            >
              Behcet Ozer
            </h1>
            <h1
              className="md:text-[48px] text-white bg-[#1c1c1c] bg-contain text-[20px] mb-[3rem]  md:m-0 text-center md:text-start font-bold md:leading-[72px] tracking-[0.04em]"
            >
              Software Developer
            </h1>

          </div>
          <div className="flex justify-around">
            <a className="button w-[50%] text-center hover:scale-95 transition-all shadow-md bg-[#ffffff] pt-3 pb-3 pl-6 pr-6 md:pl-12 md:pr-12 rounded-[7px]" target="_blank" href="https://github.com/ozerbt" rel="noreferrer"><button ><span className="inline-block"><BsGithub /></span> Github</button></a>
            <a className=" w-[50%] text-center hover:scale-95 transition-all shadow-md bg-[#0A66C2] ml-10 text-white font-semibold pt-3 pb-3 pl-6 pr-6 md:pl-12 md:pr-12 rounded-[7px]" target="_blank" href="https://www.linkedin.com/in/behcet-ozer/" rel="noreferrer" ><button className="button"><span className="inline-block text-white"><BsLinkedin /></span> Linkedin</button></a>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}
export default DeveloperName
