import { FC } from "react";
import "./Home.css";

interface IHomeProps {
  children: React.ReactNode;
  titulo?: string;
}

const Home: FC<IHomeProps> = ({ children, titulo = "AluraTasks" }) => {
  return (
    <>
      <section className="main">
        <div className="container">
          <div id="task-form">
            <h2>{titulo}</h2>
            <ul id="task-list">{children}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
