import { FC, useState } from "react";
import ITarea from "../Interfaces/ITarea";
import Tarea from "./Tarea";
import "./ListaTarea.css";

const ListarTareas: FC = () => {
  const [filtro, setFiltro] = useState<string>("");
  const [finalizadas, setFinalizadas] = useState<boolean>(false);

  //const [tarea] = useState<ITarea>();
  const [tareas, setTareas] = useState<ITarea[]>([
    {
      id: 0,
      nombre: "Nueva Tarea",
      descripcion: "Descripcion",
      estado: "ejecucion",
      fecha: new Date("2023-10-01"),
    },
    {
      id: 1,
      nombre: "Aprender react + Typescript",
      descripcion: "Realizar la formacion alura",
      estado: "ejecucion",
      fecha: new Date("2023-10-01"),
    },
    {
      id: 2,
      nombre: "Memorizar react + Typescript",
      descripcion: "Realizar la formacion alura",
      estado: "Pausada",
      fecha: new Date("2023-10-01"),
    },
    {
      id: 3,
      nombre: "Clash Course react + Typescript",
      descripcion: "Realizar la formacion alura",
      estado: "Finalizada",
      fecha: new Date("2023-10-01"),
    },
    {
      id: 4,
      nombre: "Walkthrout react + Typescript",
      descripcion: "Realizar la formacion alura",
      estado: "Finalizada",
      fecha: new Date("2023-10-01"),
    },
  ]);

  const tareasFiltradas: ITarea[] = tareas.filter(
    (tarea: ITarea) =>
      (tarea.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        filtro === "") &&
      (!finalizadas || tarea.estado === "Finalizada")
  );

  const onFinalizar = (id: number) => {
    setTareas((prev) =>
      prev.map((tarea) =>
        tarea.id === id ? { ...tarea, estado: "Finalizado" } : tarea
      )
    );
  };

  const onEliminar = (id: number) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Type to filter"
        />
        <label>
          <input
            type="checkbox"
            checked={finalizadas}
            onChange={() => setFinalizadas(!finalizadas)}
          />{" "}
          Finalizadas
        </label>
      </div>
      <>
        <ul id="task-from">
          {tareasFiltradas.map((tarea, index) => (
            <Tarea
              tarea={tarea}
              index={index}
              onFinalizar={onFinalizar}
              onEliminar={onEliminar}
            />
          ))}
        </ul>
        <button>Agregar Tarea</button>
      </>
    </>
  );
};

export default ListarTareas;
