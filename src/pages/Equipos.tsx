import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { LayoutGrid, Boxes, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Equipos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [formData, setFormData] = useState({
    teamName: '',
    member1: '',
    member2: '',
    member3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOpenModal = (team = null) => {
    if (team) {
      setEditMode(true);
      setSelectedTeam(team);
      setFormData(team);
    } else {
      setEditMode(false);
      setFormData({ teamName: '', member1: '', member2: '', member3: '' });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTeam(null);
  };

  const handleSaveTeam = () => {
    if (editMode) {
      setTeams((prevTeams) =>
        prevTeams.map((team) =>
          team === selectedTeam ? { ...formData } : team
        )
      );
    } else {
      setTeams([...teams, formData]);
    }
    handleCloseModal();
  };

  const handleDeleteTeam = () => {
    setTeams(teams.filter((team) => team !== selectedTeam));
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-secondary-white">
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

      <main className="p-6 text-center">
        <Button
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOpenModal()}
        >
          Agregar un equipo
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 justify-center">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-primary-dark text-white p-4 rounded shadow-md w-full max-w-xs mx-auto"
            >
              <h2 className="text-xl font-bold">{team.teamName}</h2>
              <ul className="mt-2">
                <li>Miembro 1: {team.member1}</li>
                <li>Miembro 2: {team.member2}</li>
                <li>Miembro 3: {team.member3}</li>
              </ul>
              <Button
                className="mt-4 bg-secondary hover:bg-secondary-dark text-white py-1 px-2 rounded"
                onClick={() => handleOpenModal(team)}
              >
                Editar
              </Button>
            </div>
          ))}
        </div>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editMode ? 'Editar Equipo' : 'Crear Nuevo Equipo'}
            </h2>
            <form>
              <div className="mb-4">
                <Label htmlFor="teamName">Nombre del Equipo</Label>
                <Input
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="member1">Miembro 1</Label>
                <Input
                  id="member1"
                  name="member1"
                  value={formData.member1}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="member2">Miembro 2</Label>
                <Input
                  id="member2"
                  name="member2"
                  value={formData.member2}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="member3">Miembro 3</Label>
                <Input
                  id="member3"
                  name="member3"
                  value={formData.member3}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  className="bg-gray-500 text-white py-1 px-3 rounded"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </Button>
                {editMode && (
                  <Button
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    onClick={handleDeleteTeam}
                  >
                    Eliminar Equipo
                  </Button>
                )}
                <Button
                  className="bg-primary text-white py-1 px-3 rounded"
                  onClick={handleSaveTeam}
                >
                  {editMode ? 'Guardar Cambios' : 'Crear Equipo'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
