import "../../../responsive.css";
import Avatar from "../../../assets/perfil.jpg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="flex justify-around items-center my-28 responsive"
      id="home"

      data-aos="fade-up"
    >
      <div className="text-white" data-aos="flip-left">
        <h1 className="text-white text-3xl">Olá eu sou o Otávio :)</h1>
        <p className="text-[#828282]">Desenvolvedor Front-End</p>
        <div className="flex gap-2">
          <a
            href="#"
            className="flex items-center cursor-pointer text-black font-bold my-10 justify-center h-10 w-40 bg-[#00DF5E]"
          >
            Download CV
          </a>
          <a
            href="#"
            className="flex items-center cursor-pointer text-white font-bold my-10 justify-center h-10 w-40 border-[#333333] border-2 "
          >
            Entre em contato
          </a>
        </div>
      </div>
      <div data-aos="flip-up">
        <img src={Avatar} alt="" className="w-60 rounded-full" />
      </div>
    </div>
  );
}
export default Home;
