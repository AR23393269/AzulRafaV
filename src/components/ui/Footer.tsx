function Footer() {
    return (
      <footer className="bg-gray-50 border-t-gray-100 border-t-2 pt-10 mt-16 box-border px-2">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row md:justify-between mb-10 gap-10 md:gap-5">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-3 mb-6">
            <div className="flex flex-col gap-5 md:gap-1">
              <p className="text-gray-700 text-3xl font-bold">
                <a href="/">
                  <h3 className="text-center md:text-start mb-3">My App</h3>
                </a>
              </p>
              <p className="text-center md:text-start">
                Potenciando tus ideas, una página a la vez.
              </p>
            </div>
          </div>
  
          <div>
            <h3 className="text-center text-lg font-semibold md:text-start mb-5">Enlaces Rápidos</h3>
            <nav className="flex flex-col items-center md:items-start gap-1">
              <a href="/" className="hover:text-cyan-500 transition-colors">
                Home
              </a>
              <a href="/dashboard" className="hover:text-cyan-500 transition-colors">
                Dashboard
              </a>
              <a href="/login" className="hover:text-cyan-500 transition-colors">
                LogIn
              </a>
            </nav>
          </div>
  
          <div>
            <h3 className="text-center text-lg font-semibold md:text-start mb-5">Contáctanos</h3>
            <div className="flex flex-col items-center md:block gap-3">
              <p>
                <span className="font-semibold">Correo:</span> info@myapp.com
              </p>
              <p className="my-2">
                <span className="font-semibold">Teléfono:</span> +123 456 789
              </p>
              <p>
                <span className="font-semibold">Dirección:</span> Calle Ejemplo 123, Ciudad
              </p>
            </div>
          </div>
  
          <div>
            <h3 className="text-center text-lg font-semibold md:text-start mb-5">Síguenos</h3>
            <div className="flex gap-3 mt-6 md:mt-0 justify-center">
              <a href="https://instagram.com" target="_blank">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank">
                Facebook
              </a>
              <a href="https://linkedin.com" target="_blank">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <hr />
          <p className="my-10 text-center text-md text-gray-400">
            © 2024 My App. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  