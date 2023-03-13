import { useState, useEffect } from "react";
import "./style.css";

import '../../../responsive.css'


import { IoMenuSharp } from "react-icons/io5";

function NavBar() {
    
    function active(){
        const body = document.body;
        const hamburguer = document.querySelector(".hamburguer");

        hamburguer.addEventListener("click", () => {
        body.classList.toggle("active");
        });
    }

 

  return (
    <div className="flex h-20 items-center navbar">
      <h1 className="text-white text-3xl ml-10">Portfólio</h1>
      <header>
        <div className="hamburguer">
          <i className="fas fa-bars text-white"><button onClick={active}> <IoMenuSharp/> </button></i>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link current">
                <span>
                  <i className="fas fa-home"></i>
                </span>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>
                  <i className="fas fa-address-card"></i>
                </span>
                Sobre mim
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>
                  <i className="fas fa-briefcase"></i>
                </span>
                Projetos
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>
                  <i className="fas fa-blog"></i>
                </span>
                Serviços
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link text-small">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                Minhas Skills
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="zoom">
          <section></section>
        </div>
      </main>
    </div>
  );
}
export default NavBar;
