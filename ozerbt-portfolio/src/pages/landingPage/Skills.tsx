import React from "react";
import Image from "next/image";
import { frontendIcons } from "../utils/variables";
import { toolIcons } from "../utils/variables";
import { backendIcons } from "../utils/variables";
const Skills: React.FC = () => {
    return (

        <div id="skills-container" className="w-full grid grid-cols-1 md:grid-cols-2 md:mt-[3rem]  mb-[3rem] h-full">

            <div className="absolute hidden md:visible z-5 left-[100px] lg:left-[200px] bottom-[-670px] 2xl:left-[560px] md:flex justify-center ">
                <Image width={100} height={100} className="h-full w-[100%] " src="/images/codeWindow.svg" alt="codeBackground" />
            </div>


            <div className="relative mt-[3rem] z-99 col-span-1">

                {/* {icons.map((icon) => (
                    <div key={icon.id} className={icon.className}>
                        <Image width={icon.width} height={icon.height} className={`animation-2 w-[20px] md:w-[50px]`} src={icon.src} alt={icon.alt} />
                    </div>
                ))} */}
                <div className="flex flex-col w-full items-center">
                    <div className=" border-[1px_solid_rgba(0,0,0,0.06)] rounded-[10px] bg-[white] mb-10 flex flex-col items-center shadow-[2px_4px_40px_rgba(131,255,210,0.25)] w-[90%] md:w-[500px] h-[300px]">

                        <div className="w-[90%] mt-3 flex justify-center items-center  h-[54px] rounded-[10px]">
                            <h1 className="text-[36px] font-bold leading-[54px] tracking-[0.04em]">Frontend</h1>
                        </div>
                        <div className="w-[90%] inline-grid grid-cols-4 mt-3 bg-[url(../../public/images/codeBackdrop.svg)] h-[55%]">
                            {frontendIcons.map((icon) => (
                                <div key={icon.id} className="flex flex-col items-center justify-center">
                                    <Image width={50} height={50} className="opacity-100 mt-3" src={icon.src} alt={icon.alt} />
                                    <p className="text-md">{icon.name}</p>
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className=" border-[1px_solid_rgba(0,0,0,0.06)] rounded-[10px] bg-[white]  flex flex-col items-center shadow-[2px_4px_40px_rgba(131,255,210,0.25)] w-[90%] md:w-[500px] h-[300px]">

                        <div className="w-[90%] mt-3 flex justify-center items-center  h-[54px] rounded-[10px]">
                            <h1 className="text-[36px] font-bold leading-[54px] tracking-[0.04em]">Backend</h1>
                        </div>
                        <div className="w-[90%] inline-grid grid-cols-4 mt-3 bg-[url(../../public/images/codeBackdrop.svg)] h-[55%]">
                            {backendIcons.map((icon) => (
                                <div key={icon.id} className="flex flex-col items-center justify-center">
                                    <Image width={icon.width} height={icon.height} className="opacity-100 mt-3" src={icon.src} alt={icon.alt} />
                                    <p className="text-md">{icon.name}</p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>

            <div className="relative mt-[3rem] z-80 col-span-1">
                <div className="flex h-full w-full justify-center md:justify-start items-center">
                    <div className=" border-[1px_solid_rgba(0,0,0,0.06)] rounded-[10px] bg-[white] self-center flex flex-col items-center shadow-[2px_4px_40px_rgba(131,255,210,0.25)] w-[90%] md:w-[500px] h-[300px]">

                        <div className="w-[90%] mt-3 flex justify-center items-center  h-[54px] rounded-[10px]">
                            <h1 className="text-[36px] font-bold leading-[54px] tracking-[0.04em]">Tools</h1>
                        </div>
                        <div className="w-[90%] inline-grid grid-cols-4 mt-3 bg-[url(../../public/images/codeBackdrop.svg)] h-[55%]">
                            {toolIcons.map((icon) => (
                                <div key={icon.id} className="flex flex-col items-center justify-center">
                                    <Image width={icon.width} height={icon.height} className="opacity-100 mt-3" src={icon.src} alt={icon.alt} />
                                    <p className="text-md">{icon.name}</p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>

            <div>

            </div>


        </div>
    )
}

export default Skills;