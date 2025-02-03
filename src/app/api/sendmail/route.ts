import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    // Parse request body
    const body = await req.json();

    if (!body) {
      return new Response(
        JSON.stringify({ status: 404, message: "No data Found" }),
        { status: 404 }
      );
    }

    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ status: 400, message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: process.env.NEXT_PUBLIC_EMAIL_USER,
        // pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
        user: "christina.pali@paligroupservices.org",
        pass: "ouew pxvg kvqi zzaj",
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
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ status: 500, message: errorMessage }),
      { status: 500 }
    );
  }
};
