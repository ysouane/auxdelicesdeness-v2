import type { NextApiRequest, NextApiResponse } from "next"
const nodemailer = require("nodemailer")

type Data = {
  name: string
}

export default function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const PASSWORD = process.env.ACCOUNT_EMAIL_PASSWORD
  const body = JSON.parse(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ysouane0@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: body.email,
    to: "ysouane0@gmail.com",
    subject: `Message from ${body.name}`,
    text: body.message,
    html: `
    <div>
    Nom : ${body.name}<br>
    Email : ${body.email}<br>
    Téléphone: ${body.phone}<br>
    Type d'événement: ${body.eventType}<br>
    Date de l'événement: ${body.date}<br>
    Message : ${body.message}
    </div>`,
  }

  transporter.sendMail(mailData, (err: Data, info: Data) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(info)
    }
  })
}
