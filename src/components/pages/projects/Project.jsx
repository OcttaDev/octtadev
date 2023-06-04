import { IoLogoGithub } from "react-icons/io5";

function Project({ logo, titulo, tecnologias, link, github, design }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#333333] w-80 h-80 p-5 text-white gap-1 rounded-sm">
        <a href={link} target="_blank" className="flex justify-center w-4/5 h-4/5 decoration-none p-0 m-0">
          <img
            src={logo}
            alt="Logo image"
            className="bg-white w-4/5 h-4/5 rounded-md hover:p-1 transition-all"
          />
        </a>
        <div className=" flex items-center gap-2">
          <a href={github} target="_blank">
            <IoLogoGithub />
          </a>
          <h1 className="text-lg">
            <a href={github} target="_blank">
              {titulo}
            </a>
          </h1>
        </div>
        <div className="flex gap-2">
          <p className="text-green-400 ">{tecnologias[0]}</p>
          <p className="text-green-400 ">{tecnologias[1]}</p>
          <p className="text-green-400 ">{tecnologias[2]}</p>
        </div>
        <div className="flex flex-col items-center">
          <h1>Designer Responsavel</h1>
          <p className="text-green-400">{design}</p>
        </div>
      </div>
    </div>
  );
}
export default Project;
