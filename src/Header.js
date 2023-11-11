import React from "react";
import logo from "./minha_foto.png";

function Header () {
      return (
       
        <header>
          <nav>
          <ul>
            <h1>Nataly Rodrigues</h1>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servico">Serviços</a></li>
            <li><a href="#projeto">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div id="logo">
          <img src={logo} alt="Minha foto" className="minha_foto" />
        </div>
        <section>
          <div class="initialText">
            <h2>
              Olá, Sou a Nataly <br /><br />
              FRONT-END DEVELOPER
            </h2>
            <h4>
              Aqui você irá saber mais sobre meus projetos e serviços que posso
              desenvolver. Fique a vontade para navegar e, para saber mais sobre
              meu trabalho, solicitar orçamento ou bater um papo, é só ir na aba
              de Contatos que lá tem os meios em que pode me achar.
            </h4>
          </div>
        </section>
      </header>
      
    );
}



export default Header;