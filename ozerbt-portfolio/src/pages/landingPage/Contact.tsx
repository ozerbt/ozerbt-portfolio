import React from "react"
import Image from "next/image"

const Contact: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 h-full w-full">
            <div className="h-full w-full flex ml-[10rem] flex-col justify-end">
                <Image width={100} height={100} className="md:h-[100%] md:w-[60%]" src="/icons/mailbox.svg" alt="mailbox" />
            </div>
            <div>
                <form className="flex w-[50%] flex-col">
                    <label htmlFor='name'>Name</label>
                    <input className="bg-[#bcfee6]  rounded-[3px] p-1" id="name" type="text" />
                    <label htmlFor='email'>Email</label>
                    <input className="bg-[#bcfee6] rounded-[3px] p-1" id="email" type="email" />
                    <label htmlFor='message'>Message</label>
                    <textarea className="bg-[#bcfee6]  rounded-[3px] p-1" name="" id="message" cols={30} rows={10} />
                    <button className="bg-[black] self-center mt-10 w-[50%]" type="submit">Submit</button>
                </form>
            </div>


        </div>
    )
}
export default Contact