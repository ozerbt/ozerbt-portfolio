import { NextPage } from "next";
import Image from "next/image";
import DeveloperName from "./DeveloperName";
import Projects from "./Projects";
import { icons } from "../utils/variables";
import { frontendIcons } from "../utils/variables";


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
          <div className="absolute z- top-[155px] drop-shadow-lg md:top-[470px] w-full h-[30%] md:h-[40%] bg-[#83FFD2]" />
          <DeveloperName />
          <Projects />
        </div>
      </div>


    </>
  )
}

export default HeroSection;