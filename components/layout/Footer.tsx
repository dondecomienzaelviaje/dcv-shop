import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-black text-[#C8A04A]">
            DCV SHOP
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            Donde la disciplina se convierte en un estilo de vida.
            Productos seleccionados para impulsar tu productividad,
            crecimiento personal y rendimiento diario.
          </p>
        </div>

        {/* Explorar */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Explorar
          </h3>

          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <Link href="/" className="transition hover:text-white">
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="transition hover:text-white"
              >
                Productos
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Libros
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Papelería
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Accesorios
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Productividad
              </Link>
            </li>
          </ul>
        </div>

        {/* Atención */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Atención al cliente
          </h3>

          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <Link href="#" className="transition hover:text-white">
                Contacto
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Preguntas frecuentes
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Envíos
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Devoluciones
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Política de privacidad
              </Link>
            </li>

            <li>
              <Link href="#" className="transition hover:text-white">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* Comunidad */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Comunidad
          </h3>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/dondecomienzaelviaje/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-900 p-3 transition hover:bg-[#C8A04A] hover:text-black"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/dondecomienzaelviaje/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-900 p-3 transition hover:bg-[#C8A04A] hover:text-black"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@dondecomienzaelviaje?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-900 p-3 transition hover:bg-[#C8A04A] hover:text-black"
            >
              <FaTiktok size={20} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-900 p-3 transition hover:bg-[#C8A04A] hover:text-black"
            >
              <FaYoutube size={20} />
            </a>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-400">
            Síguenos para descubrir nuevos productos, consejos de
            productividad y contenido sobre crecimiento personal.
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 DCV Shop. Todos los derechos reservados.
          </p>

          <p>
            Desarrollado por{" "}
            <span className="font-semibold text-[#C8A04A]">
              DCV Corporation
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}