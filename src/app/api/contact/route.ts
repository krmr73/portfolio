import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15分
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string) {
  const currentTime = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];

  // 過去のリクエストでウィンドウ外のものをフィルタリング
  const recentRequests = userRequests.filter(
    (timestamp: number) => currentTime - timestamp < RATE_LIMIT_WINDOW_MS
  );

  // 現在のリクエストタイムスタンプを追加
  recentRequests.push(currentTime);
  rateLimitMap.set(ip, recentRequests);

  // リクエスト数が上限を超えているか確認
  return recentRequests.length <= MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";

  // レートリミットをチェック
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: "Too many requests, please try again later." },
      { status: 429 }
    );
  }

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
