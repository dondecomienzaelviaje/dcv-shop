export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-yellow-500">
              DCV SHOP
            </h1>
          </div>
  
          {/* Menú */}
          <nav className="hidden gap-10 text-sm font-medium text-gray-300 md:flex">
            <a href="#" className="transition hover:text-yellow-500">
              Inicio
            </a>
  
            <a href="#" className="transition hover:text-yellow-500">
              Productos
            </a>
  
            <a href="#" className="transition hover:text-yellow-500">
              Categorías
            </a>
  
            <a href="#" className="transition hover:text-yellow-500">
              Nosotros
            </a>
  
            <a href="#" className="transition hover:text-yellow-500">
              Contacto
            </a>
          </nav>
  
          {/* Botón */}
          <button className="rounded-full border border-yellow-500 px-5 py-2 text-sm font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
            Mi carrito
          </button>
        </div>
      </header>
    );
  }