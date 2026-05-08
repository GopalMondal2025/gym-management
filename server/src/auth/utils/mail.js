import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com"
    }
  })
  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
  const emailHTML = mailGenerator.generate(options.mailgenContent)

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS
    }
  })
  const mail={
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text:emailTextual,
    html:emailHTML
  }
  try {
    await transporter.sendMail(mail)
  } catch (error) {
    console.error("Email service failed silently. Make sure you have provided your MAILTRAP credentials in the .env file.")
    console.error("ERROR: ", error)
  }

}

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app.",
      action: {
        instructions: "To verify your email address, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify your account",
          link: verificationUrl
        }
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help."
    }
  }
}

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We received a request to reset your password.",
      action: {
        instructions: "To reset your password, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Reset your password",
          link: passwordResetUrl
        }
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help."
    }
  }
}

export { emailVerificationMailgenContent, forgotPasswordMailgenContent, sendEmail }
