import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrarUsuario from './pages/Registro';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 py-10">
        <Routes>
          <Route path="/" element={<RegistrarUsuario />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
