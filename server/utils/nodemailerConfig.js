require('dotenv').config()
module.exports= {
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth:{
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
}