import Project from "./Project";
import '../../../responsive.css'
import ClinicaLogo from '../../../assets/clinica.png'
import LoginLogo from '../../../assets/loginpage.png'


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
        <Project logo={ClinicaLogo} titulo="Clinica" tecnologias={["React-js", "Tailwind", "Api"]} link="https://monumental-haupia-190f15.netlify.app/" github="https://github.com/OcttaDev/clinica-stj" />
        <Project logo={LoginLogo} titulo="Login Screen" tecnologias={["react", "style-c", "firebase"]} link="https://github.com/OcttaDev/screen-login" github="https://github.com/OcttaDev/screen-login" />
        <Project titulo="Em desenvolvimento" tecnologias={["html", "css", "js"]}  />
      </div>
      <div className="flex gap-5 responsive" data-aos="flip-up">
        <Project titulo="Em desenvolvimento" tecnologias={["html", "css", "js"]} />
        <Project titulo="Em desenvolvimento" tecnologias={["html", "css", "js"]} />
        <Project titulo="Em desenvolvimento" tecnologias={["html", "css", "js"]} />
      </div>
    </div>
  );
}
export default Projects;
