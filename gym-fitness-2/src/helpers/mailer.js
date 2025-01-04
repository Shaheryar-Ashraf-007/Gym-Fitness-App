import nodemailer from 'nodemailer'

export const sendEmail = async({email, emailType, userId})=>{
    try{

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          })

          const mail = {
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: email,
            subject: emailType ==='VERIFY'? "Verify your email" : "Reset Your Password", // Subject line
            html: "<b>Hello world?</b>",
          }

          const mailResponse =
            awit transporter.sendMail(mail)

          return mailResponse

    } catch(error){

        throw new Error(error.message)

    }
}

