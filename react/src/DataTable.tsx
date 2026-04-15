type DataTableProps<T> = {
  data: T[];
};

export function DataTable<T>({ data }: DataTableProps<T>) {
  return (
    <div>
      <h2>Tabla de datos</h2>

      {data.map((item, index) => (
        <pre key={index}>
          {JSON.stringify(item, null, 2)}
        </pre>
      ))}
    </div>
  );
}