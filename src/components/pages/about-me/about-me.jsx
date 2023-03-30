import { useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMailUnreadOutline, IoLogoInstagram, IoCallOutline } from "react-icons/io5";


import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="text-white my-20 flex-wrap" id="about" data-aos="fade-up">
      <div className="flex justify-center text-white text-3xl">
        <h1>Sobre mim</h1>
      </div>
      <div className="flex justify-center max-w-[700px] m-auto mt-10 text-center">
        <span className="max-w-[550px]">
          Olá, eu me chamo Otávio e sou desenvolvedor ainda em formação, porém
          já tive experiências ao longo destes anos em que eu escolhi minha
          carreira profissional, sempre gostei do ramo tecnológico. Mesmo com
          experiências ainda dou continuidade aos meus estudos, apesar de tudo
          conhecimento nunca é demais.
        </span>
      </div>

      <div className="flex justify-center max-w-[700px] m-auto gap-5 my-10 info">

        <div className="flex justify-evenly gap-10 flex-wrap justify-center">
            <div className="flex  flex-col items-center justifyi-center gap-1">
                <i className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333333] text-[#00DF5E] p-2">
                  <BsEmojiSmile size={30} />
                </i>
                <h1 className="text-lg">Meu nome</h1>
                <p>Otávio Augusto</p>
            </div>
            <div className="flex  flex-col items-center justifyi-center gap-1 ">
                <i className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333333] text-[#00DF5E] p-2">
                  <IoMailUnreadOutline size={30} />
                </i>
                <h1 className="text-lg">E-mail</h1>
                <p>octtavo9@gmail.com</p>
            </div>
            <div className="flex  flex-col items-center justifyi-center gap-1 ">
                <i className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333333] text-[#00DF5E] p-2">
                  <IoLogoInstagram size={30} />
                </i>
                <h1 className="text-lg">Instagram</h1>
                <p>@mr.otavio</p>
            </div>
            <div className="flex  flex-col items-center justifyi-center gap-1">
                <i className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333333] text-[#00DF5E] p-2">
                  <IoCallOutline size={30} />
                </i>
                <h1 className="text-lg">Telefone</h1>
                <p>(83) 99635-7960</p>
            </div>
        </div>

      </div>
    </div>
  );
}
export default About;
