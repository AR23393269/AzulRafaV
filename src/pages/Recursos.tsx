import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { LayoutGrid, Boxes, LogIn, UserPlus } from "lucide-react";

function Recursos() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-indigo-600 text-white px-4 py-3 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/Dashboard">
            <h1 className="text-xl font-bold">TaskHub</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/Equipos">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-indigo-500">
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Equipos
                </Button>
              </Link>
              <Link to="/task-hub">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-indigo-500">
                  <Boxes className="h-4 w-4 mr-2" />
                  Proyectos
                </Button>
              </Link>
              <Link to="/Recursos">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-indigo-500">
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Recursos
                </Button>
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/Login">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-indigo-500">
                <LogIn className="h-4 w-4 mr-2" />
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/Registro">
              <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-50">
                <UserPlus className="h-4 w-4 mr-2" />
                Registrar Usuario
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-indigo-700 rounded-lg p-8 mb-12">
            <h1 className="text-3xl font-bold text-white text-center">Recursos</h1>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mantenimiento Resource Card */}
            <div className="bg-indigo-700 rounded-lg p-8 flex flex-col items-center justify-center space-y-4">
              <div className="bg-gray-300 rounded-full p-6">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white text-center">Recursos para Mantenimiento</h2>
            </div>

            {/* Humanos Resource Card */}
            <div className="bg-indigo-700 rounded-lg p-8 flex flex-col items-center justify-center space-y-4">
              <div className="bg-gray-700 rounded-full p-6">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white text-center">Recursos Humanos</h2>
            </div>

            {/* Software Resource Card */}
            <div className="bg-indigo-700 rounded-lg p-8 flex flex-col items-center justify-center space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="relative">
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 text-blue-500 absolute bottom-0 right-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-white text-center">Recursos Software</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Recursos;
