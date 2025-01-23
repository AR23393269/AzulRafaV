import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Equipos from "./pages/Equipos";
import Recursos from "./pages/Recursos";
import TaskHub from "./pages/task-hub";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/task-hub" element={<TaskHub />} />
      </Routes>
    </Router>
  );
}

export default App;
