import Project from "./Project";
import '../../../responsive.css'

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-40 responsive">
        <h1 className="text-white text-3xl">Projetos</h1>
      <div className="flex gap-5 responsive">
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
      </div>
      <div className="flex gap-5 responsive">
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
        <Project titulo="Projeto" tecnologias={["html", "css", "js"]} />
      </div>
    </div>
  );
}
export default Projects;
