import ITarea from "./ITarea";

interface ITareaProps {
  tarea: ITarea;
  index: number;
  backgroundColor?: string;
  onFinalizar: (id: number) => void;
  onEliminar: (id: number) => void;
}

export default ITareaProps;
