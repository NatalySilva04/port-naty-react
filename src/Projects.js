import React from "react";
import imagem1 from "./calculadora_imc.jpg";
import imagem2 from "./fotoProjeto_02.jpg";
import imagem3 from "./fotoProjeto_03.jpg";
import imagem4 from "./fotoProjeto_04.jpg";



function Projects () {
  
    return (
        <section id="projeto">
        <h2>Projetos</h2>
        <div className="fotos">
          <div className="imagem">
            <a href="/calculadoraImc">
              <img src={imagem1} alt="Imagem 1" className="imagem"/>
              <p>Calculadora - IMC</p>
              
            </a>
          </div>
          <div className="imagem">
            <a>
              <img src={imagem2} alt="Imagem 2" />
              <p>Portfólio - Serviços</p>
            </a>
          </div>
          <div className="imagem">
            <a>
              <img src={imagem3} alt="Imagem 3" />
              <p>Portfólio - Projetos</p>
            </a>
          </div>
          <div className="imagem">
            <a>
              <img src={imagem4} alt="Imagem 3" />
              <p>Portfólio - Contatos</p>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Projects;