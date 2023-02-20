import Image from "next/image"
import { projects } from "../utils/variables"
const Projects: React.FC = () => {
  return (
    <div className="row-span-2 w-full md:w-[60%] relative ">
      <div className="2xl:w-[60%] xl:w-[55%] lg:w-[95%] md:w-[150%] md:m-0 mt-[4rem] ml-[4rem] w-[75%] inline-grid grid-cols-2 gap-8 rotate-[18deg] ">

        <div className="absolute top-[180px] left-[65px] md:top-[500px] md:left-[110px] lg:top-[550px] lg:left-[50px]  2xl:top-[500px] 2xl:left-[120px]">
          <h1 className="md:text-[96px] text-[30px] opacity-[0.2] font-bold rotate-[-90deg] leading-[117px] tracking-[0.04em]">PROJECTS</h1>
        </div>
        {
          projects.map((project) => (
            <>
              <div className="drop-shadow-[4px_6px_32px_rgba(0,0,0,0.25)] hover:scale-105 hover:cursor-pointer transition-all relative rounded-[10px] w-full h-[150px] md:h-[363px]">
                <Image fill className="object-cover rounded-[10px]" src={project.src} alt={project.alt} />
                <div className="absolute top-[55px] left-[30px] md:left-[120px] lg:left-[70px] xl:left-[120px] md:top-[150px]">
                  <h1 className="text-[white] drop-shadow-lg p-3 font-semibold text-sm md:text-[20px] bg-[#001C24] md:pl-8 md:pr-8 md:pt-3 md:pb-3 rounded-[10px]">{project.name}</h1>
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