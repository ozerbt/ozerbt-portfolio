import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
export default function handler(req: NextApiRequest, res:NextApiResponse){
    const {name, email, message} = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `behcetozer.com - Message from ${name}`,
        text: message
    };
    transporter.sendMail(mailOptions, function(error:any, info:any){
        if(error){
            console.log(error);
            res.status(500).json({message: false});
        }else{
            console.log("Email sent: " + info.response);
            res.status(200).json({message: true});
        }
    });

}