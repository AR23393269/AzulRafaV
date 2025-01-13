import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState({
    name: "NOMBRE",
    email: "CORREO ELECTRONICO",
    country: "Mexico",
    phone: "123-456-7890",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Información actualizada:", userInfo);
    alert("Información actualizada exitosamente.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/2 bg-primary-light p-10 flex items-center justify-center">
        <p className="text-lg text-primary-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="w-1/2 bg-accent-light p-10 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-6 bg-primary-dark p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-primary-white text-center">
            Información del usuario
          </h2>
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-primary-white">
              Nombre
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={userInfo.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-primary-white">
              Correo electrónico
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <Label htmlFor="country" className="block text-sm font-medium text-primary-white">
              País
            </Label>
            <Input
              id="country"
              name="country"
              type="text"
              value={userInfo.country}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-primary-white">
              Número de teléfono
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={userInfo.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-secondary-light text-white font-bold py-2 px-4 rounded"
            >
              Guardar cambios
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
