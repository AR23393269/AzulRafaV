import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function RegistrarUsuario() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-secondary-white flex items-center justify-center">
      <div className="max-w-md mx-auto space-y-8 p-8 bg-primary-dark text-primary-white rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Crear un usuario
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <Label htmlFor="username" className="text-primary-white font-semibold">
                Nombre de usuario
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-primary-dark placeholder-neutral-dark text-primary-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Nombre de usuario"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email-address" className="text-primary-white font-semibold">
                Correo electrónico
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-primary-dark placeholder-neutral-dark text-primary-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-primary-white font-semibold">
                Contraseña
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-primary-dark placeholder-neutral-dark text-primary-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="text-primary-white font-semibold">
                Confirmar Contraseña
              </Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-primary-dark placeholder-neutral-dark text-primary-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Confirmar Contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-secondary-light text-white font-bold py-2 px-4 rounded"
            >
              Registrarse
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
