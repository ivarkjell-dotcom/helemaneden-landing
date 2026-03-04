import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "HeleMåneden <kontakt@helemaneden.no>",
      to: "kontakt@helemaneden.no",
      subject: "Ny påmelding til brukertest",
      html: `<p>Ny epost registrert:</p><p><strong>${email}</strong></p>`,
    });

    console.log("RESEND DATA:", data);
    console.log("RESEND ERROR:", error);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
