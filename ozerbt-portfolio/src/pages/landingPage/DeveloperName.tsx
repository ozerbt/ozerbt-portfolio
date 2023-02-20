import Image from "next/image"
import { icons } from "../utils/variables"

const DeveloperName: React.FC = () => {
    return (
        <>
        <div className="flex justify-center items-center w-full md:w-[50%]">
          <div className="w-[80%] h-[90%] relative">
            <div
              id="developer-name"
              className="flex flex-col w-full h-[70%] justify-center"
            >
              <h1
                className="md:text-[48px] text-[20px] mb-3 md:text-start text-center mt-[3rem] md:mt-0  md:mb-4 font-bold md:leading-[72px] tracking-[0.04em]"
              >
                Behcet Ozer
              </h1>
              <h1
                className="md:text-[48px] text-white bg-[#1c1c1c] bg-contain text-[20px] mb-[3rem]  md:m-0 text-center md:text-start font-bold md:leading-[72px] tracking-[0.04em]"
              >
                Software Developer
              </h1>
            </div>
            <div>
              <div id="icon-container" className="relative">
                {icons.map((icon)=>(
                <div key={icon.id} className={icon.className}>
                <Image  width={icon.width} height={icon.height} className={`animation-2 w-[20px] md:w-[50px]`} src={icon.src} alt={icon.alt}/>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default DeveloperName
