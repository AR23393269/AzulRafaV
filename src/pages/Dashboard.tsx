import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LayoutGrid, Boxes, LogIn, UserPlus } from "lucide-react";
import GraficaBarras from "../components/ui/GraficaBarras";
import GraficaRadar from "../components/ui/GraficaRadar";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const etiquetasTiempo = ["Alex", "Eduardo", "Miguel"];
  const datosTiempo = [6.5, 4.2, 6.7];

  const etiquetasConocimiento = ["JavaScript", "Tailwind CSS", "HTML"];
  const conjuntosConocimiento = [
    { etiqueta: "Alex", datos: [25, 50, 60] },
    { etiqueta: "Eduardo", datos: [10, 30, 45] },
    { etiqueta: "Miguel", datos: [20, 40, 65] },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
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
            <Link to="/login">
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

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold text-primary-dark mb-4">Bienvenido al Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-primary-dark mb-4">Horas Trabajadas</h3>
            <GraficaBarras
              etiquetas={etiquetasTiempo}
              datos={datosTiempo}
              titulo="Horas Trabajadas"
            />
          </div>
          <div className="bg-primary-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-primary-dark mb-4">Conocimiento en Lenguajes</h3>
            <GraficaRadar
              etiquetas={etiquetasConocimiento}
              conjuntosDatos={conjuntosConocimiento}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
