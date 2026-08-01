import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json();

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "DCV Shop <contacto@dcvcorp.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Nuevo mensaje de contacto | ${asunto}`,

      html: `
      <div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px;">
        <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:12px;padding:40px;border:1px solid #e5e5e5;">

          <h1 style="margin:0;color:#111;font-size:28px;">
            Nuevo mensaje desde DCV Shop
          </h1>

          <p style="color:#666;font-size:15px;margin-top:10px;">
            Se ha recibido una nueva solicitud desde el formulario de contacto.
          </p>

          <hr style="margin:30px 0;border:none;border-top:1px solid #ececec;">

          <p><strong>Nombre:</strong> ${nombre}</p>

          <p><strong>Correo:</strong> ${email}</p>

          <p><strong>Asunto:</strong> ${asunto}</p>

          <div style="margin-top:30px;padding:20px;background:#fafafa;border-left:4px solid #C8A04A;">
            ${mensaje.replace(/\n/g, "<br>")}
          </div>

          <hr style="margin:35px 0;border:none;border-top:1px solid #ececec;">

          <p style="font-size:13px;color:#777;">
            Este mensaje fue enviado automáticamente desde el formulario de contacto de DCV Shop.
          </p>

        </div>
      </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "No fue posible enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Error interno del servidor.",
      },
      {
        status: 500,
      }
    );
  }
}