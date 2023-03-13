import Project from "./Project";
import '../../../responsive.css'


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Projects() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 my-40 responsive" id="projects" data-aos="fade-up">
        <h1 className="text-white text-3xl">Projetos</h1>
      <div className="flex gap-5 responsive" data-aos="flip-down">
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
      </div>
      <div className="flex gap-5 responsive" data-aos="flip-up">
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
      </div>
    </div>
  );
}
export default Projects;
