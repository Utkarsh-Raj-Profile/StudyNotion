const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    console.log("Sending OTP to:", email)

    // Create transporter
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      requireTLS: true,

      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },

      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    })

    // Send Mail
    let info = await transporter.sendMail({
      from: `"StudyNotion" <studynotionotp@gmail.com>`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    })

    console.log("Email sent:", info.response)
    console.log("Message ID:", info.messageId)

    return info
  } catch (error) {
    console.log("Mail Error:", error.message)
    throw error
  }
}

module.exports = mailSender