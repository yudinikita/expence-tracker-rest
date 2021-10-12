const nodemailer = require('nodemailer')

class MailService {

  constructor () {
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    }

    this.transporter = nodemailer.createTransport(smtpConfig)
  }

  async sendActivationMail (to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Активация аккаунта на ' + process.env.BASE_URL,
      text: '',
      html:
        `
        <div>
            <h1>Для активации перейдите по ссылке</h1>
            <a href="${link}">${link}</a>
        </div>
      `
    })
  }

}

module.exports = new MailService()
