import React from "react";
import {
  Chart as ChartJS,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

interface GraficaRadarProps {
  etiquetas: string[];
  conjuntosDatos: { etiqueta: string; datos: number[] }[];
}

const GraficaRadar: React.FC<GraficaRadarProps> = ({ etiquetas, conjuntosDatos }) => {
  const datos = {
    labels: etiquetas,
    datasets: conjuntosDatos.map((conjunto) => ({
      label: conjunto.etiqueta,
      data: conjunto.datos,
      backgroundColor: "rgba(111, 130, 255, 0.3)",
      borderColor: "#6F82FF",
      pointBackgroundColor: "#4151B7",
      pointBorderColor: "#FFF",
    })),
  };

  const opciones = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Conocimiento en Lenguajes de Programación" },
    },
    scales: {
      r: { beginAtZero: true },
    },
  };

  return <Radar data={datos} options={opciones} />;
};

export default GraficaRadar;
