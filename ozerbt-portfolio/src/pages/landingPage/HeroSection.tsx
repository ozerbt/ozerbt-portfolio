import { NextPage } from "next";
import Image from "next/image";
import DeveloperName from "./DeveloperName";
import Projects from "./Projects";
import { projects } from "../utils/variables";


const HeroSection: NextPage = () => {
  return (
    <>

      <div id="navbar-container" className=" w-full md:mt-3 md:w-[50%]">
        <div id="navbar-options" className="flex w-[90%] md:w-[40%] justify-between">
          <h1 className="m-3 hover:underline transition-all hover:cursor-pointer text-[12px] md:text-lg font-semibold mt-5 ml-10">GITHUB</h1>
          <h1 className="m-3 text-[12px] md:text-lg font-semibold mt-5">RESUME</h1>
          <h1 className="m-3 text-[12px] md:text-lg font-semibold mt-5">CONTACT</h1>
        </div>
      </div>

      <div id="hero-container" className="w-full h-full grid-rows-2 grid-cols-2">
        {/*OUTER CONTAINER*/}
        <div className="flex md:flex-row flex-col md:h-[95vh]">
          <div className="absolute opacity-[0.17] blur-3xl top-[200px] md:top-[200px] w-full h-[50%] bg-[#83FFD2]" />
          <DeveloperName />
          <Projects />
        </div>
      </div>
      <div id="skills-container" className="w-full grid-cols-2 mt-[2rem] md:mt-[10rem] mb-[3rem] h-full">
        <div className="col-span-1 ">

          <div className=" border-[1px_solid_rgba(0,0,0,0.06)] flex flex-col items-center shadow-[2px_4px_40px_rgba(131,255,210,0.25)] w-[500px] h-[300px]">

            <div className="w-[90%] mt-3 flex justify-center items-center bg-[#83FFD2] h-[54px] rounded-[10px]">
              <h1 className="text-[36px] font-bold leading-[54px] tracking-[0.04em]">Frontend</h1>
            </div>
            <div className="w-[90%] mt-3 bg-[url(../../public/images/codeBackdrop.svg)] h-[55%]">

            </div>

          </div>

          <div className=" border-[1px_solid_rgba(0,0,0,0.06)] flex flex-col items-center shadow-[2px_4px_40px_rgba(131,255,210,0.25)] w-[500px] h-[300px]">

            <div className="w-[90%] mt-3 flex justify-center items-center bg-[#83FFD2] h-[54px] rounded-[10px]">
              <h1 className="text-[36px] font-bold leading-[54px] tracking-[0.04em]">Backend</h1>
            </div>
            <div className="w-[90%] mt-3 bg-[url(../../public/images/codeBackdrop.svg)] h-[55%]">

            </div>

          </div>

          <div className=" border-[1px_solid_rgba(0,0,0,0.06)] flex flex-col items-center shadow-[2px_4px_40px_rgba(131,255,210,0.25)] w-[500px] h-[300px]">

            <div className="w-[90%] mt-3 flex justify-center items-center bg-[#83FFD2] h-[54px] rounded-[10px]">
              <h1 className="text-[36px] font-bold leading-[54px] tracking-[0.04em]">Tools</h1>
            </div>
            <div className="w-[90%] mt-3 bg-[url(../../public/images/codeBackdrop.svg)] h-[55%]">

            </div>

          </div>
          <div>

          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="absolute">
            <Image width={100} height={100} className=" w-[90%] h-full md:w-[100%] md:h-[100%]" src="/images/codeWindow.svg" alt="codeBackground" />
          </div>
        </div>

      </div>

    </>
  )
}

export default HeroSection;