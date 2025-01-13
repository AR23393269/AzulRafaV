export default function Header() {
    return (
      <header className="w-full bg-primary-dark text-primary-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Nombre del sitio */}
          <h1 className="text-xl font-bold">AzulRV</h1>
          
          {/* Navegación */}
          <nav className="flex items-center space-x-4">
            {/* Enlace al Dashboard */}
            <a
              href="/dashboard"
              className="text-sm font-medium hover:text-secondary-light"
            >
              Dashboard
            </a>
            
            {/* Botón al Login */}
            <button
              onClick={() => window.location.href = "/login"}
              className="bg-accent hover:bg-secondary-light text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </nav>
        </div>
      </header>
    );
  }
  