import React from "react";
import ITareaProps from "../Interfaces/ITareaProps";
import TaskStatus from "../Enums/TaskStatus";
import { getTaskStatusLabel } from "../utils/taskStatusUtils";
import "./ListaTarea.css";

const Tarea: React.FC<ITareaProps> = ({
  tarea,
  index,
  onFinalizar,
  onEliminar,
}) => {
  return (
    <li className="task-form-item" key={index.toString()}>
      <div className="task-header">
        <h3 className="task-header">{tarea.nombre}</h3>
        <div className="task-status">
          <p>{getTaskStatusLabel(tarea.estado)}</p>
        </div>
      </div>
      <p>
        <strong>Descripcion:</strong> {tarea.descripcion}
      </p>
      <p>
        <strong>Fecha de vencimiento: </strong>
        {tarea.fecha.toUTCString()}
      </p>
      <div className="acciones">
        {tarea.estado !== TaskStatus.Completed.toString() && (
          <button className="finalizar" onClick={() => onFinalizar(tarea.id)}>
            Finalizar
          </button>
        )}
        <button className="eliminar" onClick={() => onEliminar(tarea.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
