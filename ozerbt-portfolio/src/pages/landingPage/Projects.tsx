import React from "react"
import Image from "next/image"
import { projects } from "../../utils/variables"
const Projects: React.FC = () => {
  return (
    <div id="projects" className="flex flex-col items-center md:flex-none w-full md:w-[60%] relative ">
      <div className="2xl:w-[80%] xl:w-[90%] lg:w-[95%] md:w-[150%] md:m-0 mb-[3rem]  w-[70%] inline-grid md:grid-cols-2 gap-4 md:gap-8  ">

        <div className="absolute top-[180px] left-[65px] md:top-[500px] md:left-[110px] lg:top-[550px] lg:left-[50px]  2xl:top-[300px] 2xl:left-[360px]">
          <h1 className="md:text-[96px] text-[30px] opacity-[0.2] font-bold rotate-[-90deg] leading-[117px] tracking-[0.04em]">PROJECTS</h1>
        </div>
        {
          projects.map((project) => (
            <>
              <div className="flip-card drop-shadow-[4px_6px_32px_rgba(0,0,0,0.25)]  transition-all relative rounded-[10px] w-full h-[150px] md:h-[363px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image fill className="object-cover rounded-[10px]" src={project.src} alt={project.alt} />
                  </div>
                  <div className="flip-card-back flex flex-col">
                    <div className="flex w-full h-[30%] justify-center items-center">
                      <a className="hover:cursor-pointer underline hover:text-[#434343]" target="_blank" href={project.link} rel="noreferrer"><h1 className="text-[32px] font-semibold">{project.name}</h1></a>
                    </div>
                    <div className="w-full h-full flex flex-col">

                      <p className="pl-10 pr-10">{project.description}</p>
                      <div className="inline-grid mt-6 mb-5 pl-3 pr-3 grid-rows-2 grid-cols-3 text-[7px]  md:text-[12px] gap-4 w-full flex-wrap">
                        {
                          project.responsibilities.map(res => (
                            <>
                              <div className="bg-[#83FFD2] flex justify-center items-center rounded-md pt-1 pb-1 pl-2 pr-2">
                                <p className="font-semibold">{res}</p>
                              </div>
                            </>
                          ))
                        }
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </>
          ))
        }

      </div>

    </div>
  )
}
export default Projects