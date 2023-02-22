import React from "react"
const NavbarOptions: React.FC = () => {
    return (
        <>
            <a href="#projects"><h1 className="m-3 hover-underline-animation transition-all text-[12px] md:text-lg font-semibold mt-5 ml-10">Projects</h1></a>
            <a href="#skills"><h1 className="m-3 hover-underline-animation text-[12px] md:text-lg font-semibold mt-5">Skills</h1></a>
            <a href="#aboutme"><h1 className="m-3 hover-underline-animation text-[12px] md:text-lg font-semibold mt-5 whitespace-nowrap">About Me</h1></a>
            <a href="#contact"><h1 className="m-3 hover-underline-animation text-[12px] md:text-lg font-semibold mt-5">Contact</h1></a>
        </>
    )
}

export default NavbarOptions