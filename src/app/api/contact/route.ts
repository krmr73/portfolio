import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Nodemailerの設定
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmailを使用する場合
      auth: {
        user: process.env.EMAIL_USER, // Gmailアカウントのメールアドレス
        pass: process.env.EMAIL_PASS, // Gmailアカウントのパスワード
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // 通知を受け取るメールアドレス
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission from:

      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    // メールを送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 },
    );
  }
}
