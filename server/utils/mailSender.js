const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {

    console.log("Sending OTP to:", email)

    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,

      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },

      connectionTimeout: 10000,
    })

    // Verify SMTP connection
    await transporter.verify()
    console.log("Mail server connected successfully")

    // Send Mail
    let info = await transporter.sendMail({
      from: `"StudyNotion" <${process.env.MAIL_USER}>`,
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