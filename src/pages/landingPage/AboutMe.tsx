import React from "react"
import Image from "next/image"
import { IoNewspaperOutline } from 'react-icons/io5'
const AboutMe: React.FC = () => {
    return (
        <div id="aboutme" className="h-full mt-[20rem] md:mt-[10rem] mb-[10rem] w-full">
            <div className="bg-[#83FFD2] h-[900px] md:h-[700px] lg:h-[600px] 2xl:h-[500px] grid grid-rows-[100px_repeat(1,minmax(0,1fr))_50px] md:grid-cols-[300px_repeat(1,minmax(0,1fr))_250px]">
                <div className="relative bottom-[200px] md:bottom-[60px] md:right-[30px]">
                    <div className="flex justify-start">
                        <Image width={400} height={200} className="w-full object-cover object-middle md:object-none h-[300px] md:w-[400px] md:h-[400px] rounded-[40px]" src="/images/me.jpg" alt="me" />
                    </div>
                </div>
                <div className="flex flex-col mb-[10rem] md:mb-0 md:mt-[4rem] md:ml-[6rem] md:w-full w-[90%]  h-[50%] self-center">
                    <div className="inline-block break-words">
                        <p className="md:text-[16px] lg:text-[24px] ml-7 md:ml-0 md:mt-10 text-center md:text-start font-semibold">
                            Hi there! My name is Behcet Ozer and im from Ankara, Turkey. I have a strong passion for development and enjoy exploring new ways to improve my skills in this area.
                            When im not working on development projects, you can usually find me enjoying a good cup of coffee, exploring the great outdoors on a hike, or cycling through the city.
                            <br />
                            <br />
                            I have always been fascinated by the power of technology to solve problems and make the world a better place, which is why I decided to pursue a career in development.
                            Whether im working on a new website or developing an innovative app, I find great satisfaction in using my skills to create something useful and impactful.
                        </p>
                    </div>
                    <a target="_blank" href="https://drive.google.com/file/d/1LU2D0frd-1MAaPWHic2XiC-bnzXmGmwX/view?usp=share_link" className="button hover:cursor-pointer md:w-[50%] lg:w-[20%] mt-[2.5rem] md:mt-6 ml-10 md:ml-0 self-center text-center hover:scale-95 transition-all shadow-md bg-[#ffffff] pt-3 pb-3 pl-6 pr-6 md:pl-12 md:pr-12 rounded-[7px]" rel="noreferrer"><button ><span className="inline-block mr-2 pt-1"><IoNewspaperOutline /></span>Resume</button></a>
                </div>
                <div className="relative flex justify-center md:flex-none">
                    <div className="md:bg-[white]  absolute mr-5 md:mr-0 justify-center md:top-[-20px] md:right-[40px] p-2 whitespace-nowrap rounded-[10px] flex md:w-[150%]">
                        <Image width={40} height={40} src="/icons/UCLogo.svg" alt="EducationInformation" />
                        <h1 className="text-sm mt-2 font-semibold">B.S. In Software Development</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe