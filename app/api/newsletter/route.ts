import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Correo inválido." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "DCV Shop <contacto@dcvcorp.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: "Nueva suscripción al newsletter",

      html: `
      <div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px;">
        <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:12px;padding:40px;border:1px solid #e5e5e5;">

          <h1 style="margin:0;color:#111;font-size:28px;">
            Nueva suscripción al newsletter
          </h1>

          <p style="color:#666;font-size:15px;margin-top:10px;">
            Alguien se suscribió desde el formulario del footer de DCV Shop.
          </p>

          <hr style="margin:30px 0;border:none;border-top:1px solid #ececec;">

          <p><strong>Correo:</strong> ${email}</p>

          <hr style="margin:35px 0;border:none;border-top:1px solid #ececec;">

          <p style="font-size:13px;color:#777;">
            Recuerda agregar este correo manualmente en Shopify (Clientes → Agregar cliente,
            marcando "Acepta marketing por correo") para que quede registrado ahí también.
          </p>

        </div>
      </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "No fue posible procesar la suscripción." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}