import { IoLogoGithub } from "react-icons/io5";

function Project({logo, titulo, tecnologias, link, github }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#333333] w-80 h-60 text-white gap-1 rounded-sm">
        <img src={logo} alt="" className="bg-white w-4/5 h-3/5 rounded-sm" /> 
        <div className=" flex items-center gap-2">
          <a href={github} target="_blank"><IoLogoGithub/></a>
          <h1 className="text-lg"><a href={link} target="_blank" >{titulo}</a></h1>
        </div>
        <div className="flex gap-2">
          <p className="text-green-400 ">{tecnologias[0]}</p>
          <p className="text-green-400 ">{tecnologias[1]}</p>
          <p className="text-green-400 ">{tecnologias[2]}</p>
        </div>
      </div>
    </div>
  );
}
export default Project;
