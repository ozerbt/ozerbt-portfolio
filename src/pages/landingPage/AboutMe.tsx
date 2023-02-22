import React from "react"
import Image from "next/image"
import { IoNewspaperOutline } from 'react-icons/io5'
const AboutMe: React.FC = () => {
    return (
        <div id="aboutme" className="h-full mt-[20rem] md:mt-[10rem] mb-[10rem] w-full">
            <div className="bg-[#83FFD2] h-[400px] md:h-[300px] grid grid-rows-[100px_repeat(1,minmax(0,1fr))_50px] md:grid-cols-[300px_repeat(1,minmax(0,1fr))_250px]">
                <div className="relative bottom-[200px] md:bottom-[60px] md:right-[30px]">
                    <div className="flex justify-start">
                        <Image width={400} height={200} className="w-full object-cover object-middle md:object-none h-[300px] md:w-[400px] md:h-[400px] rounded-[40px]" src="/images/me.jpg" alt="me" />
                    </div>
                </div>
                <div className="flex flex-col mb-[4rem] md:mb-0 mt-[4rem] md:ml-[6rem] w-[90%]  h-[50%] self-center">

                    <p className="md:text-[24px] mt-10 text-center md:text-start font-semibold">Passionate software developer that loves to code and contribute to disruptive technologies. Lover of coffee, mediocre cyclist, hiking enthusiast. </p>
                    <a target="_blank" href="https://drive.google.com/file/d/1Pk4My_kBeI8L-xl-0c_U5MKHH3ma0mb7/view?usp=share_link" className="button hover:cursor-pointer md:w-[20%] mt-4 self-center text-center hover:scale-95 transition-all shadow-md bg-[#ffffff] pt-3 pb-3 pl-6 pr-6 md:pl-12 md:pr-12 rounded-[7px]" rel="noreferrer"><button ><span className="inline-block mr-2 pt-1"><IoNewspaperOutline /></span>Resume</button></a>
                </div>
                <div className="relative flex justify-center md:flex-none">
                    <div className="md:bg-[white]  absolute mr-10 md:mr-0 justify-center md:top-[-20px] md:right-[40px] p-2 whitespace-nowrap rounded-[10px] flex md:w-[150%]">
                        <Image width={40} height={40} src="/icons/UCLogo.svg" alt="EducationInformation" />
                        <h1 className="text-sm mt-2 font-semibold">B.S. In Software Development</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe