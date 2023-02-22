import React from "react"
import Image from "next/image"
import axios from "axios";
import { BiMailSend } from "react-icons/bi"
import { useForm, SubmitHandler } from "react-hook-form"
interface IContactForm {
    name: string;
    email: string;
    message: string;
}
const Contact: React.FC = () => {
    const { register, handleSubmit } = useForm<IContactForm>();

    const onSubmit: SubmitHandler<IContactForm> = async (data) => {
        console.log(data, `data`);
        const { name, email, message } = data;

        const result = await axios.post('/api/send-email', {
            name,
            email,
            message
        })
        const { message: isSuccess } = result.data
        if (isSuccess) {
            alert('Email sent successfully')
        } else {
            alert('Something went wrong')
        }
    }
    return (
        <div id="contact" className="grid md:grid-cols-2 h-full w-full">
            <div className="h-full w-full flex ml-[10rem] flex-col justify-end">
                <Image width={100} height={100} className="md:h-[100%] md:w-[60%]" src="/icons/mailbox.svg" alt="mailbox" />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex md:w-[50%] flex-col">
                    <label htmlFor='name'>Name</label>
                    <input {...register('name')} className="focus:outline-none  border-b-2 border-[#bcfee6]  rounded-[3px] p-1" id="name" type="text" required />
                    <label className="mt-4 mb-3" htmlFor='email'>Email</label>
                    <input {...register('email')} className="focus:outline-none border-b-2 border-[#bcfee6] rounded-[3px] p-1" id="email" type="email" required />
                    <label className="mt-4 mb-3" htmlFor='message'>Message</label>
                    <textarea {...register('message')} className="focus:outline-none border-2 border-[#bcfee6]  rounded-[3px] p-1" name="message" cols={30} rows={10} required />
                    <button className="bg-[#000000] self-center font-semibold text-white rounded-md pt-2 pb-3 inline-flex justify-center hover:scale-95 transition-all mt-5 w-[50%]" type="submit"><span className="inline-block mt-[6px] mr-2"><BiMailSend /></span>Send</button>
                </form>
            </div>


        </div>
    )
}
export default Contact