import React from "react"
import NavbarOptions from "./NavbarOptions"
import Image from "next/image"
const Footer: React.FC = () => {
    return (
        <div className="grid grid-cols-1 h-[100px]">
            <div className="w-full flex justify-center h-full bg-[#83FFD2]">
                <div className="w-[50%]">
                    <div className="flex p-4 justify-center">
                        <NavbarOptions />
                    </div>
                    <div className="flex justify-center">
                        <a target="_blank" href="https://github.com/ozerbt" rel="noreferrer"><Image width={40} height={40} className="mr-[2rem]" src="/icons/GithubIcon.svg" alt="githubiconfooter" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/behcet-ozer/" rel="noreferrer"><Image width={40} height={40} src="/icons/LinkedinIcon.svg" alt="linkediniconfooter" /></a>
                    </div>
                    <div className="flex mt-3 justify-center">
                        <p className="font-semibold">@2023 Behcet Ozer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer