import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface GraficaBarrasProps {
  etiquetas: string[];
  datos: number[];
  titulo: string;
}

const GraficaBarras: React.FC<GraficaBarrasProps> = ({ etiquetas, datos, titulo }) => {
  const datosGrafica = {
    labels: etiquetas,
    datasets: [
      {
        label: titulo,
        data: datos,
        backgroundColor: ["#6F82FF", "#3c4f9d", "#BCC5FF"],
        borderWidth: 1,
        borderColor: "#4151B7",
      },
    ],
  };

  const opciones = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: titulo },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Bar data={datosGrafica} options={opciones} />;
};

export default GraficaBarras;
