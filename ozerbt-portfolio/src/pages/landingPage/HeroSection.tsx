import { NextPage } from "next";
import Image from "next/image";

const HeroSection: NextPage = () => {
    return (
    <>
        <div className="wrapper">
      <div id="navbar-container" className="w-[50%]">
        <div id="navbar-options" className="flex w-[40%] justify-between">
          <h1 className="m-3 font-semibold mt-5 ml-10">GITHUB</h1>
          <h1 className="m-3 font-semibold mt-5">RESUME</h1>
          <h1 className="m-3 font-semibold mt-5">CONTACT</h1>
        </div>
      </div>

      <div id="hero-container" className="w-full h-full grid-rows-2">
        {/*OUTER CONTAINER*/}
        <div className="flex h-[95vh] ">
          <div className="row-span-1 flex justify-center items-center w-[50%]">
            <div className="w-[80%] h-[90%] relative ">
              <div
                id="developer-name"
                className="flex  flex-col w-full h-[70%] justify-center"
              >
                <h1
                  className="text-[48px] mb-4 font-bold leading-[72px] tracking-[0.04em]"
                >
                  Behcet Ozer
                </h1>
                <h1
                  className="text-[48px] font-bold leading-[72px] tracking-[0.04em]"
                >
                  Software Developer
                </h1>
              </div>
              <div>
                <div id="icon-container" className="relative ">
                  <div className="absolute bottom-[500px] left-[80px]">
                    <Image width={50} height={50} src="/icons/AngularIcon.svg" alt="angularIcon"/>
                    </div>

                    <div className="absolute bottom-[600px] left-[300px]">
                    <Image width={50} height={50} src="/icons/AwsIcon.svg" alt="AWSIcon"/>
                    </div>

                    <div className="absolute bottom-[150px] left-[300px]">
                    <Image width={100} height={100} src="/icons/MongoDBIcon.svg" alt="MongoIcon"/>
                    </div>

                    <div className="absolute left-[200px] bottom-[20px]">
                    <Image width={50} height={50} src="/icons/NextIcon.svg" alt="NextIcon"/>
                    </div>
                    <div className="absolute bottom-[140px]">
                    <Image width={50} height={50} src="/icons/NodeIcon.svg" alt="NodeIcon"/>
                    </div>
                    <div className="absolute left-[500px]">
                    <Image width={50} height={50} src="/icons/ReactIcon.svg" alt="ReactIcon"/>
                    </div>
                    <div className="absolute bottom-[550px] left-[550px]">
                    <Image width={50} height={50} src="/icons/SqlIcon.svg" alt="SqlIcon"/>
                    </div>
                    <div className="absolute bottom-[200px] left-[600px]">
                    <Image width={50} height={50} src="/icons/VueIcon.svg" alt="VueIcon"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 w-[50%] relative bg-green-500">
            <div id="projects-container" className="w-[70%] absolute h-[110%] rotate-[18deg] bg-blue-400">
              <div id="projects" className="flex"> 
                <div className="bg-yellow-500">
                  hi
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    )
}

export default HeroSection;