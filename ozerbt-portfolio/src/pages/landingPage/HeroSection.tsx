import { NextPage } from "next";
import { useEffect, useState } from "react";
import DeveloperName from "./DeveloperName";
import NavbarOptions from "./NavbarOptions";
import Projects from "./Projects";



const HeroSection: NextPage = () => {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <>

      <div id="navbar-container" className={colorChange ? "sticky z-10 transition-all top-0 w-full md:mt-3 bg-[white] shadow-lg " : "sticky transition-all z-99 top-0 w-full md:mt-3 md:w-[50%]"}>
        <div id="navbar-options" className={colorChange ? "flex w-[90%] pb-3 md:w-[40%]" : "flex w-[90%] md:w-[40%] justify-between"}>
          <NavbarOptions />
        </div>
      </div>

      <div id="hero-container" className="w-full h-full grid-rows-2 grid-cols-2">
        {/*OUTER CONTAINER*/}
        <div className="flex md:flex-row flex-col md:h-[95vh]">
          <div className="absolute z-2 top-[155px] drop-shadow-lg md:top-[470px] w-full h-[30%] md:h-[40%] bg-[#83FFD2]" />
          <DeveloperName />
          <Projects />
        </div>
      </div>


    </>
  )
}

export default HeroSection;