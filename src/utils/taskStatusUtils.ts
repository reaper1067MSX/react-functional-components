import TaskStatus from "../Enums/TaskStatus";

export function getTaskStatusLabel(status: string): string {
  switch (status) {
    case TaskStatus.Pending:
      return "Pendiente";
    case TaskStatus.InProgress:
      return "En progreso";
    case TaskStatus.Completed:
      return "Finalizado";
    case TaskStatus.Cancelled:
      return "Cancelado";
    default:
      return status;
  }
}
