import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Dumbbell,
  Sparkles,
  Target,
  BriefcaseBusiness,
} from "lucide-react";

export const metadata = {
  title: "Botellón DCV | Disciplina | DCV",
  description:
    "Botellón DCV. Una herramienta creada para acompañar tu rutina, mantener tus objetivos presentes y representar el pilar de Disciplina.",
};

const benefits = [
  {
    title: "Para tu día",
    description:
      "Pensado para acompañarte mientras trabajas, estudias, entrenas o simplemente avanzas con tu rutina.",
  },
  {
    title: "Para tus hábitos",
    description:
      "Una presencia constante dentro de tu entorno para mantener visibles las acciones que quieres convertir en rutina.",
  },
  {
    title: "Para tu estilo",
    description:
      "Un producto con identidad DCV, creado para integrarse en tu día sin perder su carácter.",
  },
];

const routineItems = [
  {
    title: "Trabajo",
    description:
      "Mantén tu hidratación presente mientras avanzas en tus proyectos.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Entrenamiento",
    description:
      "Acompaña tus sesiones y las rutinas que decidiste mantener.",
    icon: Dumbbell,
  },
  {
    title: "Estudio",
    description:
      "Un elemento más dentro de un entorno diseñado para mantener el enfoque.",
    icon: Target,
  },
];

const disciplineValues = [
  "Hacer visible aquello que quieres mantener.",
  "Convertir acciones sencillas en parte de tu rutina.",
  "Crear un entorno que acompañe tus objetivos.",
  "Elegir productos que tengan un propósito dentro de tu día.",
];

export default function DisciplinaPage() {
  return (
    <main className="bg-black text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/images/pilares/disciplina/botellon-dcv-hero.webp"
            alt="Botellón DCV"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32 lg:items-center lg:pb-0">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#C8A04A]/40 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#C8A04A]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C8A04A]">
                DCV · Pilar 01
              </span>
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A04A]">
              Disciplina
            </p>

            <h1 className="mt-5 text-6xl font-black tracking-[-0.04em] md:text-8xl">
              Botellón
              <br />
              <span className="text-neutral-300">DCV.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
              Tu rutina habla de quién estás decidido a convertirte.
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
              Un producto DCV pensado para acompañarte durante el día,
              mantener tus objetivos presentes y convertir pequeñas
              decisiones en acciones constantes.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#botellon"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C8A04A] px-7 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
              >
                Conocer el Botellón DCV
                <ArrowRight size={18} />
              </a>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/30 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
              >
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT INTRO
      ========================================================= */}
      <section
        id="botellon"
        className="bg-black py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                El producto
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Más que un botellón.
                <br />
                Una parte de tu rutina.
              </h2>

              <p className="mt-7 text-lg leading-8 text-neutral-400">
                El Botellón DCV está pensado para acompañarte en los
                momentos que forman parte de tu día. Trabajo, estudio,
                entrenamiento y todas esas pequeñas acciones que,
                repetidas con intención, terminan convirtiéndose en
                hábitos.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-400">
                Su propósito dentro de DCV es sencillo: crear productos
                que tengan un lugar real en la vida de las personas.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <Droplets
                  size={22}
                  className="text-[#C8A04A]"
                />

                <span className="text-sm font-semibold text-neutral-300">
                  Diseñado alrededor del pilar de Disciplina
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950">
              <img
                src="/images/pilares/disciplina/botellon-dcv-angulo.webp"
                alt="Botellón DCV"
                className="h-[620px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DETAIL
      ========================================================= */}
      <section className="border-y border-white/10 bg-neutral-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
              Diseño DCV
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Lo que llevas también comunica.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Queremos que los productos DCV tengan identidad propia.
              Que no sean simplemente objetos con un logo, sino piezas
              capaces de formar parte de tu entorno y de tu manera de
              vivir.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <img
              src="/images/pilares/disciplina/botellon-dcv-detalle.webp"
              alt="Detalle del Botellón DCV"
              className="h-[620px] w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-black p-8 transition hover:border-[#C8A04A]/40"
              >
                <Sparkles
                  size={24}
                  className="text-[#C8A04A]"
                />

                <h3 className="mt-6 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ROUTINE
      ========================================================= */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src="/images/pilares/disciplina/botellon-dcv-rutina.webp"
                alt="Botellón DCV integrado en una rutina diaria"
                className="h-[620px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                Tu entorno importa
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Haz que tus objetivos formen parte de tu entorno.
              </h2>

              <p className="mt-7 text-lg leading-8 text-neutral-400">
                Lo que vemos todos los días puede convertirse en un
                recordatorio de aquello que queremos mantener.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-400">
                El Botellón DCV está pensado para estar ahí: visible,
                presente y listo para acompañarte mientras haces lo que
                decidiste hacer.
              </p>

              <div className="mt-9 h-px w-20 bg-[#C8A04A]" />

              <p className="mt-7 text-xl font-semibold leading-8 text-white">
                No se trata solamente de beber agua.
                <br />
                Se trata de construir una rutina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROUTINES / USE CASES
      ========================================================= */}
      <section className="border-y border-white/10 bg-neutral-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
              Hecho para acompañarte
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Un producto.
              <br />
              Diferentes momentos.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              La disciplina no ocurre en un solo lugar. Está presente en
              cada espacio donde decides mantener el compromiso contigo.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {routineItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black p-8"
                >
                  <Icon
                    size={28}
                    className="text-[#C8A04A]"
                  />

                  <h3 className="mt-7 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DAILY USE IMAGE
      ========================================================= */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
            <img
              src="/images/pilares/disciplina/botellon-dcv-uso-diario.webp"
              alt="Botellón DCV durante el día"
              className="h-[680px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 max-w-2xl p-8 md:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                DCV
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Tu entorno.
                <br />
                Tu rutina.
                <br />
                Tu decisión.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-300">
                El Botellón DCV está creado para integrarse naturalmente
                en esos momentos que forman tu día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRAINING
      ========================================================= */}
      <section className="border-y border-white/10 bg-neutral-950 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
              Disciplina en movimiento
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Aparece.
              <br />
              Hazlo.
              <br />
              Repite.
            </h2>

            <p className="mt-7 text-lg leading-8 text-neutral-400">
              El entrenamiento es uno de los lugares donde la disciplina
              se vuelve visible. Pero el principio es el mismo en
              cualquier área de tu vida: decidir, actuar y repetir.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-400">
              El Botellón DCV acompaña ese proceso como una herramienta
              cotidiana dentro de tu rutina.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <img
              src="/images/pilares/disciplina/botellon-dcv-entrenamiento.webp"
              alt="Botellón DCV durante el entrenamiento"
              className="h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCIPLINE MANIFESTO
      ========================================================= */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                El pilar
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                ¿Por qué Disciplina?
              </h2>

              <p className="mt-7 text-lg leading-8 text-neutral-400">
                Porque creemos que el cambio empieza mucho antes de ver
                resultados. Empieza cuando decides hacer algo y construyes
                la capacidad de mantener esa decisión.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-400">
                Por eso cada producto de esta colección tiene una razón de
                existir. El Botellón DCV representa la disciplina porque
                puede acompañar una acción sencilla que forma parte de
                cualquier rutina: cuidar de ti y mantener presente tu
                compromiso.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#C8A04A]/20 bg-neutral-950 p-8 md:p-10">
              <h3 className="text-xl font-bold">
                La idea detrás del producto
              </h3>

              <ul className="mt-7 space-y-5">
                {disciplineValues.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#C8A04A]"
                    />

                    <span className="leading-7 text-neutral-300">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT STATEMENT
      ========================================================= */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-h-[650px] items-center px-6 py-24 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                Botellón DCV
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Diseñado para acompañar la versión de ti que estás
                construyendo.
              </h2>

              <p className="mt-7 text-lg leading-8 text-neutral-400">
                DCV no se trata solamente de productos. Se trata de crear
                herramientas que tengan un propósito dentro de tu vida.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-400">
                El Botellón DCV es nuestra expresión del primer pilar:
                Disciplina.
              </p>
            </div>
          </div>

          <div className="min-h-[650px] overflow-hidden">
            <img
              src="/images/pilares/disciplina/botellon-dcv-disciplina.webp"
              alt="Botellón DCV - Disciplina"
              className="h-full min-h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL PRODUCT IMAGE
      ========================================================= */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
            Botellón DCV
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Lleva tu disciplina contigo.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Un producto creado alrededor de una idea sencilla: hacer que
            aquello que quieres construir también forme parte de tu
            entorno.
          </p>

          <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950">
            <img
              src="/images/pilares/disciplina/botellon-dcv-proximamente.webp"
              alt="Botellón DCV"
              className="h-[620px] w-full object-cover"
            />
          </div>

          <Link
            href="/products"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
          >
            Explorar productos DCV
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* =========================================================
          FINAL
      ========================================================= */}
      <section className="border-t border-white/10 bg-neutral-950 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A04A]">
            Disciplina
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Decide.
            <br />
            Hazlo.
            <br />
            Repite.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
            El Botellón DCV es parte de una colección construida alrededor
            de cuatro pilares: Disciplina, Mentalidad, Hábitos y Éxito.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
            >
              Conocer los 4 pilares
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
            >
              Ver colección
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}