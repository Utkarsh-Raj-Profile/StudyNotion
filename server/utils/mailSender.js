const axios = require("axios")

const mailSender = async (email, title, body) => {
  try {
    console.log("Sending OTP to:", email)

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "StudyNotion",
          email: "studynotionotp@gmail.com",
        },

        to: [
          {
            email: email,
          },
        ],

        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    )

    console.log("Email sent successfully")
    return response.data
  } catch (error) {
    console.log(
      "Brevo Email Error:",
      error.response?.data || error.message
    )

    throw error
  }
}

module.exports = mailSender