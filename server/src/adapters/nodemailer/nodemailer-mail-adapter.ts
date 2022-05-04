import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "031d82b7e08f68",
    pass: "f345a0e1527d4b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
     await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Pedro <pedoguinha2@gmail.com',
      subject,
      html: body,
    })
  }
}