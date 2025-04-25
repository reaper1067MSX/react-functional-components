//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import ListarTareas from "./components/ListaTareas";
import "./App.css";
import Home from "./views/Home";

function App() {
  //const [count, setCount] = useState<number>(0)

  return (
    <>
      <Home titulo={"My Alura Tasks"}>
        <ListarTareas />
      </Home>
    </>
  );
}

export default App;
