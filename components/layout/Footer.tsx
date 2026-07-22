export default function Footer() {
    return (
      <footer className="border-t border-neutral-800 bg-black py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">
              DCV SHOP
            </h2>
  
            <p className="mt-2 text-sm text-gray-400">
              Donde la disciplina se convierte en un estilo de vida.
            </p>
          </div>
  
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © 2026 DCV Shop. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  }