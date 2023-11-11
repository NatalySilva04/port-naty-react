import React from "react";
import imagem1 from "./Group_1.png";
import imagem2 from "./Group_2.png";
import imagem3 from "./Group_3.png";
import imagem4 from "./Group_4.png";
import imagem5 from "./Group_5.png";
import imagem6 from "./Group_6.png";


function Servico () {
    return (
        <section id="servico">
        <h2>Serviços e habilidades</h2>
        <div class="box">
          <div class="servico">
            <img src={imagem1} alt="Imagem 1" />
            <img src={imagem2} alt="Imagem 2" />
            <img src={imagem3} alt="Imagem 3" />
            <img src={imagem4} alt="Imagem 4" />
            <img src={imagem5} alt="Imagem 5" />
            <img src={imagem6} alt="Imagem 6" />
          </div>
        </div>
      </section>
    );
}

export default Servico;