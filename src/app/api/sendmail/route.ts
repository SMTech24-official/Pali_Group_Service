import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Dynamically set allowed origin for development and production
const allowedOrigins = [
  "http://localhost:3000", 
  "https://www.paligroupservices.org", 
];

// Enable CORS manually
export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  const allowedOrigin = allowedOrigins.includes(origin || "") ? origin : "";

  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}

export const POST = async (req: Request) => {
  try {
    // Parse request body
    const body = await req.json();

    if (!body) {
      return new Response(
        JSON.stringify({ status: 404, message: "No data Found" }),
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": allowedOrigins.join(", "),
          },
        }
      );
    }

    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ status: 400, message: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": allowedOrigins.join(", "),
          },
        }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: process.env.NEXT_PUBLIC_EMAIL_USER,
        // pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
        user: "christina.pali@paligroupservices.org",
        pass: "flgh ozgd dnhh wcqq",
        // user: "rony830388@gmail.com",
        // pass: "alkp kjvk uceb tybj",
      },
    });

    // console.log("body", body)

    // Email options
    const mailOptions = {
      from: email,
      to: "christina.pali@paligroupservices.org",
      subject,
      text: message,
    };

    // console.log("mail option", mailOptions)

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ status: 200, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigins.join(", "),
        },
      }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ status: 500, message: errorMessage }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigins.join(", "),
        },
      }
    );
  }
};
