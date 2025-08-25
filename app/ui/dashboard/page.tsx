"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    // Data dummy untuk grafik
    setData([12, 19, 3, 5, 2, 3]);
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>Selamat datang di dashboard. Berikut grafik contoh:</p>

      <svg width="400" height="200">
        {data.map((value, index) => (
          <rect
            key={index}
            x={index * 60}
            y={200 - value * 10}
            width="40"
            height={value * 10}
            fill="skyblue"
          />
        ))}
      </svg>
    </main>
  );
}
