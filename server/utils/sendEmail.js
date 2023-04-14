const nodemailer= require('nodemailer')
const nodemailerConfig= require('../utils/nodemailerConfig')
require('dotenv').config()

const sendEmail= async({to,subject,html})=>{
   let testAccount= await nodemailer.createTestAccount()
   const transporter = nodemailer.createTransport(nodemailerConfig);

return transporter.sendMail({
    from: process.env.EMAIL_USERNAME, // sender address
    to,
    subject,
    html
  });
}

module.exports= sendEmail