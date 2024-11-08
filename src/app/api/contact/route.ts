import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // サニタイズとバリデーション
    if (email && !validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    const sanitizedMessage = validator.escape(message); // メッセージをエスケープ

    // Nodemailerの設定
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Portfolioサイトにて、${name}からの問い合わせ・ご意見`,
      text: `下記の内容の問い合わせ・ご意見がありました。

      名前: ${name}
      メール: ${email}
      メッセージ: ${sanitizedMessage}`,
    };
    // メールを送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
