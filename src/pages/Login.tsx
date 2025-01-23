import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Inicio de sesión exitoso. Redirigiendo al Dashboard...");

    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-secondary-white">
      <div className="w-96 p-6 shadow-lg bg-primary-dark rounded-md">
        <h1 className="text-3xl block text-center font-semibold text-primary-white">
          Iniciar Sesión
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleLogin}>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2 text-primary-white">
              Nombre
            </label>
            <input
              type="text"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Ingrese su nombre"
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2 text-primary-white">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" />
              <label className="text-primary-white"> Recuérdame</label>
            </div>
            <a href="/Registro" className="text-secondary-light font-semibold">
              Crear una cuenta
            </a>
          </div>
          {successMessage && <p className="text-green-500 text-sm mt-3">{successMessage}</p>}
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-accent bg-accent text-white py-1 w-full rounded-md hover:bg-accent-dark font-semibold"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
