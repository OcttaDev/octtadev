import Project from "./Project";

import ClinicaLogo from "../../../assets/logos/clinica.png";
import LoginLogo from "../../../assets/logos/loginpage.png";
import PortfolioLogo from "../../../assets/logos/portfolio.png";
import Logo from "../../../assets/logos/logoInit.png";

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
          logo={ClinicaLogo}
          titulo="Clinica"
          tecnologias={["React-js", "Tailwind-css", "Api"]}
          link="https://monumental-haupia-190f15.netlify.app/"
          github="https://github.com/OcttaDev/clinica-stj"
        />
        <Project
          logo={LoginLogo}
          titulo="Login Screen"
          tecnologias={["React-js", "Style-C", "Firebase"]}
          link="https://github.com/OcttaDev/screen-login"
          github="https://github.com/OcttaDev/screen-login"
        />
        <Project
          logo={PortfolioLogo}
          titulo="Meu PortFólio"
          tecnologias={["React-js", "Tailwind-css", "libs"]}
          link="https://octtadev.vercel.app/"
          github="https://github.com/OcttaDev/octtadev"
        />
        <Project
          logo={Logo}
          titulo="Em desenvolvimento"
          tecnologias={["html", "css", "js"]}
        />
        <Project
          logo={Logo}
          titulo="Em desenvolvimento"
          tecnologias={["html", "css", "js"]}
        />
        <Project
          logo={Logo}
          titulo="Em desenvolvimento"
          tecnologias={["html", "css", "js"]}
        />
      </div>
    </div>
  );
}
export default Projects;
