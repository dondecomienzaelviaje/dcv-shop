"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Ocurrio un error. Intenta de nuevo.");
        return;
      }

      setStatus("success");
      setMessage("Listo! Ya estas suscrito.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Ocurrio un error. Intenta de nuevo.");
    }
  }

  return (
    <div>
      <h3 className="mb-3 text-lg font-bold">
        Unete a la comunidad
      </h3>

      <p className="mb-4 text-sm leading-6 text-zinc-400">
        Recibe novedades, lanzamientos y ofertas directo en tu correo.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          disabled={status === "loading"}
          className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#C8A04A]"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-[#C8A04A] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#D7AF56] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Suscribirme"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}