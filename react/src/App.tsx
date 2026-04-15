import { useState } from "react";
import { DataTable } from "./DataTable";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

function App() {
  const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 50 }
  ];

  const [editando, setEditando] = useState<Partial<Producto>>({});

  return (
    <div>
      <h1>Modulo 3 - React + TypeScript</h1>

      <DataTable data={productos} />

      <h2>Estado (Partial)</h2>
      <pre>{JSON.stringify(editando, null, 2)}</pre>
    </div>
  );
}

export default App;