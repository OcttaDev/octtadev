import '../../../responsive.css'
import Avatar from '../../../assets/perfil.jpg'






function Home() {
  return (
    <div className="flex justify-around items-center my-28 responsive" id='home'>
      <div className="text-white">
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
      <div>
        <img src={Avatar} alt="" className='w-60 rounded-full'/>
      </div>
    </div>
  );
}
export default Home;
