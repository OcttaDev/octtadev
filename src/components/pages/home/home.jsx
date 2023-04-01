import Avatar from "../../../assets/perfil.jpg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { IoArrowDownOutline } from "react-icons/io5";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-around items-center my-20 flex-wrap"
        id="home"
        data-aos="fade-up"
      >
        <div className="text-white" data-aos="flip-right">
          <h1 className="text-white text-3xl">Olá eu sou o Otávio :)</h1>
          <p className="text-[#828282]">Desenvolvedor Front-End</p>
          <div className="flex gap-2">
            <a
              href="https://github.com/OcttaDev"
              target="_blank"
              className="flex items-center  text-black font-bold my-10 justify-center h-10 w-40 bg-[#00DF5E]"
            >
              Github
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5583996357960"
              target="_blank"
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
      <div className="text-white m-auto animate-bounce" >
        <a href="#about"><IoArrowDownOutline size={30}/></a>
      </div>
    </div>
  );
}
export default Home;
