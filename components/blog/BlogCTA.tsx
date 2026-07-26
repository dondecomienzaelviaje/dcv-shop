import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>

        <div className="rounded-3xl border border-[#C8A04A]/20 bg-gradient-to-br from-neutral-900 to-black p-12 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            DCV BLOG
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            El conocimiento solo tiene valor cuando se convierte en acción.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-400">
            Muy pronto comenzaremos a publicar artículos exclusivos para ayudarte
            a fortalecer tu disciplina, desarrollar nuevas habilidades y acelerar
            tu crecimiento personal y profesional.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="#"
              className="inline-flex items-center gap-3 rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
            >
              Explorar artículos
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-neutral-700 px-8 py-4 font-bold transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
            >
              Volver al inicio
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}