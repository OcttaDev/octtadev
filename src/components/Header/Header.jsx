import '../../responsive.css'


function Header() {
  return (
    <div>
      <div className="flex justify-around items-center my-4" id='header'>
        <div className="text-white">
          <h1 className="text-2xl">Portfólio</h1>
        </div>
        <div>
          <ul className="flex text-white  list-none">
              <li className="mr-10">
                  <a href="#about">Sobre mim</a>
              </li>
              <li className="mr-10">
                  <a href="#projects">Projetos</a>
              </li>
              <li className="mr-10">
                  <a href="#services">Serviços</a>
              </li>
              <li>
                  <a href="#skills">Minhas Skills</a>
              </li>
          </ul>
        </div>
       
      </div>
      <div id='sidebar'>
          
        </div>
    </div>
  );
}
export default Header;
