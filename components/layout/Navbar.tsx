export default function Navbar() {
    return (
      <header className="w-full border-b border-white/10 bg-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-widest text-yellow-500">
            DCV SHOP
          </h1>
  
          {/* Menú */}
          <ul className="hidden md:flex items-center gap-8 text-white">
            <li className="cursor-pointer hover:text-yellow-500 transition-colors">
              Inicio
            </li>
            <li className="cursor-pointer hover:text-yellow-500 transition-colors">
              Productos
            </li>
            <li className="cursor-pointer hover:text-yellow-500 transition-colors">
              Filosofía
            </li>
            <li className="cursor-pointer hover:text-yellow-500 transition-colors">
              Contacto
            </li>
          </ul>
  
          {/* Botón */}
          <button className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-400">
            Comienza tu viaje
          </button>
        </nav>
      </header>
    );
  }