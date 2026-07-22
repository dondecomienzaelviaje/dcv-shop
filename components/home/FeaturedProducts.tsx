export default function FeaturedProducts() {
    const products = [
      {
        id: 1,
        title: "Hábitos Atómicos",
        price: "$89.900",
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
      },
      {
        id: 2,
        title: "Agenda DCV 2027",
        price: "$59.900",
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600",
      },
      {
        id: 3,
        title: "Mug Modo Disciplina",
        price: "$39.900",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
      },
      {
        id: 4,
        title: "Kit Productividad",
        price: "$129.900",
        image:
          "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600",
      },
    ];
  
    return (
      <section className="bg-neutral-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="uppercase tracking-[0.4em] text-yellow-500">
              PRODUCTOS
            </p>
  
            <h2 className="mt-4 text-5xl font-bold">
              Productos destacados
            </h2>
  
            <p className="mt-6 text-gray-400">
              Herramientas diseñadas para ayudarte a construir una vida
              extraordinaria.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-cover"
                />
  
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {product.title}
                  </h3>
  
                  <p className="mt-3 text-2xl font-bold text-yellow-500">
                    {product.price}
                  </p>
  
                  <button className="mt-6 w-full rounded-full bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-400">
                    Comprar ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }