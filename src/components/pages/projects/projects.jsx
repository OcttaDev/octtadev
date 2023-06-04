import Project from "./Project";

import * as Logo from "../../../assets"


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 my-20"
      id="projects"
      data-aos="fade-up"
    >
      <h1 className="text-white text-3xl">Projetos</h1>
      <div className="flex items-center justify-center gap-5 flex-wrap " >
        <Project
          logo={Logo.logo1}
          titulo="Clinica"
          tecnologias={["React-js", "Tailwind-css", "Api"]}
          link="https://monumental-haupia-190f15.netlify.app/"
          github="https://github.com/OcttaDev/clinica-stj"
        />
        <Project
          logo={Logo.logo2}
          titulo="Login Screen"
          tecnologias={["React-js", "Style-C", "Firebase"]}
          link="https://github.com/OcttaDev/screen-login"
          github="https://github.com/OcttaDev/screen-login"
        />
        <Project
          logo={Logo.logo3}
          titulo="Meu PortFólio"
          tecnologias={["React-js", "Tailwind-css", "libs"]}
          link="https://octtadev.vercel.app/"
          github="https://github.com/OcttaDev/octtadev"
        />
        <Project
          logo={Logo.logo4}
          titulo="Calculadora imc"
          tecnologias={["React-Native", "StyleSheet", "js"]}
          link="https://github.com/OcttaDev/calculator"
          github="https://github.com/OcttaDev/calculator"
        />
        <Project
          logo={Logo.logo5}
          titulo="Loja Fabíola Tuppeware"
          tecnologias={["React", "Tailwind-css", "libs"]}
          design="Raynne Silva"
          link="https://fabiola-tuppeware.vercel.app/"
        />
        <Project
          logo={Logo.logo_init}
          titulo="Em desenvolvimento"
          tecnologias={["html", "css", "js"]}
        />
      </div>
    </div>
  );
}
export default Projects;
