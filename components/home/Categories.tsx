import { categories } from "@/app/data/categories";
export default function Categories() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500">
            DCV SHOP
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Explora por categorías
          </h2>

          <p className="mt-6 text-gray-400">
            Todo lo que necesitas para construir disciplina y una vida
            extraordinaria.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
            >
              <h3 className="text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}