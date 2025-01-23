"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"
import { UserPlus, LogIn, LayoutGrid, Boxes } from "lucide-react"
import { Link } from "react-router-dom";

export default function TaskHub() {
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

      <main className="container mx-auto py-8 px-4">
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
            <TabsTrigger value="pending">Proyectos Pendientes</TabsTrigger>
            <TabsTrigger value="release">Proyectos a Liberar</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"].map((letter) => (
                <Card key={letter} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Proyecto {letter}</h3>
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">Pendiente</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Última actualización: hace 2 días</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="release" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <Card key={num} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Proyecto {num}</h3>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                        Listo para liberar
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Revisión completada</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
