const sendEmail= require('./sendEmail')

const sendVerificationEmail= async({name,email,verificationToken,origin})=>{
    const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`
    const message= `<p>Please verify Email by clicking on the link: <a href="${verifyEmail}">Verify Email</a></p>`

    return sendEmail({
        to:email,
        subject:'Email Confirmation',
        html:`<h4>Hello ${name}!!</h4> 
        ${message}`
    })
}

module.exports= sendVerificationEmail

//[Auth Workflow](https://react-node-user-workflow-front-end.netlify.app/)