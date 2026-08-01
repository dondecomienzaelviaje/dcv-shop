"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      asunto: (form.elements.namedItem("asunto") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
      }

      alert("Tu mensaje fue enviado correctamente.");

      form.reset();
    } catch {
      alert("No fue posible enviar el mensaje. Inténtalo nuevamente.");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="mb-2 block text-sm text-zinc-400">
          Nombre completo
        </label>

        <input
          name="nombre"
          type="text"
          required
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-400">
          Correo electrónico
        </label>

        <input
          name="email"
          type="email"
          required
          placeholder="correo@ejemplo.com"
          className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-400">
          Asunto
        </label>

        <input
          name="asunto"
          type="text"
          required
          placeholder="¿En qué podemos ayudarte?"
          className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-400">
          Mensaje
        </label>

        <textarea
          name="mensaje"
          required
          rows={6}
          placeholder="Escribe aquí tu mensaje..."
          className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

    </form>
  );
}