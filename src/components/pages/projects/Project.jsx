function Project({ titulo, tecnologias }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#333333] w-80 h-60 text-white gap-1 rounded-sm">
        <img src="" alt="" className="bg-white w-4/5 h-3/5" />
        <h1 className="text-lg">{titulo}</h1>
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
