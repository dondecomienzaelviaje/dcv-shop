import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AcademyCTA() {
  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>
        <div className="rounded-3xl border border-[#C8A04A]/20 bg-gradient-to-br from-neutral-900 to-black p-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            EL COMIENZO DE TU TRANSFORMACIÓN
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            El conocimiento cambia tu mente.
            <br />
            La disciplina cambia tu vida.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-400">
            Muy pronto lanzaremos los primeros programas de DCV Academy.
            Prepárate para aprender habilidades que podrás aplicar desde el
            primer día y construir una vida con propósito, disciplina y
            crecimiento constante.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/academy/programs"
              className="inline-flex items-center gap-3 rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
            >
              Explorar programas
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/products"
              className="rounded-xl border border-neutral-700 px-8 py-4 font-bold transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
            >
              Volver a la tienda
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}